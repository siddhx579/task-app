import React from 'react'
import TeamSwitcher from './team-switcher'
import Links from './links'
import Search from './search'
import { UserButton } from '@clerk/nextjs';

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center px-4 py-3'>
            <div className='flex items-center gap-12 '>
                <TeamSwitcher />
                <Links />
            </div>
            <div className="flex items-center gap-4">
                <Search />
                <UserButton />
            </div>
        </nav>
    );
}