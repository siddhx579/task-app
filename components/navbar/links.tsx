"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Links() {
    const pathname = usePathname();

    const getLinkClass = (href: string) =>
        pathname === href ? "text-primary font-medium" : "text-muted font-medium hover:text-primary";

    return (
        <div className="flex items-center space-x-4 lg:space-x-6 hover:cursor-pointer">
            <Link href="/dashboard">
                <span className={`text-sm transition-colors ${getLinkClass("/dashboard")}`}>
                    Task
                </span>
            </Link>
            <Link href="/dashboard/calendar">
                <span className={`text-sm transition-colors ${getLinkClass("/dashboard/calendar")}`}>
                    Calendar
                </span>
            </Link>
            <Link href="/dashboard/settings">
                <span className={`text-sm transition-colors ${getLinkClass("/dashboard/settings")}`}>
                    Settings
                </span>
            </Link>
        </div>
    );
}