import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function useQueryParam() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export { useQueryParam };
