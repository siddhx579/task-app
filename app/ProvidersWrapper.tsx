"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { dark } from "@clerk/themes";

type Props = {
    children: React.ReactNode;
};

export default function ProvidersWrapper({ children }: Props) {
    return (
        <ClerkProvider appearance={{
            baseTheme: dark,
        }}>
            <Toaster />
            {children}
        </ClerkProvider>
    );
}