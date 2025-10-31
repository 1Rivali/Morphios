import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { ApiResponse, post } from "../apiClient";

interface PageViewRequest {
  path: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  referer: string | null;
}

const addPageView = async (
  data: PageViewRequest
): Promise<ApiResponse<any>> => {
  const response = await post<any, PageViewRequest>("/page-views", data);
  return response.data;
};

export default function usePageViewTracker() {
  const location = useLocation();

  const mutation = useMutation({
    mutationFn: addPageView,
    retry: false,
  });

  useEffect(() => {
    const referer = document.referrer || null;
    const method = "GET"; // browser navigation = GET
    const path = location.pathname;

    if (path) {
      mutation.mutate({ path, method, referer });
    }
  }, [location.pathname]);
}
