export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type UserEntityType = {
  id: 1;
  last_login: string;
  is_superuser: boolean;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  groups: (string | number)[];
  user_permissions: (string | number)[];
};

export type NewsEntityType = {
  title: string; // Title of the article
  content: string; // Content of the article
  category?: string; // Category of the article, optional
  publish_date: string; // Publish date (ISO 8601 format)
  created_at: string; // Created timestamp (ISO 8601 format)
  updated_at: string; // Updated timestamp (ISO 8601 format)
};

export type EventEntityType = {
  title: string; // Title of the event
  description: string; // Description of the event
  date: string; // Date and time of the event (ISO 8601 format)
  location: string; // Location of the event
  category?: string; // Category of the event, optional
  created_at: string; // Created timestamp (ISO 8601 format)
  updated_at: string; // Updated timestamp (ISO 8601 format)
};

export type TourismEntityType = {
  id: number;
  name: string;
  description: string;
  location: string;
  category: string;
  latitude: number;
  longitude: number;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
};

export type ServicesEntityType = {
  id: number;
  name: string;
  description: string;
  contact: string;
  hours: string;
  latitude: number;
  longitude: number;
  category: string;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
};

type BusinessReview = {
  rating: number;
};

export type BusinessEntityType = {
  id: number;
  name: string;
  description: string;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
  category: string;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  BusinessReviews: BusinessReview[];
};

type Attraction = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  category: string;
};

type Business = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  category: string;
};

type Service = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  category: string;
};

export type MapDirectionEntityType = {
  attractions: Attraction[];
  businesses: Business[];
  services: Service[];
};

type User = {
  id: number;
  email: string;
  password: string; // Consider hashing this for security
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
};

export type FeedbackEntityType = {
  id: number;
  comment: string;
  rating: number;
  status: string;
  UserId: number;
  ServiceId: number;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  User: User; // Nested User object
};

export type CreateFeedbackInput = {
  comment: string;
  rating: number;
};
