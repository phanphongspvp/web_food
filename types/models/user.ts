export interface IRole {
    id: string,
    title: string,
    description: string,
    created_at: string,
    updated_at: string
}

export interface IUser {
    id: string,
    name: string,
    username: string,
    role: IRole | null,
    status?: string,
    created_at: string,
    updated_at: string
}

export interface ITokenVerify {
    token: string
}