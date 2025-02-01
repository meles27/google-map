import { Dialog, DialogBody, Input, Spinner } from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import { useListNewsQuery } from "../../services/newsApi";
import { NewsEntityType } from "../../types/entity_types";
import SpinnerPage from "../SpinnerPage";

const NewsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useState<{ q: string }>({
    q: "",
  });
  const newsRef = useRef<NewsEntityType | null>(null);

  const [newsDetail, setNewsDetail] = useState(false);
  const newsResponse = useListNewsQuery(searchParams);

  useEffect(() => {
    console.log(setSearchParams);
  }, []);

  return (
    <div className="w-full h-full max-w-[960px] mx-auto  p-md">
      {newsResponse.isLoading ? (
        <SpinnerPage />
      ) : newsResponse.isError ? (
        <div>error</div>
      ) : (
        <section className="flex-col h-full">
          <div className="flex items-center justify-end">
            <div className="max-w-lg pt-md">
              <Input
                label="search"
                placeholder="Search"
                crossOrigin={""}
                onChange={(e) => setSearchParams({ q: e.target.value })}
              />
            </div>
          </div>
          <div className="relative self-start grid grid-cols-2 gap-sm">
            {!newsResponse.isLoading && newsResponse.isFetching && (
              <div className="flex items-center justify-between gap-sm bg-secondary p-sm rounded-full shadow-xl absolute z-10 top-[20rem] left-1/2 -translate-x-1/2 text-2xl text-primary">
                Loading ........ <Spinner />
              </div>
            )}
            {newsResponse.data?.map((news, index) => {
              return (
                <div
                  className="relative flex flex-col my-6 bg-white shadow-sm border border-neutral-200 rounded-lg w-96 hover:cursor-pointer"
                  onClick={() => {
                    newsRef.current = news;
                    setNewsDetail(true);
                  }}
                >
                  <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    {/* <img
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                      alt="card-image"
                    /> */}
                    <img
                      src={`/services/image- (${index + 1}).jpg`}
                      alt="card-image"
                      className="block w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h6 className="mb-2 text-neutral-800 text-xl font-semibold">
                      {news.title}
                    </h6>
                    <p className="text-neutral-600 leading-normal font-light">
                      {news.content}
                    </p>
                  </div>
                  <div className="px-4 pb-4 pt-0 mt-2">
                    <button
                      className="rounded-md bg-neutral-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-neutral-700 focus:shadow-none active:bg-neutral-700 hover:bg-neutral-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <Dialog
            size="sm"
            open={newsDetail}
            handler={() => setNewsDetail(false)}
            className="h-screen overflow-auto"
          >
            <DialogBody>
              <div className="relative flex flex-col my-6 bg-white shadow-sm border border-neutral-200 rounded-lg w-96 hover:cursor-pointer">
                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                  <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                  />
                </div>
                <div className="p-4">
                  <h6 className="mb-2 text-neutral-800 text-xl font-semibold">
                    {newsRef.current?.title}
                  </h6>
                  <p className="text-neutral-600 leading-normal font-light">
                    {newsRef.current?.content}
                  </p>
                </div>
                <div className="px-4 pb-4 pt-0 mt-2">
                  <button
                    className="rounded-md bg-neutral-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-neutral-700 focus:shadow-none active:bg-neutral-700 hover:bg-neutral-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </DialogBody>
          </Dialog>
        </section>
      )}
    </div>
  );
};

export default NewsPage;
