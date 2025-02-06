"use server";

import { FormSchema } from "@/components/form/schema";
import prisma from "@/lib/prisma";

export async function createTask(task: FormSchema) {
    await prisma.task.create({
        data: {
            description: task.description || "",
            status: task.status,
            title: task.title
        }
    })
}

export async function getTasks() {
    const tasks = await prisma.task.findMany({orderBy:
        { createdAt: "desc"}
    })
    return tasks
}