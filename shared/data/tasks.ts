

import { UserListItemModel } from "./users";

export type TaskPriority = "Urgent" | "High" | "Medium" | "Low";

export interface CheckListItemModel {
    id: string;
    text: string;
    isComplete: boolean;
}

export interface TaskCardModel {
    id: string;
    title: string;
    priority: TaskPriority;
    owner?: UserListItemModel;
    statusId: string; // Refers to the KanbanColumnModel.id
    checklistsCompleted: number;
    checklistsTotal: number;
}

export interface TaskDetailModel extends TaskCardModel {
    description: string;
    checklists: CheckListItemModel[];
    createdAt: string;
    dueDate: string;
}

export interface KanbanColumnModel {
    id: string;
    name: string;
    tasks: TaskCardModel[];
}

export interface KanbanBoardModel {
    id: string;
    name: string;
    columns: KanbanColumnModel[];
}

const mockTasks: TaskDetailModel[] = [
    {
        id: "task-101",
        title: "Implement responsive navigation bar",
        description: "Ensure the main application navigation bar correctly adjusts components and links for mobile, tablet, and desktop viewing resolutions.",
        priority: "High",
        owner: { id: "user-2", name: "Maria Sanchez", avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/28/78d4c92c-5aa6-4f77-92f2-dbd40e838011.png" },
        statusId: "col-1",
        checklistsCompleted: 1,
        checklistsTotal: 3,
        createdAt: "2025-11-20",
        dueDate: "2025-12-05",
        checklists: [
            { id: "c1", text: "Design assets approved", isComplete: true },
            { id: "c2", text: "Draft HTML/CSS structure", isComplete: false },
            { id: "c3", text: "Test across primary browsers", isComplete: false },
        ],
    },
    {
        id: "task-102",
        title: "Review Q4 budget proposal",
        description: "Final review of the budget allocation for the fourth quarter, focusing on marketing and R&D spend.",
        priority: "Urgent",
        owner: { id: "user-1", name: "Alex Johnson", avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/28/1cbdefcb-41f5-409b-9778-8da6f9a8024d.png" },
        statusId: "col-1",
        checklistsCompleted: 0,
        checklistsTotal: 0,
        createdAt: "2025-11-25",
        dueDate: "2025-11-29",
        checklists: [],
    },
    {
        id: "task-201",
        title: "Set up CI/CD pipeline",
        description: "Configure GitHub Actions or equivalent tool for automatic deployment upon merging to the main branch.",
        priority: "High",
        owner: { id: "user-3", name: "Thomas Lee", avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/28/7b8737fa-a3c9-44df-8c26-aa1cc22d4a83.png" },
        statusId: "col-2",
        checklistsCompleted: 2,
        checklistsTotal: 2,
        createdAt: "2025-11-18",
        dueDate: "2025-12-01",
        checklists: [
            { id: "c4", text: "Select CI platform", isComplete: true },
            { id: "c5", text: "Write initial script", isComplete: true },
        ],
    },
    {
        id: "task-301",
        title: "Update documentation portal",
        description: "Migrate old documentation articles to the new platform format and fix broken links.",
        priority: "Medium",
        owner: { id: "user-2", name: "Maria Sanchez", avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/28/74fa60a3-ca77-449e-bdb5-91c856304158.png" },
        statusId: "col-3",
        checklistsCompleted: 4,
        checklistsTotal: 4,
        createdAt: "2025-11-10",
        dueDate: "2025-11-25",
        checklists: [
            { id: "c6", text: "Audit existing docs", isComplete: true },
            { id: "c7", text: "Draft migration plan", isComplete: true },
            { id: "c8", text: "Execute migration script", isComplete: true },
            { id: "c9", text: "Post-migration review", isComplete: true },
        ],
    },
];

const mockBoardData: KanbanBoardModel = {
    id: "board-1",
    name: "Q4 Marketing Project",
    columns: [
        {
            id: "col-1",
            name: "To Do",
            tasks: mockTasks.filter(t => t.statusId === "col-1").map(({ checklists, description, createdAt, dueDate, ...rest }) => ({ ...rest })),
        },
        {
            id: "col-2",
            name: "In Progress",
            tasks: mockTasks.filter(t => t.statusId === "col-2").map(({ checklists, description, createdAt, dueDate, ...rest }) => ({ ...rest })),
        },
        {
            id: "col-3",
            name: "Done",
            tasks: mockTasks.filter(t => t.statusId === "col-3").map(({ checklists, description, createdAt, dueDate, ...rest }) => ({ ...rest })),
        },
    ],
};

export function getKanbanBoardData(boardId: string): KanbanBoardModel {
    // In a real app, this would fetch data based on boardId
    return mockBoardData;
}

export function getTaskDetail(taskId: string): TaskDetailModel | undefined {
    return mockTasks.find(task => task.id === taskId);
}

