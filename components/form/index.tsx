"use client";
import React, { useState } from 'react'
import { Form as FormComp, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema, { FormSchema } from './schema';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import StatusBullet from '../StatusBullet';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { IoAddOutline } from "react-icons/io5";
import { createTask } from '@/services/task';
import { VscLoading } from "react-icons/vsc";
import { useToast } from '@/hooks/use-toast';

export default function Form() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    const { toast } = useToast();

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: FormSchema) => {
        setIsLoading(true);
        await createTask(data);
        setIsLoading(false);
        toast({title: "Your new task was created successfully!"});
    }

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
                    <Button type="submit" icon={isLoading ? (<VscLoading className="animate-spin" />) : (<IoAddOutline />)}>
                        Add Task
                    </Button>
                </div>
                <FormField control={form.control} name="description" render={({ field }) => (
                    <FormItem>
                        <FormMessage />
                        <FormControl>
                            <Textarea placeholder="Give more information about the task" className="resize-none" {...field} />
                        </FormControl>
                    </FormItem>
                )} />
            </form>
        </FormComp>
    )
}