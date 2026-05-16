"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { useRouter } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa6";

const SignupPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    if (!name || !email || !password) {
      alert("Please fill in all required fields!");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (error) {
      alert("Signup failed!");
      return;
    }

    alert("Account created successfully!");
    e.target.reset();
    router.push("/");
  };

  const handleGoogleLogin = async () => {
    const result = await authClient.signIn.social({
      provider: "google",
    });
    console.log({ result });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-400 text-sm mt-1">Join Wanderlust today</p>
        </div>

        {/* Form */}
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <Fieldset>
            <FieldGroup className="flex flex-col gap-4">
              <TextField isRequired name="name">
                <Label className="text-sm font-medium text-gray-700">Name</Label>
                <Input placeholder="John Doe" className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                <FieldError />
              </TextField>

              <TextField isRequired name="email" type="email">
                <Label className="text-sm font-medium text-gray-700">Email</Label>
                <Input placeholder="john@example.com" className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                <FieldError />
              </TextField>

              <TextField name="image">
                <Label className="text-sm font-medium text-gray-700">Image URL <span className="text-gray-400 font-normal">(optional)</span></Label>
                <Input placeholder="https://example.com/image.jpg" className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                <FieldError />
              </TextField>

              <TextField isRequired name="password" type="password">
                <Label className="text-sm font-medium text-gray-700">Password</Label>
                <Input placeholder="Enter password" className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                <FieldError />
              </TextField>
            </FieldGroup>

            <Button
              type="submit"
              className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2.5 rounded-xl transition-all duration-200"
            >
              Create Account
            </Button>
          </Fieldset>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-gray-200" />
          <p className="text-gray-400 text-sm">or</p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium px-6 py-2.5 rounded-full transition-all duration-200"
        >
          <FaGoogle className="text-red-500" />
          Continue with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-400 mt-5">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-500 font-medium hover:underline">
            Login
          </a>
        </p>

      </div>
    </div>
  );
};

export default SignupPage;