

import { UserListItemModel } from "./users";
import { KanbanColumnModel } from "./tasks"; // Assuming initialization uses this structure

export interface BoardSummaryModel {
    id: string;
    name: string;
    description: string;
    membersCount: number;
    lastActivity: string;
    isStarred: boolean;
}

const mockBoardSummaries: BoardSummaryModel[] = [
    {
        id: "board-1",
        name: "Q4 Marketing Project",
        description: "Managing tasks for the final quarter campaign rollout.",
        membersCount: 8,
        lastActivity: "2 minutes ago",
        isStarred: true,
    },
    {
        id: "board-2",
        name: "Product Feature Launch V2",
        description: "Development and rollout plan for Version 2 features.",
        membersCount: 15,
        lastActivity: "1 hour ago",
        isStarred: false,
    },
    {
        id: "board-3",
        name: "HR Onboarding Documentation",
        description: "Internal project for updating new employee onboarding workflows.",
        membersCount: 4,
        lastActivity: "Yesterday",
        isStarred: true,
    },
];

export function getBoardList(): BoardSummaryModel[] {
    return mockBoardSummaries;
}

// Interfaces for Board Settings
export type BoardPermissionLevel = "Read Only" | "Editor" | "Admin";

export interface BoardMemberModel extends UserListItemModel {
    permission: BoardPermissionLevel;
}

export interface BoardSettingsModel {
    boardId: string;
    boardName: string;
    description: string;
    visibility: "Public" | "Private";
    defaultColumns: Array<{ id: string, name: string }>;
    members: BoardMemberModel[];
}


export function getBoardSettings(boardId: string): BoardSettingsModel {
    // Mock settings data for board-1
    return {
        boardId: boardId,
        boardName: "Q4 Marketing Project",
        description: "Managing tasks for the final quarter campaign rollout.",
        visibility: "Private",
        defaultColumns: [
            { id: "col-1", name: "To Do" },
            { id: "col-2", name: "In Progress" },
            { id: "col-3", name: "Done" },
            { id: "col-4", name: "On Hold" },
        ],
        members: [
            { id: "user-1", name: "Alex Johnson", avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/28/bab55b77-768b-4c60-bad8-e714daee20d6.png", permission: "Admin" },
            { id: "user-2", name: "Maria Sanchez", avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/28/2b9ac789-444b-485d-a01c-10a22494d3ad.png", permission: "Editor" },
            { id: "user-3", name: "Thomas Lee", avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/28/a0364dd1-3da6-4403-9186-10610acbb241.png", permission: "Read Only" },
        ]
    };
}

