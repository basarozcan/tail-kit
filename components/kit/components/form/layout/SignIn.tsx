import React from "react";
import Button from "../../elements/buttons/Button";
import InputText from "../inputtext/InputText";

const SignIn = () => {
  return (
    <div className="flex flex-col bg-white shadow px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-lg w-full max-w-md">
      <div className="font-medium self-center text-xl sm:text-2xl  text-gray-600 mb-6">
        Login To Your Account
      </div>

      <div className="mt-8">
        <form action="#" autoComplete="off">
          <div className="flex flex-col mb-2">
            <InputText icon="far fa-envelope" placeholder="Your email" />
          </div>
          <div className="flex flex-col mb-6">
            <InputText icon="fas fa-unlock-alt" placeholder="Your password" />
          </div>

          <div className="flex items-center mb-6 -mt-4">
            <div className="flex ml-auto">
              <a
                href="#"
                className="inline-flex text-xs font-thin sm:text-sm text-gray-500 hover:text-gray-700"
              >
                Forgot Your Password?
              </a>
            </div>
          </div>

          <div className="flex w-full">
            <Button label="Login" color="purple" />
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center mt-6">
        <a
          href="#"
          target="_blank"
          className="inline-flex items-center font-thin text-gray-500 hover:text-gray-700 text-xs text-center"
        >
          <span className="ml-2">You don't have an account?</span>
        </a>
      </div>
    </div>
  );
};
export default SignIn;