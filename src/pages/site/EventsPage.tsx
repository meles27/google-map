import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useListEventsQuery } from "../../services/eventApi";
import SpinnerPage from "../SpinnerPage";

const EventsPage: React.FC = () => {
  const eventsResponse = useListEventsQuery();
  const navigate = useNavigate();

  return (
    <div className="flex w-full h-full max-w-[960px] mx-auto">
      {eventsResponse.isLoading ? (
        <SpinnerPage />
      ) : eventsResponse.isError ? (
        <div>error</div>
      ) : (
        <div className="container w-full px-4 py-8">
          <div className="relative wrap overflow-hidden">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2" />
            {eventsResponse.data?.results.map((event, index) =>
              index % 2 == 0 ? (
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12" />
                  <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      {index + 1}
                    </h1>
                  </div>
                  <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-gray-800 text-xl">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 leading-tight">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between p-sm">
                      <p className="leading-tight py-md text-primary">
                        {event.date?.slice(0, 10)}
                      </p>
                      <Button
                        className="bg-primary"
                        size="sm"
                        onClick={() => navigate("/dashboard")}
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12" />
                  <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      {index + 1}
                    </h1>
                  </div>
                  <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-gray-800 text-xl">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 leading-tight">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between p-sm">
                      <p className="leading-tight py-md text-primary">
                        {event.date?.slice(0, 10)}
                      </p>
                      <Button
                        className="bg-primary"
                        size="sm"
                        onClick={() => navigate("/dashboard")}
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
