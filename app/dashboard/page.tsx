import Charts from "@/components/charts";
import Form from "@/components/form";
import Navbar from "@/components/navbar";
import TaskList from "@/components/task-list";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function DashBoard() {
    return (
        <div className="h-screen flex flex-col justify-between">
            <Navbar />
            <ResizablePanelGroup className="h-full w-full border border-t-0" direction="horizontal">
                <ResizablePanel defaultSize={30}>
                    <ResizablePanelGroup direction="vertical">
                        <ResizablePanel defaultSize={40}>
                            <div className="h-full flex flex-col justify-center p-6 space-y-4">
                                <div className="space-y-2">
                                    <CardTitle>Create a New Task</CardTitle>
                                    <CardDescription>What do you have to do today</CardDescription>
                                </div>
                                <Form />
                            </div>
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel className="min-h-[30vh] flex-1" defaultSize={60}>
                            <Charts />
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel className="max-w-[75vw] min-w-[30vw]" defaultSize={70}>
                    <div className="h-full overflow-y-auto p-6">
                        <TaskList />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}