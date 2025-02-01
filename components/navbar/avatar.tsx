import React from "react";
import { Avatar as AvatarComp, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Avatar() {
    return (
        <AvatarComp className="mr-2 h-8 w-8">
            <AvatarImage alt="Siddhant Kapoor" src={'https://avatars.githubusercontent.com/u/109038046?v=4'} />
            <AvatarFallback className="uppercase">
                SK
            </AvatarFallback>
        </AvatarComp>
    )
}