import { ApiResponse } from "@/lib/apiClient";

export interface HomeData {
  id?: number;
  whatsapp_link: string;
  x_link: string;
  youtube_link: string;
  instagram_link: string;
  phone_number: string;
  email: string;
  location: string;
}

export type HomeResponse = ApiResponse<HomeData>;
