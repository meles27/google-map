import { InvalidTokenError, jwtDecode, JwtPayload } from "jwt-decode";

export function isTokenExpired<T extends JwtPayload>(
  token: string | null
): boolean {
  if (!token) return true; // If no token, consider it expired
  try {
    const decoded = jwtDecode<T>(token);
    const currentTime = Date.now() / 1000; // Current time in seconds
    return (decoded.exp || currentTime) < currentTime; // Check if the token is expired
  } catch (error: InvalidTokenError | Error | unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("[error] " + (error as InvalidTokenError).message);
    }
    return true;
  }
}

export const isAuthenticated: (token: string) => boolean = (token: string) => {
  return isTokenExpired(token) ? false : true;
};

export const getTokenTimeLeft = <T extends JwtPayload>(token: string) => {
  if (!token) return 0; // If no token, consider it expired
  try {
    const decoded = jwtDecode<T>(token);
    const currentTime = Date.now() / 1000; // Current time in seconds
    return (decoded.exp || currentTime) - currentTime; // Check if the token is expired
  } catch (error: InvalidTokenError | Error | unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("[error] " + (error as InvalidTokenError).message);
    }
    return 0;
  }
};
