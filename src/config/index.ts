const PATHS = {
  baseUrl: " http://127.0.0.1:8000/api/v1",
  // baseUrl: "https://n9dmqh9j-3000.euw.devtunnels.ms/api",
  // baseUrl: "https://n9dmqh9j-3000.euw.devtunnels.ms/api",
  TOKEN_URL: "/token/",
  EVENTS_URL: "/events",
  REGISTER_FOR_EVENT_URL: "/events/${eventId}/register",
  ALL_NEWS_URL: "/news",
  ALL_NEWS_WITH_QUERY_URL: "/news/search",
  SINGLE_NEWS_URL: "/news/${newsId}",
  TOURISMS_URL: "/tourisms",
  SERVICES_URL: "/services",
  SERVICES_FEEDBACKS_URL: "services/${serviceId}/feedback",
  SERVICES_FEEDBACK_URL: "services/${serviceId}/feedback/${feedbackId}",
  BUSINESS_URL: "/businesses",
  MAP_URL: "/map",
  REFRESH_TOKEN_URL: "/token/refresh/",
  LOGIN_REDIRECT: "/dashboard",
  LOGIN_URL: "/auth/token",
  USERS_URL: "/auth/users",
  USER_URL: "/auth/users/${userId}",
  DASHBOARD_URL: "/user/dashboard",
};

const config = {
  ...PATHS,
  UPGRADE_ALERT_TIME: 10 * 1000, // 10 seconds
  JWT_KEY_NAME: "token",
  JWT_DEFAULT_VALUE: {
    access: "",
    refresh: "",
  },
  zoomLevel: 8,
};

export default config;
