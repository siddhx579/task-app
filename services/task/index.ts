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