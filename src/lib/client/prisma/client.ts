import { PrismaClient } from "@prisma/client";
import { browser } from "$app/environment";

const client = browser ? null : new PrismaClient();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const prisma = client!;
