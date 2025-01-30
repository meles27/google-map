import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React from "react";
import withAnimation from "../../components/route-animation/withAnimation";
import { Link } from "react-router-dom";

const HomePage: React.FC = withAnimation(() => {
  /**
   * Checks if the token has expired and logs the user out if it has.
   */
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg-white text-black text-[15px] pt-md">
      <div className="px-4 sm:px-10">
        {/* hero section */}
        <section className="min-h-[500px]">
          <div className="grid md:grid-cols-2 justify-center items-center gap-10">
            <div className="max-md:order-1 space-y-sm">
              <p className="mt-4 mb-2 font-semibold text-blue-600">
              </p>
              <h1 className="md:text-5xl text-4xl font-bold md:!leading-[55px]">
                Welcome to Mekelle City Information Center
              </h1>
              <h2 className="text-lg font-bold">
                Discover, Explore, and Connect with Mekelle!
              </h2>
              <p className=" text-base leading-relaxed">
                Embark on a gastronomic journey with our curated dishes,
                delivered promptly to your doorstep. Elevate your dining
                experience today. Delve into the details and let us enhance
                every aspect of your dining adventure.
              </p>
              <div className="bg-white mt-10 flex px-1 py-1.5 rounded-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] overflow-hidden">
                <input
                  type="email"
                  placeholder="Search Something..."
                  className="w-full outline-none bg-white pl-4"
                />
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-full px-5 py-2.5"
                >
                  Search
                </button>
              </div>
              <div className="flex items-center mt-10">
                <input
                  id="checkbox3"
                  type="checkbox"
                  className="hidden peer"
                  defaultChecked
                />
                <label
                  htmlFor="checkbox3"
                  className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded-full overflow-hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full fill-white"
                    viewBox="0 0 520 520"
                  >
                    <path
                      d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                      data-name="7-Check"
                      data-original="#000000"
                    />
                  </svg>
                </label>
                <p className="text-base ml-3">No credit card required!</p>
              </div>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                <img
                  src="https://readymadeui.com/google-logo.svg"
                  className="w-28 mx-auto"
                  alt="google-logo"
                />
                <img
                  src="https://readymadeui.com/facebook-logo.svg"
                  className="w-28 mx-auto"
                  alt="facebook-logo"
                />
                <img
                  src="https://readymadeui.com/linkedin-logo.svg"
                  className="w-28 mx-auto"
                  alt="linkedin-logo"
                />
                <img
                  src="https://readymadeui.com/pinterest-logo.svg"
                  className="w-28 mx-auto"
                  alt="pinterest-logo"
                />
              </div>
            </div>
            <div className="max-md:mt-12 h-full">
              <img
                src="https://readymadeui.com/team-image.webp"
                alt="banner img"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        <div className="max-w-[1024px] m-auto">
          <section className="mt-28 bg-gray-50 px-4 sm:px-10 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="md:text-center max-w-2xl mx-auto">
                <h2 className="md:text-4xl text-3xl font-bold mb-6">
                  Discover Mekelle: Your Ultimate Guide to the City
                </h2>
                <p>
                  Explore the vibrant city of Mekelle with our comprehensive
                  information center. From the latest news and exciting events
                  to local businesses and tourist attractions, we provide
                  everything you need to experience Mekelle like a local.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-14">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 fill-blue-600 mb-4 inline-block"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                      data-original="#000000"
                    />
                    <path
                      d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                      data-original="#000000"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Latest News</h3>
                  <p>Stay informed about the happenings in Mekelle.</p>
                  <Link
                    to=""
                    className="text-blue-600 font-semibold inline-block mt-2 hover:underline"
                  >
                    Learn more
                  </Link>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 fill-blue-600 mb-4 inline-block"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000" />
                      </clipPath>
                    </defs>
                    <g
                      fill="none"
                      className="stroke-blue-600"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth={40}
                      clipPath="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                        data-original="#000000"
                      />
                      <path
                        d="M178 271.894 233.894 216 334 316.105"
                        data-original="#000000"
                      />
                    </g>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">
                    Events Calendar
                  </h3>
                  <p>Discover exciting events and cultural celebrations.</p>
                  <Link
                    to=""
                    className="text-blue-600 font-semibold inline-block mt-2 hover:underline"
                  >
                    Learn more
                  </Link>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 fill-blue-600 mb-4 inline-block"
                    viewBox="0 0 512.001 512.001"
                  >
                    <path
                      d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                      data-original="#000000"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">
                    Business Directory
                  </h3>
                  <p>Find local shops, services, and dining options.</p>
                  <Link
                    to=""
                    className="text-blue-600 font-semibold inline-block mt-2 hover:underline"
                  >
                    Learn more
                  </Link>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 fill-blue-600 mb-4 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <g fillRule="evenodd" clipRule="evenodd">
                      <path
                        d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z"
                        data-original="#000000"
                      />
                      <path
                        d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z"
                        data-original="#000000"
                      />
                      <path
                        d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z"
                        data-original="#000000"
                      />
                    </g>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Tourism Guide</h3>
                  <p>Explore must-visit sites and hidden gems.</p>
                  <Link
                    to=""
                    className="text-blue-600 font-semibold inline-block mt-2 hover:underline"
                  >
                    Learn more
                  </Link>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 fill-blue-600 mb-4 inline-block"
                    viewBox="0 0 504.69 504.69"
                  >
                    <path
                      d="M252.343 262.673c-49.32 0-89.447-40.127-89.447-89.447s40.127-89.447 89.447-89.447 89.447 40.127 89.447 89.447-40.121 89.447-89.447 89.447zm0-158.235c-37.926 0-68.787 30.861-68.787 68.787s30.861 68.787 68.787 68.787 68.787-30.861 68.787-68.787-30.855-68.787-68.787-68.787z"
                      data-original="#000000"
                    />
                    <path
                      d="M391.787 405.309c-5.645 0-10.253-4.54-10.325-10.201-.883-70.306-58.819-127.503-129.15-127.503-49.264 0-93.543 27.405-115.561 71.52-8.724 17.473-13.269 36.31-13.517 55.988-.072 5.702-4.757 10.273-10.459 10.201s-10.273-4.757-10.201-10.459c.289-22.814 5.568-44.667 15.691-64.955 25.541-51.164 76.907-82.95 134.047-82.95 81.581 0 148.788 66.349 149.81 147.905.072 5.702-4.494 10.392-10.201 10.459-.046-.005-.087-.005-.134-.005z"
                      data-original="#000000"
                    />
                    <path
                      d="M252.343 463.751c-116.569 0-211.408-94.834-211.408-211.408 0-116.569 94.839-211.408 211.408-211.408 116.574 0 211.408 94.839 211.408 211.408 0 116.574-94.834 211.408-211.408 211.408zm0-402.156c-105.18 0-190.748 85.568-190.748 190.748s85.568 190.748 190.748 190.748 190.748-85.568 190.748-190.748S357.523 61.595 252.343 61.595zM71.827 90.07 14.356 32.599c-4.034-4.034-4.034-10.573 0-14.607 4.029-4.034 10.573-4.034 14.607 0l57.466 57.471c4.034 4.034 3.951 10.49 0 14.607-3.792 3.951-11.039 3.698-14.602 0z"
                      data-original="#000000"
                    />
                    <path
                      d="M14.717 92.254a10.332 10.332 0 0 1-10.299-9.653L.023 15.751a10.317 10.317 0 0 1 2.929-7.908 10.2 10.2 0 0 1 7.851-3.089L77.56 7.796c5.697.258 10.108 5.093 9.85 10.79s-5.041 10.154-10.79 9.85l-55.224-2.521 3.641 55.327c.377 5.692-3.936 10.614-9.628 10.986a7.745 7.745 0 0 1-.692.026zm403.541-2.184c-4.256-3.796-4.034-10.573 0-14.607l58.116-58.116c4.034-4.034 10.573-4.034 14.607 0s4.034 10.573 0 14.607L432.864 90.07c-4.085 3.951-9.338 4.7-14.606 0z"
                      data-original="#000000"
                    />
                    <path
                      d="M489.974 92.254a9.85 9.85 0 0 1-.687-.021c-5.697-.372-10.01-5.294-9.633-10.986l3.641-55.327-55.224 2.515c-5.511.238-10.526-4.147-10.79-9.85-.258-5.702 4.153-10.531 9.85-10.79l66.757-3.042c2.934-.134 5.79.992 7.851 3.089s3.12 4.974 2.929 7.908l-4.401 66.85c-.361 5.465-4.896 9.654-10.293 9.654zM11.711 489.339c-3.791-4.266-4.034-10.573 0-14.607l60.115-60.11c4.029-4.034 10.578-4.034 14.607 0 4.034 4.034 4.034 10.573 0 14.607l-60.115 60.11c-3.827 3.884-11.156 3.884-14.607 0z"
                      data-original="#000000"
                    />
                    <path
                      d="M10.327 499.947a10.33 10.33 0 0 1-7.376-3.104 10.312 10.312 0 0 1-2.929-7.902l4.401-66.85c.372-5.697 5.191-10.036 10.986-9.633 5.692.377 10.005 5.294 9.628 10.986l-3.641 55.332 55.224-2.515c5.645-.191 10.531 4.153 10.79 9.85.258 5.697-4.153 10.526-9.85 10.79l-66.763 3.037c-.155.004-.31.009-.47.009zm465.639-13.01-57.708-57.708c-4.034-4.034-4.034-10.573 0-14.607s10.573-4.034 14.607 0l57.708 57.708c4.034 4.034 3.962 10.5 0 14.607-3.817 3.951-10.062 3.951-14.607 0z"
                      data-original="#000000"
                    />
                    <path
                      d="M494.359 499.947c-.155 0-.315-.005-.47-.01l-66.757-3.042c-5.702-.263-10.108-5.088-9.85-10.79.263-5.702 5.113-9.984 10.79-9.85l55.219 2.515-3.641-55.332c-.372-5.692 3.941-10.609 9.633-10.986 5.625-.398 10.609 3.946 10.986 9.633l4.401 66.85a10.33 10.33 0 0 1-2.929 7.902 10.323 10.323 0 0 1-7.382 3.11z"
                      data-original="#000000"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">
                    Interactive Map
                  </h3>
                  <p>
                    Navigate the city with our user-friendly map, featuring key
                    locations and points of interest.
                  </p>
                  <Link
                    to=""
                    className="text-blue-600 font-semibold inline-block mt-2 hover:underline"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-28">
            <div className="md:text-center max-w-2xl mx-auto">
              <h2 className="md:text-4xl text-3xl font-bold mb-6">
                Explore Our Unique Offerings
              </h2>
              <p>
                Discover all that Mekelle has to offer through our diverse range
                of services and attractions
              </p>
            </div>
            <div className="mt-14">
              <div className="grid md:grid-cols-2 items-center gap-16">
                <div>
                  <img
                    src="https://readymadeui.com/image-1.webp"
                    className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
                  />
                </div>
                <div className="max-w-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    Business Directory
                  </h3>
                  <p>
                    Explore our comprehensive directory of local businesses.
                    From shops and restaurants to services and professionals,
                    support the local economy while discovering unique
                    offerings.
                  </p>
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-8 transition-all"
                  >
                    Learn More
                  </button>
                </div>
                <div className="max-md:order-1 max-w-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    Tourism Highlights
                  </h3>
                  <p>
                    Uncover the beauty and history of Mekelle with our tourism
                    guide. Explore historical sites, natural wonders, and
                    cultural experiences that make our city a must-visit
                    destination.
                  </p>
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-8 transition-all"
                  >
                    Learn More
                  </button>
                </div>
                <div>
                  <img
                    src="https://readymadeui.com/contact.webp"
                    className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 items-center gap-16">
                <div>
                  <img
                    src="https://readymadeui.com/image-1.webp"
                    className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
                  />
                </div>
                <div className="max-w-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    Visitor Services
                  </h3>
                  <p>
                    Get access to essential services for visitors, including
                    accommodation options, transportation details, and local
                    guides. We’re here to make your stay comfortable and
                    enjoyable.
                  </p>
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-8 transition-all"
                  >
                    Learn More
                  </button>
                </div>
                <div className="max-md:order-1 max-w-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    Upcoming Events{" "}
                  </h3>
                  <p>
                    Join us for a variety of events happening around the city!
                    Whether it's a festival, concert, or community gathering,
                    find out what's on the calendar and participate in the
                    vibrant culture of Mekelle.
                  </p>
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-8 transition-all"
                  >
                    Learn More
                  </button>
                </div>
                <div>
                  <img
                    src="https://readymadeui.com/contact.webp"
                    className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 items-center gap-16">
                <div>
                  <img
                    src="https://readymadeui.com/image-1.webp"
                    className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
                  />
                </div>
                <div className="max-w-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    Interactive Map
                  </h3>
                  <p>
                    Utilize our interactive map to navigate Mekelle
                    effortlessly. Find points of interest, local businesses, and
                    event locations. Plan your visit or explore new areas with
                    ease!
                  </p>
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-8 transition-all"
                  >
                    Learn More
                  </button>
                </div>
                <div className="max-md:order-1 max-w-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    Upcoming Events{" "}
                  </h3>
                  <p>
                    Join us for a variety of events happening around the city!
                    Whether it's a festival, concert, or community gathering,
                    find out what's on the calendar and participate in the
                    vibrant culture of Mekelle.
                  </p>
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-8 transition-all"
                  >
                    Learn More
                  </button>
                </div>
                <div>
                  <img
                    src="https://readymadeui.com/contact.webp"
                    className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="mt-28 bg-gray-50 px-4 sm:px-10 py-12">
            <div className="max-w-7xl max-md:max-w-lg mx-auto">
              <h2 className="md:text-4xl text-3xl font-bold md:text-center mb-14">
                Our Latest Blogs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                <div className="bg-white cursor-pointer rounded-md overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src="https://readymadeui.com/Imagination.webp"
                      alt="Blog Post 1"
                      className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
                    />
                    <div className="px-4 py-2.5 text-white bg-blue-600 absolute bottom-0 right-0">
                      June 10, 2023
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">
                      A Guide to Igniting Your Imagination
                    </h3>
                    <button
                      type="button"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-6 transition-all"
                    >
                      Read More
                    </button>
                  </div>
                </div>
                <div className="bg-white cursor-pointer rounded-md overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src="https://readymadeui.com/hacks-watch.webp"
                      alt="Blog Post 2"
                      className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
                    />
                    <div className="px-4 py-2.5 text-white bg-blue-600 absolute bottom-0 right-0">
                      April 20, 2023
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">
                      Hacks to Supercharge Your Day
                    </h3>
                    <button
                      type="button"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-6 transition-all"
                    >
                      Read More
                    </button>
                  </div>
                </div>
                <div className="bg-white cursor-pointer rounded-md overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src="https://readymadeui.com/prediction.webp"
                      alt="Blog Post 3"
                      className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
                    />
                    <div className="px-4 py-2.5 text-white bg-blue-600 absolute bottom-0 right-0">
                      August 16, 2023
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">
                      Trends and Predictions
                    </h3>
                    <button
                      type="button"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-6 transition-all"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-28">
            <h2 className="md:text-4xl text-3xl font-bold text-center mb-14">
              Mekelle City Metrics
            </h2>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 max-lg:gap-12">
              <div className="text-center">
                <h3 className="text-4xl font-semibold">
                  540<span className="text-blue-600">K+</span>
                </h3>
                <p className="text-base font-semibold mt-4">Total Population</p>
                <p className="mt-2">
                  The total number of registered users on the platform.
                </p>
              </div>

              <div className="relative text-center">
                <span className="absolute top-0 right-0 bg-secondary-100 text-secondary rounded-full p-xs text-xs">
                  elevation
                </span>
                <h3 className="text-4xl font-semibold">
                  7,395 <span className="text-blue-600">ft</span>
                </h3>
                <p className="text-base font-semibold mt-4">Geography</p>
                <p className="mt-2">
                  It is located around 780 kilometres (480 mi) north of the
                  Ethiopian capital Addis Ababa, with an elevation of 2,254
                  metres (7,395 ft) above sea level.
                </p>
              </div>
              <div className="relative text-center">
                <h3 className="text-4xl font-semibold">
                  10<span className="text-blue-600">K</span>
                </h3>
                <p className="text-base font-semibold mt-4">Tourism</p>
                <p className="mt-2">
                  Approximately 10,000 tourists visit Mekelle each year.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-semibold">
                  2<span className="text-blue-600">%</span>
                </h3>
                <p className="text-base font-semibold mt-4">Education</p>
                <p className="mt-2">
                  Approximately 2% literacy among residents.
                </p>
              </div>
            </div>
          </section>
          <section className="mt-28 bg-gray-50 px-4 sm:px-10 py-12 space-y-6">
            <div className="md:text-center max-w-2xl mx-auto mb-14">
              <h2 className="md:text-4xl text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p>
                Explore common questions and find answers to help you make the
                most out of our services. If you don't see your question here,
                feel free to contact us for assistance.
              </p>
            </div>

            <Accordion
              open={open === 1}
              className="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md transition-all p-sm"
            >
              <AccordionHeader onClick={() => handleOpen(1)}>
                What is Mekelle known for?
              </AccordionHeader>
              <AccordionBody>
                Mekelle is known for its rich history, vibrant culture, and
                beautiful landscapes. It features historical landmarks, such as
                St. Mary’s Church and the Mekelle Museum, and is a gateway to
                natural attractions like Mount Abuna Yosef.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 2}
              className="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md transition-all p-sm"
            >
              <AccordionHeader onClick={() => handleOpen(2)}>
                How can I get to Mekelle?{" "}
              </AccordionHeader>
              <AccordionBody>
                Mekelle is accessible by air, road, and rail. The city has an
                airport with domestic flights connecting to Addis Ababa and
                other regions. Buses and taxis are also available for ground
                transportation.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 3}
              className="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md transition-all p-sm"
            >
              <AccordionHeader onClick={() => handleOpen(3)}>
                What are the best times to visit Mekelle?{" "}
              </AccordionHeader>
              <AccordionBody>
                The best times to visit are during the dry season, from October
                to June, when the weather is pleasant for outdoor activities and
                sightseeing.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 4}
              className="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md transition-all p-sm"
            >
              <AccordionHeader onClick={() => handleOpen(4)}>
                Are there accommodations available in Mekelle?{" "}
              </AccordionHeader>
              <AccordionBody>
                Yes, Mekelle offers a range of accommodations, including hotels,
                guesthouses, and hostels, catering to various budgets.
              </AccordionBody>
            </Accordion>

            {/*
             */}
            <Accordion
              open={open === 5}
              className="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md transition-all p-sm"
            >
              <AccordionHeader onClick={() => handleOpen(5)}>
                Is Mekelle safe for tourists?{" "}
              </AccordionHeader>
              <AccordionBody>
                Mekelle is generally considered safe for tourists, but like any
                city, it's advisable to stay aware of your surroundings and
                follow local guidelines for safety.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 6}
              className="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md transition-all p-sm"
            >
              <AccordionHeader onClick={() => handleOpen(6)}>
                What activities can I do in Mekelle?{" "}
              </AccordionHeader>
              <AccordionBody>
                Visitors can explore cultural landmarks, hike in the surrounding
                mountains, participate in local festivals, and visit markets to
                experience the local lifestyle.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 7}
              className="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md transition-all p-sm"
            >
              <AccordionHeader onClick={() => handleOpen(7)}>
                How can I find local events happening in Mekelle?{" "}
              </AccordionHeader>
              <AccordionBody>
                You can check our website's events section or follow local
                social media pages for updates on upcoming festivals, concerts,
                and community gatherings.
              </AccordionBody>
            </Accordion>
          </section>
        </div>
      </div>
      <footer className="bg-gray-50 px-4 sm:px-10 py-12 mt-28">
        <div className="md:max-w-[50%] mx-auto text-center">
          <div className="bg-[#fff] border flex px-2 py-1 rounded-full text-left mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent pl-4"
            />
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 transition-all"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid max-sm:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-5 gap-8 border-t border-gray-300 mt-10 pt-8">
          <div className="xl:col-span-2">
            <h4 className="text-xl font-semibold mb-6">Disclaimer</h4>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              gravida, mi eu pulvinar cursus, sem elit interdum mauris.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link to="" className="hover:text-blue-600">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-blue-600">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-blue-600">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-blue-600">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link to="" className="hover:text-blue-600">
                  Webinars
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-blue-600">
                  Ebooks
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-blue-600">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-blue-600">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <ul className="space-y-4">
              <li>
                <Link to="" className="hover:text-blue-600">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-blue-600">
                  Mission and Values
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-blue-600">
                  Team
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-blue-600">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10">
          © 2023
          <a
            href="https://readymadeui.com/"
            target="_blank"
            className="hover:underline mx-1"
          >
            ReadymadeUI
          </a>
          All Rights Reserved.
        </p>
      </footer>
    </div>
  );
});

export default HomePage;
