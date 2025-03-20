"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { PlusCircleIcon } from "lucide-react";
import { useUser, useOrganizationList } from "@clerk/nextjs";

export default function TeamSwitcher() {
    const { user } = useUser();
    const { isLoaded, userMemberships } = useOrganizationList(); // Correct usage

    // Get the list of organizations the user is a member of
    const teams = isLoaded ? userMemberships.data.map((org) => ({ label: org.organization.name })) : [];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div aria-label="Select a team" className="px-3 py-2 transition-all hover:bg-secondary flex rounded-2xl items-center gap-1.5 w-[200px] justify-between border cursor-pointer">
                    <Avatar className="mr-2 h-6 w-6">
                        <AvatarImage src="http://avatar.vercel.sh/default.png" alt="Avatar" />
                        <AvatarFallback>{user?.fullName?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                    {user?.fullName || "Personal Account"}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
                <DropdownMenuGroup>
                    <div className="px-2 py-1 text-sm font-medium text-gray-600">Personal Account</div>
                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                        <Avatar className="h-5 w-5">
                            <AvatarImage src="http://avatar.vercel.sh/default.png" alt="User" />
                            <AvatarFallback>{user?.fullName?.charAt(0) || "U"}</AvatarFallback>
                        </Avatar>
                        {user?.fullName || "Personal Account"}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                {teams.length > 0 && (
                    <>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <div className="px-2 py-1 text-sm font-medium text-gray-600">Teams</div>
                            {teams.map((team) => (
                                <DropdownMenuItem key={team.label} className="flex items-center gap-2 cursor-pointer">
                                    <Avatar className="h-5 w-5">
                                        <AvatarImage alt={team.label} src={`https://avatar.vercel.sh/${team.label}.png`} />
                                        <AvatarFallback>{team.label.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    {team.label}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                    </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                    <PlusCircleIcon className="h-5 w-5" />
                    Create Team
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}