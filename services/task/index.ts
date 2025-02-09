"use server";

import { FormSchema } from "@/components/form/schema";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function revalidatePageData(){
    revalidatePath("/", "layout");
}

export async function createTask(task: FormSchema) {
    await prisma.task.create({
        data: {
            description: task.description || "",
            status: task.status,
            title: task.title
        },
    });
    revalidatePageData();
}

export async function getTasks() {
    const tasks = await prisma.task.findMany({orderBy:
        { createdAt: "desc"}
    })
    return tasks;
}