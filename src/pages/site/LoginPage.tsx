import { ErrorMessage } from "@hookform/error-message";
import { Button, Input, Spinner } from "@material-tailwind/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import withAnimation from "../../components/route-animation/withAnimation";
import config from "../../config";
import { useJwtTokenMutation } from "../../services/authApi";
import { GeneralErrorType, JwtTokenIface, LoginType } from "../../types/types";
import { isAuthenticated } from "../../utils/auth";

const LoginPage = withAnimation(() => {
  const location = useLocation();
  const navigate = useNavigate();

  const form = useForm({ defaultValues: { username: "", password: "" } });
  const [searchParams] = useSearchParams(location.search);
  const [token, setToken] = useLocalStorage<JwtTokenIface>(
    config.JWT_KEY_NAME,
    config.JWT_DEFAULT_VALUE
  );
  const [login, loginResponse] = useJwtTokenMutation();
  const onSubmit = (data: Required<LoginType>) => {
    console.log("this is the submit stage", data);
    login({
      password: data.password,
      username: data.username,
    });
  };

  useEffect(() => {
    if (loginResponse.isSuccess) {
      setToken(loginResponse.data);
      navigate(
        searchParams.get("from")
          ? searchParams.get("from") + location.hash
          : config.LOGIN_REDIRECT,
        {
          replace: true,
        }
      );
    }
    if (loginResponse.isError) {
      console.log(loginResponse.error, "------------");
      if ((loginResponse.error as GeneralErrorType).status === 401) {
        Object.keys((loginResponse.error as GeneralErrorType).data).forEach(
          (key) => {
            if (key === "username" || key === "password") {
              return;
            }
            form.setError("root", {
              type: "server",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              message: (loginResponse.error as any).data[key],
            });
            console.log(
              "this is the message ",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (loginResponse.error as any).data.detail
            );
          }
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginResponse.isSuccess, loginResponse.isError]);

  return (
    <>
      {isAuthenticated(token.access!) ? (
        <Navigate
          to={
            searchParams.get("from")
              ? searchParams.get("from") + location.hash
              : config.LOGIN_REDIRECT
          }
          replace={true}
        />
      ) : (
        <div className="py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Login</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <form
                    className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                    onSubmit={form.handleSubmit(onSubmit)}
                  >
                    <Input
                      crossOrigin={""}
                      {...form.register("username", {
                        required: "username is required",
                      })}
                      defaultValue="admin@mekelle.app"
                      variant="standard"
                      label="username"
                    />
                    <ErrorMessage
                      errors={form.formState.errors}
                      name="username"
                    />
                    <Input
                      crossOrigin={""}
                      {...form.register("password", {
                        required: "password is required",
                      })}
                      defaultValue="Admin123!"
                      type="password"
                      variant="standard"
                      label="password"
                    />

                    <ErrorMessage
                      errors={form.formState.errors}
                      name="password"
                      render={({ message }) => <p>{message}</p>}
                    />
                    <div className="relative">
                      <Button type="submit" className="bg-cyan-500 text-white">
                        {loginResponse.isLoading ? <Spinner /> : "Submit"}
                      </Button>
                    </div>
                    {loginResponse.isError && (
                      <div className="text-red-500 p-sm shadow-xl rounded-xl">
                        {JSON.stringify(loginResponse.error)}
                      </div>
                    )}

                    {loginResponse.isSuccess && (
                      <div className="text-green-500 p-sm shadow-xl rounded-xl">
                        successfully logged in
                      </div>
                    )}
                    <p className="flex text-center text-sm text-primary-500 gap-sm">
                      Don&#x27;t have an account yet?
                      <a
                        href="#"
                        className="font-semibold underline hover:underline focus:text-primary-800 focus:outline-none"
                      >
                        Sign up
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="800px"
                    height="800px"
                    viewBox="-0.5 0 48 48"
                    version="1.1"
                  >
                    <title>Google-color</title>
                    <desc>Created with Sketch.</desc> <defs> </defs>
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Color-"
                        transform="translate(-401.000000, -860.000000)"
                      >
                        <g
                          id="Google"
                          transform="translate(401.000000, 860.000000)"
                        >
                          <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                          ></path>

                          <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                          ></path>

                          <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                          ></path>

                          <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default LoginPage;
