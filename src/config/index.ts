const PATHS = {
  baseUrl: "http://localhost:3000/api/v1/",
  TOKEN_URL: "/token/",
  REFRESH_TOKEN_URL: "/token/refresh/",
  LOGIN_REDIRECT: "/dashboard",
};

const config = {
  ...PATHS,
  UPGRADE_ALERT_TIME: 10 * 1000, // 10 seconds
  JWT_KEY_NAME: "token",
  JWT_DEFAULT_VALUE: {
    access: "",
    refresh: "",
  },
  zoomLevel: 6,
};

export default config;
