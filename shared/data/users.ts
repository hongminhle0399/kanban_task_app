

export interface UserListItemModel {
    id: string;
    name: string;
    avatarUrl: string;
}

export interface UserDetailModel extends UserListItemModel {
    email: string;
    role: string;
    lastLogin: string;
    notificationPreferences: {
        email: boolean;
        inApp: boolean;
    };
}

const mockUsers: UserDetailModel[] = [
    {
        id: "user-1",
        name: "Alex Johnson",
        email: "alex.j@example.com",
        role: "Project Lead",
        avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/28/dee7d4df-37ad-435d-9226-7229fd174ce4.png",
        lastLogin: "2025-11-28T09:30:00Z",
        notificationPreferences: { email: true, inApp: true },
    },
    {
        id: "user-2",
        name: "Maria Sanchez",
        email: "maria.s@example.com",
        role: "UX Designer",
        avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/28/92b31637-a887-405e-a6b3-cddf5c7f0e1a.png",
        lastLogin: "2025-11-28T08:00:00Z",
        notificationPreferences: { email: true, inApp: false },
    },
    {
        id: "user-3",
        name: "Thomas Lee",
        email: "thomas.l@example.com",
        role: "Software Engineer",
        avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/28/2abf58a8-91c6-4f24-a66c-07888c275970.png",
        lastLogin: "2025-11-27T14:45:00Z",
        notificationPreferences: { email: false, inApp: true },
    },
];

export function getUserListItems(): UserListItemModel[] {
    return mockUsers.map(user => ({
        id: user.id,
        name: user.name,
        avatarUrl: user.avatarUrl,
    }));
}

export function getUserDetail(userId: string): UserDetailModel | undefined {
    return mockUsers.find(user => user.id === userId);
}

export const CURRENT_USER_ID = "user-1";

