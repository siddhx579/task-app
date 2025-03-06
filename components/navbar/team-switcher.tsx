import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { PlusCircleIcon } from "lucide-react";

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
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div aria-label="Select a team" className="px-3 py-2 transition-all hover:bg-secondary flex rounded-2xl items-center gap-1.5 w-[200px] justify-between border cursor-pointer">
                    <Avatar className="mr-2 h-6 w-6">
                        <AvatarImage src="http://avatar.vercel.sh/Siddhant.png" alt="Avatar" />
                        <AvatarFallback>EV</AvatarFallback>
                    </Avatar>
                    Siddhant Kapoor
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
                {groups.map((group) => (
                    <DropdownMenuGroup key={group.label}>
                        <div className="px-2 py-1 text-sm font-medium text-gray-600">{group.label}</div>
                        {group.teams.map((team) => (
                            <DropdownMenuItem key={team.label} className="flex items-center gap-2 cursor-pointer">
                                <Avatar className="h-5 w-5">
                                    <AvatarImage alt={team.label} src={`https://avatar.vercel.sh/${team.label}.png`} />
                                    <AvatarFallback className="uppercase">{team.label.charAt(0)}</AvatarFallback>
                                </Avatar>
                                {team.label}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuGroup>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                    <PlusCircleIcon className="h-5 w-5" />
                    Create Team
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}