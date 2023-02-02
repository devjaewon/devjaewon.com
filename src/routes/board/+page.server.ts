import { prisma } from "@/lib/client/prisma";
import type { Task } from "@/types/struct";

export interface PageLoadData {
    tasks: Array<Task>
}

export async function load(): Promise<PageLoadData> {
    const tasks: Task[] = await prisma.task.findMany({
        where: {
            complete: true,
        }
    });

    return {
        tasks,
    };
}