"use client";
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

type Props = {
    data: { status: string; count: number; fill: string }[];
};

const config = {
    starting: { label: "Starting" },
    progress: { label: "Progress" },
    done: { label: "Done" },
};

export default function ChartsComp(props: Props) {
    const { data } = props;
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="flex items-center pb-0">
                <CardTitle>Bar Charts</CardTitle>
                <CardDescription>Your Tasks Status</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer config={config} className="h-full w-full">
                    <BarChart accessibilityLayer data={data}>
                        <CartesianGrid vertical />
                        <XAxis dataKey="status" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => config[value as keyof typeof config]?.label} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Bar dataKey="count" strokeWidth={2} radius={20} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
