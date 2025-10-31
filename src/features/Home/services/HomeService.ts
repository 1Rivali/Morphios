import { get } from "@/lib/apiClient";
import { HomeResponse } from "../types/Home";

export const getHomeData = async (): Promise<HomeResponse> => {
  const response = await get<HomeResponse>("/homes");
  return response.data;
};
