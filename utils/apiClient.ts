export namespace API_METHOD {
    export const GET = "get"
    export const POST = "post"
    export const PUT = "put"
    export const PATCH = "patch"
    export const DELETE = "delete"
}

export namespace USER_DETAIL_API_NAME {
    export const USER_LIST = (shop: string, userId: string) => `/clients/${shop}/admin/users/${userId}`;
}