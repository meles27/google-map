interface NewsArticle {
  id: number;
  title: string;
  content: string;
  category: string;
  publishDate: string; // ISO 8601 format
  createdAt: string; // ISO 8601 format
  updatedAt: string; // ISO 8601 format
}

interface UpcomingEvent {
  id: number;
  title: string;
  description: string;
  date: string; // ISO 8601 format
  location: string;
  category: string;
  createdAt: string; // ISO 8601 format
  updatedAt: string; // ISO 8601 format
}

interface EventRegistration {
  UserId: number;
  EventId: number;
  createdAt: string; // ISO 8601 format
  updatedAt: string; // ISO 8601 format
}

interface RegisteredEvent {
  id: number;
  title: string;
  description: string;
  date: string; // ISO 8601 format
  location: string;
  category: string;
  createdAt: string; // ISO 8601 format
  updatedAt: string; // ISO 8601 format
  EventRegistration: EventRegistration;
}

export interface DashboardDataStructure {
  news: NewsArticle[];
  upcomingEvents: UpcomingEvent[];
  registeredEvents: RegisteredEvent[];
}
