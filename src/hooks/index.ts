import { useLocalStorage } from "usehooks-ts";
import config from "../config";
import { JwtTokenIface } from "../types/types";
import { useEffect, useRef } from "react";
import { useRefreshTokenMutation } from "../services/authApi";
import { AxiosError } from "axios";
import { getTokenTimeLeft, isTokenExpired } from "../utils/auth";

export function useJwtTokenExpiration() {
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const [refresh, refreshResponse] = useRefreshTokenMutation();
  // get the token from localStorage
  const [token, setToken, removeToken] = useLocalStorage<
    Required<JwtTokenIface>
  >(config.JWT_KEY_NAME, config.JWT_DEFAULT_VALUE);
  // on mounting stage (hook)
  useEffect(() => {
    const isExpired = isTokenExpired(token.refresh);
    if (isExpired) {
      return;
    }
    refresh({ refresh: token.refresh });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (refreshResponse.isSuccess) {
      setToken(refreshResponse.data);
      const accessLifeTime = getTokenTimeLeft(refreshResponse.data.access);
      if (accessLifeTime > 10) {
        // 10 seconds
        console.log("the current lifetime is in seconds", accessLifeTime / 60);
        interval.current = setInterval(() => {
          console.log("refreshing token");
          refresh({ refresh: refreshResponse.data.refresh });
        }, accessLifeTime * 1000 - 10);
      }
    } else if (refreshResponse.isError) {
      const error = refreshResponse.error as AxiosError;
      if (error?.status == 401) {
        removeToken();
      } else {
        console.log("something went wrong");
      }
    }
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshResponse.isSuccess, refreshResponse.isError]);

  return { refresh, refreshResponse };
}
