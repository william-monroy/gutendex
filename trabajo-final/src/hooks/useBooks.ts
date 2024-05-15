import api from "@/utils/Network";
import { useQuery } from "@tanstack/react-query";

function useBooks(
  page: number = 1,
  search?: string,
  languages?: string,
  topic?: string
) {
  const parametros: Record<string, string> = {};
  if (search) parametros["search"] = search;
  if (languages) parametros["languages"] = languages;
  if (topic) parametros["topic"] = topic;

  return useQuery({
    queryKey: [
      `booksData`,
      {
        page,
        search,
        languages,
        topic,
      },
    ],
    queryFn: () =>
      api
        .get("", {
          params: parametros,
        })
        .then((response) => response.data),
  });
}

export default useBooks;
