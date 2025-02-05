import React from 'react'
import { CardDescription, CardTitle } from '../ui/card'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '../ui/table'
import { getTasks } from '@/services/task'

export default async function TaskList() {
    const tasks = await getTasks()

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <CardTitle>Your tasks for today</CardTitle>
                <CardDescription>Let&apos;s get everything done</CardDescription>
            </div>
            <Table className="w-fill h-full">
                <TableCaption>A list of your tasks</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                </TableBody>
            </Table>
        </div>
    )
}
