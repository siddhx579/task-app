import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '../ui/command'
import { PlusCircleIcon } from 'lucide-react'

const groups = [
    {
        label: "Personal Account",
        teams: [{ label: "Siddhant K." }],
    },
    {
        label: "Teams",
        teams: [
            { label: "Siddhant V1." },
            { label: "Siddhant V2." },
            { label: "Siddhant V3." },
        ],
    },
];

export default function TeamSwitcher() {
    return (
        <Popover>
            <PopoverTrigger>
                <div aria-label='Select a team' className='px-3 py-2 transition-all hover:bg-secondary flex rounded-2xl items-center gap-1.5 w-[200px] justify-between border'>
                    <Avatar className='mr-2 h-6 w-6'>
                        <AvatarImage src='http://avatar.vercel.sh/Siddhant.png' alt='Avatar' />
                        <AvatarFallback>EV</AvatarFallback>
                    </Avatar>
                    Siddhant Kapoor
                </div>
            </PopoverTrigger>
            <PopoverContent className='w-80'>
                <Command>
                    <CommandInput placeholder="Search Term..." />
                    <CommandList>
                        <CommandEmpty>No team found</CommandEmpty>
                        {groups.map((group) => (
                            <CommandGroup key={group.label} heading={group.label}>
                                {group.teams.map((team) => (
                                    <CommandItem key={team.label} className="text-sm">
                                        <Avatar className="mr-2 h-5 w-5">
                                            <AvatarImage alt={team.label} src={`https://avatar.vercel.sh/${team.label}.png`} />
                                            <AvatarFallback className="uppercase">
                                                {team.label}
                                            </AvatarFallback>
                                        </Avatar>
                                        {team.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        ))}
                    </CommandList>
                    <CommandSeparator />
                    <CommandList>
                        <CommandGroup>
                            <CommandItem>
                                <PlusCircleIcon className="mr-2 h-5 w-5" />
                                Create Team
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}