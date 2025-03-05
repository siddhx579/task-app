"use server";

import { FormSchema } from "@/components/form/schema";
import prisma from "@/lib/prisma";
import { Prisma, Task } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from '@clerk/nextjs/server'

function revalidatePageData(){
    revalidatePath("/", "layout");
}

export async function createTask(task: Prisma.TaskCreateArgs["data"]) {
    const { userId } = await auth();
    if( !userId ) throw new Error("User not authenticated");

    await prisma.task.create({
        data: {
            description: task.description || "",
            status: task.status,
            title: task.title,
            userId,
        },
    });
    revalidatePageData();
}

export async function getTasks() {
    const { userId } = await auth();
    if( !userId ) throw new Error("User not authenticated");

    const tasks = await prisma.task.findMany({
        where: { userId },
        orderBy: { createdAt: "desc"}
    })
    return tasks;
}

export async function deleteTask(id: string){
    await prisma.task.delete({
        where: { id },
    });
    revalidatePageData();
}

export async function updateTask(task: Task){
    await prisma.task.update({
        where: { id: task.id },
        data: task,
    });
    revalidatePageData();
}

export async function getTaskCountByStatus() {
    const { userId } = await auth();
    if(!userId) throw new Error("User not authenticated");

    const [starting, progress, done] = await Promise.all([
        prisma.task.count({ where: { status: "starting", userId }}),
        prisma.task.count({ where: { status: "progress", userId }}),
        prisma.task.count({ where: { status: "done", userId }}),
    ]);
    return { starting, progress, done };
}