import AuthInput from "../../components/AuthInput";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";
import { bgImageUrl } from "../../Constant/Data";
import AuthFirstSection from "../../components/AuthFirstSection";
export default function Login() {
  const { register, handleSubmit, onSubmit, errors } = useLogin();
  return (
      <>
        <section className="min-h-screen flex items-stretch text-white ">
       <AuthFirstSection/>
          <div
            className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-6 z-0"
            style={{ backgroundColor: "#161616" }}
          >
            <div
              className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
              style={{
                backgroundImage:`url(${bgImageUrl})`,
              }}
            >
              <div className="absolute bg-black opacity-60 inset-0 z-0" />
            </div>
            <div className="w-full py-6 z-20">
              <h1 className="my-6 text-3xl font-bold">
                Welcome To Codians Lab
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
              >
                <AuthInput
                  errors={errors}
                  register={register}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  hidden={false}
                />
                <AuthInput
                  errors={errors}
                  register={register}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  hidden={false}
                />
            
                <div className="px-4 pb-2 pt-4">
                  <button className="uppercase block w-full p-4 text-lg rounded-full bg-secondary  hover:bg-secondary/75 focus:outline-none">
                    sign in
                  </button>
                </div>
                <div className="mt-2 text-center text-gray-400 hover:underline hover:text-gray-100">
                  <Link to="/Signup">Register Account</Link>
                </div>
               
              </form>
            </div>
          </div>
        </section>
      </>
  );
}
