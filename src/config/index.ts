const PATHS = {
  baseUrl: "https://n9dmqh9j-3000.euw.devtunnels.ms/api",
  TOKEN_URL: "/token/",
  EVENTS_URL: "/events",
  REGISTER_FOR_EVENT_URL: "/events/${eventId}/register",
  ALL_NEWS_URL: "/news",
  ALL_NEWS_WITH_QUERY_URL: "/news/search",
  SINGLE_NEWS_URL: "/news/${newsId}",
  TOURISMS_URL: "/tourism",
  SERVICES_URL: "/services",
  SERVICES_FEEDBACKS_URL: "services/${serviceId}/feedback",
  SERVICES_FEEDBACK_URL: "services/${serviceId}/feedback/${feedbackId}",
  BUSINESS_URL: "/businesses",
  MAP_URL: "/map",
  REFRESH_TOKEN_URL: "/token/refresh/",
  LOGIN_REDIRECT: "/dashboard",
  LOGIN_URL: "/auth/login",
};

const config = {
  ...PATHS,
  UPGRADE_ALERT_TIME: 10 * 1000, // 10 seconds
  JWT_KEY_NAME: "token",
  JWT_DEFAULT_VALUE: "",
  zoomLevel: 8,
};

export default config;
