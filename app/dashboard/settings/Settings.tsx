"use client";

import React from "react";
import { UserProfile } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Settings() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
            <Card className="max-w-5xl shadow-lg rounded-lg">
                <CardHeader>
                    <CardTitle className="text-center">Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <UserProfile 
                        appearance={{
                            elements: {
                                rootBox: "w-full",
                                card: "shadow-none border-none",
                            }
                        }} 
                    />
                </CardContent>
            </Card>
        </div>
    );
}