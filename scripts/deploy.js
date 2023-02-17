import * as path from "path";
import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config();

import { S3Client, ListBucketsCommand, PutObjectCommand } from "@aws-sdk/client-s3";

main();

const contentTypes = {
    "json": "application/json",
    "html": "text/html",
    "css": "text/css",
    "js": "text/javascript",
    "woff": "font/woff",
    "woff2": "font/woff2",
    "png": "image/png",
    "jpg": "image/jpeg",
    "jpeg": "image/jpeg",
    "svg": "image/svg+xml",
    "ico": "image/x-icon",
}

async function main() {
    try {
        const client = new S3Client({
            region: "auto",
            endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
            credentials: {
                accessKeyId: process.env.ACCESS_KEY_ID,
                secretAccessKey: process.env.SCRET_ACCESS_KEY,
            },
        });
        
        
        if (!(await checkBucket(client, process.env.BUCKET_NAME))) {
            throw new Error("invalid bucket");
        };
        await uploadTree(
            client,
            "./build",
            process.env.BUCKET_NAME,
            (pathName) => pathName.substring(6),
        );
    } catch (err) {
        console.error(err);
    }
}

async function checkBucket(client, bucketName) {
    const result = await client.send(new ListBucketsCommand({}));
    const exist = result.Buckets.findIndex(item => item.Name === bucketName) >= 0;

    return exist;
}

async function uploadTree(
    client,
    directory,
    bucketName,
    bucketPathGenerator,
) {
    const promises = [];

    eachNode(directory, (pathName) => {
        const ext = getExtension(pathName);
        const contentType = contentTypes[ext] || undefined;

        const bucketPath = bucketPathGenerator(pathName);
        const fileStream = fs.createReadStream(pathName);
        const promise = client.send(new PutObjectCommand({
            ContentType: contentType,
            Bucket: bucketName,
            Key: bucketPath,
            Body: fileStream,
        }));

        promises.push(promise);
    })

    await Promise.all(promises);
}

function eachNode(directory, callback) {
    fs.readdirSync(directory).forEach(fileName => {
        if (fileName[0] === ".") {
            return;
        }

        const filePath = path.join(directory, fileName);

        if (fs.statSync(filePath).isFile()) {
            callback(filePath);
        } else {
            eachNode(filePath, callback);
        }
    })
}

function getExtension(filePath) {
    return filePath.substring(filePath.lastIndexOf(".") + 1);
}
