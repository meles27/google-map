import React from "react";
import withAnimation from "../../components/route-animation/withAnimation";

const DashboardHomePage: React.FC = withAnimation(() => {
  return (
    <div className="w-full min-h-full overflow-auto ">
      <section className="flex items-center justify-center gap-md bg-gray-100 pt-2xl">
        <div className="flex w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-gray-700 to-gray-400 text-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm font-light capitalize">Services</p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  14,000
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            {/* <div className="p-4">
              <p className="font-light">
                <span className="text-sm font-bold text-green-600">+22% </span>
                vs last month
              </p>
            </div> */}
          </div>
        </div>
        <div className="flex w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm font-light capitalize">Users</p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  2,300
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            {/* <div className="p-4">
              <p className="font-light">
                <span className="text-sm font-bold text-green-600">+3% </span>vs
                last month
              </p>
            </div> */}
          </div>
        </div>
        <div className="flex w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-emerald-700 to-emerald-500 text-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm font-light capitalize">Events</p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  5,360
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            {/* <div className="p-4">
              <p className="font-light">
                <span className="text-sm font-bold text-red-600">-3% </span>vs
                last month
              </p>
            </div> */}
          </div>
        </div>
      </section>
      {/* section2  */}
      <section className="grid grid-cols-1 gap-5 bg-gray-100 p-2 sm:grid-cols-2 sm:p-10 lg:grid-cols-3">
        <div className="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p className="text-lg font-medium">Insights</p>
          <div className="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">Your views are up 400% since last month</p>
          </div>
          <div className="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">Your blog got featured on awwwards.com</p>
          </div>
          <div className="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam deserunt cupiditate ipsa.
            </p>
          </div>
          <div className="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p className="text-lg font-medium">Activity</p>
          <div className="flex items-center py-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
              alt="Simon Lewis"
            />
            <p className="ml-4 w-56">
              <strong className="block font-medium">Albert Mcalister</strong>
              <span className="text-xs text-gray-400">
                Commented on
                <a className="truncate font-medium text-indigo-600" href="#">
                  An Evening in the Woods
                </a>
              </span>
            </p>
          </div>
          <div className="flex items-center py-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="/images/fR71TFZIDTv2jhvKsOMhC.png"
            />
            <p className="ml-4 w-56">
              <strong className="block font-medium">Samantha Ribbon</strong>
              <span className="text-xs text-gray-400">
                Commented on
                <a className="truncate font-medium text-indigo-600" href="#">
                  An Evening in the Woods
                </a>
              </span>
            </p>
          </div>
          <div className="flex items-center py-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="/images/R-Wx_NHvZBci3KLrgXhp1.png"
            />
            <p className="ml-4 w-56">
              <strong className="block font-medium">Dr. Kayla</strong>
              <span className="text-xs text-gray-400">
                Commented on
                <a className="truncate font-medium text-indigo-600" href="#">
                  An Evening in the Woods
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p className="text-lg font-medium">Traffic Sources</p>
          <div className="mt-4">
            <p className="float-left mb-2">Direct</p>
            <span className="float-right mb-2">20,00</span>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div className="h-full w-10/12 overflow-hidden rounded-full bg-indigo-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="float-left mb-2">Referral</p>
            <span className="float-right mb-2">2,000</span>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div className="h-full w-4/12 overflow-hidden rounded-full bg-indigo-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="float-left mb-2">Google</p>
            <span className="float-right mb-2">1,500</span>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div className="h-full w-3/12 overflow-hidden rounded-full bg-indigo-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="float-left mb-2">Facebook</p>
            <span className="float-right mb-2">260</span>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div className="h-full w-1/12 overflow-hidden rounded-full bg-indigo-600" />
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
});

export default DashboardHomePage;
