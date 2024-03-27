import { IUser } from '~/types/models/user';
import { defineStore } from "pinia";
import { getUserApi } from "~/api/user";

export interface IUserStore {
    users: IUser[],
    detail: null | IUser,
    shop: string | null
}

export const useUser = defineStore('user', {
    state: (): IUserStore => ({
        users: [],
        detail: null,
        shop: null
    }),
    actions: {
        async getUser(userId: string) {            
            const res = await getUserApi(this.shop as string, userId);
            this.detail = res;
        }
    }
})