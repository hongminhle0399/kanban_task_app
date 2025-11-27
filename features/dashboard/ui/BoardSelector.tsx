'use client'

import AppDialog from "@/shared/composed/dialog"
import { Button } from "@/shared/ui/button"
import { useState } from "react"
import { useBoardStore } from "../store/boardStore"
import { ChevronDown, Search } from "lucide-react"
import { Input } from "@/shared/ui/input"

export const BoardSelector = () => {
    const [open, setOpen] = useState<boolean>(false)
    const boards = useBoardStore(state => state.boards)
    const selectedBoardId = useBoardStore(state => state.selectedBoardId)
    const selectedBoard = boards.find(board => board.id === selectedBoardId)

    const [searchQuery, setSearchQuery] = useState<string>('')

    return <>
        <Button
            variant="outline"
            onClick={() => setOpen(true)}
            className="ml-2 border-2 hover:border-primary/50 hover:bg-primary/5 transition-all"
        >
            <span className="mr-2">{selectedBoard?.title || 'Select Board'}</span>
            <ChevronDown className="w-4 h-4" />
        </Button>
        <AppDialog showCloseButton={false} title="Select a board" open={open} onOpenChange={setOpen}>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Search boards..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-gray-300"
                />
            </div>
        </AppDialog>
    </>
}