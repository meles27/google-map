import { Spinner } from "@material-tailwind/react";
import React from "react";
import { useListDashboardQuery } from "../../services/dashboardApi";
import EventsCard from "./EventsCard";
import NewsListComp from "./NewsListComp";
import RegisterdEvents from "./RegisterdEvents";

const DashboardHomePage: React.FC = () => {
  const dashboardResponse = useListDashboardQuery();

  if (dashboardResponse.isLoading) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (dashboardResponse.isError) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        error
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-start gap-md w-full h-full border-2 px-md pb-3xl">
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3">
        <div className="flex items-center bg-white border rounded-xl overflow-hidden shadow-xl shadow-neutral-200">
          <div className="p-4 bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total News</h3>
            <p className="text-3xl">{dashboardResponse.data?.news.length}</p>
          </div>
        </div>
        <div className="flex items-center bg-white border rounded-xl overflow-hidden shadow-xl shadow-neutral-200">
          <div className="p-4 bg-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Events</h3>
            <p className="text-3xl">
              {dashboardResponse.data?.upcomingEvents.length}
            </p>{" "}
          </div>
        </div>
        <div className="flex items-center bg-white border rounded-xl overflow-hidden shadow-xl shadow-neutral-200">
          <div className="p-4 bg-indigo-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Registerd Events</h3>
            <p className="text-3xl">
              {dashboardResponse.data?.upcomingEvents.length}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-md">
        <EventsCard event={dashboardResponse.data?.upcomingEvents || []} />
        <NewsListComp newsArticle={dashboardResponse.data?.news || []} />
      </div>
      <div className="flex">
        <RegisterdEvents
          registed={dashboardResponse.data?.registeredEvents || []}
        />
      </div>
    </div>
  );
};

export default DashboardHomePage;
