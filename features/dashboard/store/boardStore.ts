import { create } from 'zustand'
import { Board } from "../types/board.types"

export interface BoardState {
    selectedBoardId: string | null
    boards: Board[]
    setSelectedBoardId: (boardId: string) => void
    setBoards: (boards: Board[]) => void
}

export const useBoardStore = create<BoardState>((set) => ({
    boards: [],
    selectedBoardId: null,
    setBoards: (boards: Board[]) => set({ boards }),
    setSelectedBoardId: (boardId: string | null) => set({ selectedBoardId: boardId })
}))