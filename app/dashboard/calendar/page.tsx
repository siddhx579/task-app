import React from 'react'
import Calendar from './Calendar'
import Navbar from '@/components/navbar'
import { getTasks } from '@/services/task'

export default async function page() {
    const tasks = await getTasks();

    return (
        <div>
            <Navbar />
            <Calendar tasks={tasks} />
        </div>
    )
}