import { JwtPayload } from "jwt-decode";

export interface JwtTokenIface {
  access?: string;
  refresh?: string;
}

export type LoginType = {
  email?: string;
  password?: string;
};

export interface JwtPayloadIface extends JwtPayload {
  first_name?: string;
  last_name?: string;
  username?: string;
  user_id?: string;
  role?: string;
}
