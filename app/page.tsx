import Form from "@/components/form";
import Navbar from "@/components/navbar";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <ResizablePanelGroup className="h-full w-full border border-t-0" direction="horizontal">
        <ResizablePanel>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel>
              <div className="h-full flex flex-col justify-center p-6 space-y-4">
                <div className="space-y-2">
                  <CardTitle>Create a New Task</CardTitle>
                  <CardDescription>What do you have to do today</CardDescription>
                </div>
                <Form />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
              Charts
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          List
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}