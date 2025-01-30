export type NewsEntityType = {
  id: number;
  title: string;
  content: string;
  category: string;
  publishDate: string; // ISO 8601 date string
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
};

export type EventEntityType = {
  id: number;
  title: string;
  description: string;
  date: string; // ISO 8601 date string
  location: string;
  category: string;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
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
