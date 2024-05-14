import api from "@/utils/Network";
import { useQuery } from "@tanstack/react-query";

function useBooks(page: number = 1) {
  return useQuery({
    queryKey: [`booksData`, page],
    queryFn: () =>
      api.get("", { params: { page: page } }).then((response) => response.data),
  });
}

export default useBooks;
