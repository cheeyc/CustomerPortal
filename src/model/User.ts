export interface User {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: UserProfile[];
    support: Support;
}

export interface UserProfile {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface Support {
    url: string;
    text: string;
}
