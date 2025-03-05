"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

type Props = {
    children: React.ReactNode;
};

export default function ProvidersWrapper({ children }: Props) {
    return (
        <ClerkProvider>
            <Toaster />
            {children}
        </ClerkProvider>
    );
}