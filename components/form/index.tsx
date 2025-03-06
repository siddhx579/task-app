"use client";
import React, { useState } from 'react'
import { Form as FormComp, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema, { FormSchema, TaskStatus } from './schema';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import StatusBullet from '../StatusBullet';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { IoAddOutline } from "react-icons/io5";
import { createTask, deleteTask, updateTask } from '@/services/task';
import { VscLoading } from "react-icons/vsc";
import { useToast } from '@/hooks/use-toast';
import { Task } from '@prisma/client';
import { useUser } from '@clerk/nextjs';

type Props = {
    task?: Task;
    onSubmitorDelete?: () => void;
    defaultDate?: Date
};

export default function Form(props: Props) {
    const { user } = useUser();
    const { task, onSubmitorDelete } = props;
    const isEditing = !!task;
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: isEditing
            ? {
                title: task.title,
                description: task.description,
                status: task.status as TaskStatus,
            } : {
                title: "",
                description: "",
                status: "starting",
            },
    });

    const { toast } = useToast();

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: FormSchema) => {
        setIsLoading(true);
        if (!isEditing) {
            if (!user) {
                toast({ title: "You must be logged in to create a task!", variant: "destructive" });
                setIsLoading(false);
                return;
            }

            await createTask({
                ...data,
                userId: user.id,
                description: data.description || "",  // Ensure it's always a string
            });

            form.reset({ title: "", description: "", status: "starting" });
        } else {
            const newTask = {
                id: task.id,
                createdAt: task.createdAt,
                description: data.description || "",  // Ensure it's always a string
                status: data.status,
                title: data.title,
            } as Task;

            await updateTask(newTask);
        }

        setIsLoading(false);
        toast({ title: isEditing ? "Your task was edited successfully!" : "Your new task was created successfully!" });
        onSubmitorDelete?.();
    };

    const onDelete = async () => {
        if (!task?.id) return;
        await deleteTask(task.id);
        onSubmitorDelete?.();
    };

    return (
        <FormComp {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <div className="flex items-center gap-3">
                    <FormField control={form.control} name="title" render={({ field }) => (
                        <FormItem className="grow">
                            <FormMessage />
                            <FormControl>
                                <Input placeholder="What do you have to do?" {...field} />
                            </FormControl>
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="status" render={({ field }) => (
                        <FormItem className="grow">
                            <FormMessage />
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Status" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="starting">
                                        <StatusBullet status="starting" />
                                    </SelectItem>
                                    <SelectItem value="progress">
                                        <StatusBullet status="progress" />
                                    </SelectItem>
                                    <SelectItem value="done">
                                        <StatusBullet status="done" />
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )} />
                    {isEditing ? null : (
                        <Button type="submit" icon={isLoading ? (<VscLoading className="animate-spin" />) : (<IoAddOutline />)}>
                            Add Task
                        </Button>
                    )}
                </div>
                <FormField control={form.control} name="description" render={({ field }) => (
                    <FormItem>
                        <FormMessage />
                        <FormControl>
                            <Textarea placeholder="Give more information about the task" className="resize-none" {...field} />
                        </FormControl>
                    </FormItem>
                )} />
                {isEditing ? (
                    <div className="flex item-center gap-2">
                        <Button type="submit" disabled={isLoading}>
                            Save Changes
                        </Button>
                        <Button variant="destructive" onClick={onDelete} disabled={isLoading}>
                            Delete
                        </Button>
                    </div>
                ) : null}
            </form>
        </FormComp>
    );
}