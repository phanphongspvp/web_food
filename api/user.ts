import type { IUser } from "~/types/models/user";
import { API_METHOD, USER_DETAIL_API_NAME } from "~/utils/apiClient";

export const getUserApi = async (
  shop: string,
  userId: string
): Promise<IUser> => {
  const { data } = await useApiAxios({
    url: USER_DETAIL_API_NAME.USER_LIST(shop, userId),
    method: API_METHOD.GET,
    isServer: true,
  });

  return data;
};
