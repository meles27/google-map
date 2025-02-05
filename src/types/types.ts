import { JwtPayload } from "jwt-decode";

export type GeneralErrorType = Record<
  string,
  number | string | object | Record<string, number | string | object>
>;
export interface JwtTokenIface {
  access?: string;
  refresh?: string;
}

export type LoginType = {
  username?: string;
  password?: string;
};

export interface JwtPayloadIface extends JwtPayload {
  first_name?: string;
  last_name?: string;
  username?: string;
  user_id?: string;
  role?: string;
}
