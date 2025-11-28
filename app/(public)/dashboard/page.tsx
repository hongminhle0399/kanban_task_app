import { Button } from "@/shared/ui/button";
import { FolderOpen, Plus } from "lucide-react";

export default function Page() {
    return <div className="h-min-screen">
        <div className="h-full flex items-center justify-center p-8">
            <div className="text-center max-w-md">
                <div className="mb-6 flex justify-center">
                    <div className="bg-linear-to-br from-blue-100 to-blue-200 p-8 rounded-full">
                        <FolderOpen className="w-16 h-16 text-blue-600" />
                    </div>
                </div>
                <h2 className="text-2xl mb-3 text-foreground">No Boards Yet</h2>
                <p className="text-muted-foreground mb-6">
                    Get started by creating your first board to organize your tasks and projects.
                </p>
                <Button
                    // onClick={() => setShowBoardSelector(true)}
                    className="gap-2 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md"
                >
                    <Plus className="w-4 h-4" />
                    Create Your First Board
                </Button>
            </div>
        </div>
    </div >
}