import type { NextPage } from "next";
import Head from "next/head";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { API_BASE_URL } from "../utils/constants";
import { createAccountSchema } from "../utils/validator";
import type { User } from "../utils/types";
import useAxios from "axios-hooks";

const Home: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(createAccountSchema),
  });

  const [{ loading, error }, submitData] = useAxios<User>(
    {
      url: `${API_BASE_URL}/api/users/create`,
      method: "POST",
    },
    { manual: true }
  );

  const onSubmit: SubmitHandler<User> = async (data) => {
    const res = await submitData({ data });
    if (res.status === 200) router.push("/success");
  };

  return (
    <div>
      <Head>
        <title>wisp Frontend Interview</title>
        <meta name="description" content="Frontend interview starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex">
        <div className="bg-customCobalt-200 relative h-screen w-1/2 hidden md:block">
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="text-xl text-white">
              You choose where and when to share your story,
              <br />
              not your prescription
            </h3>
            <p className="text-lg mt-4 text-white">
              Meds prescribed online, discreetly packaged & delivered to you.
            </p>
          </div>
        </div>
        <div className="bg-white h-screen w-full md:w-1/2 p-10">
          <h1 className="text-3xl font-bold text-customMingo-200">
            Create Account
          </h1>
          <p className="py-6">Register to create an account</p>

          {error && (
            <div className="w-full text-white bg-red-500 rounded mb-2">
              <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                <div className="flex">
                  <p className="mx-3">{error?.message}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                className="block mb-2 font-bold text-gray-600"
                htmlFor="First Name"
              >
                First Name
              </label>
              <input
                id="firstName"
                data-testid="firstName"
                className="block w-full px-4 py-4 text-gray-700 border-2 focus:border-info focus:outline-none"
                type="text"
                placeholder="First name"
                {...register("firstName")}
                required
              />
              <p className="text-red-500">{errors.firstName?.message}</p>
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 font-bold text-gray-600"
                htmlFor="Last Name"
              >
                Last Name
              </label>
              <input
                id="lastName"
                data-testid="lastName"
                className="block w-full px-4 py-4 text-gray-700 border-2 focus:border-info focus:outline-none"
                type="text"
                {...register("lastName")}
                placeholder="Last name"
                required
              />
              <p className="text-red-500">{errors.lastName?.message}</p>
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 font-bold text-gray-600"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                id="Email"
                data-testid="Email"
                className="block w-full px-4 py-4 text-gray-700 border-2 focus:border-info focus:outline-none"
                type="email"
                {...register("email")}
                placeholder="Email"
                required
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 font-bold text-gray-600"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                id="Password"
                data-testid="Password"
                className="block w-full px-4 py-4 text-gray-700 border-2 focus:border-info focus:outline-none"
                type="password"
                {...register("password")}
                placeholder="Password"
                required
              />
              <p className="text-red-500">{errors.password?.message}</p>
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 font-bold text-gray-600"
                htmlFor="Confirm Password"
              >
                Confrim Password
              </label>
              <input
                id="confirmPassword"
                data-testid="confirmPassword"
                className="block w-full px-4 py-4 text-gray-700 border-2 focus:border-info focus:outline-none"
                type="password"
                {...register("confirmPassword")}
                placeholder="Confirm Password"
                required
              />
              <p className="text-red-500">{errors.confirmPassword?.message}</p>
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 font-bold text-gray-600"
                htmlFor="Phone Number"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                data-testid="phoneNumber"
                className="block w-full px-4 py-4 text-gray-700 border-2 focus:border-info focus:outline-none"
                type="tel"
                {...register("phoneNumber")}
                placeholder="Phone Number"
              />
              <p className="text-red-500">{errors.phoneNumber?.message}</p>
            </div>

            <button
              id="submit"
              data-testid="submit"
              type="submit"
              disabled={Object.values(errors).some((error) => Boolean(error))}
              className="border border-transparent bg-customCobalt-200 py-2 px-4 mt-2 text-sm font-medium text-white hover:bg-customMingo-200 disabled:bg-gray-400"
            >
              {loading ? "Loading..." : "Create Account"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
