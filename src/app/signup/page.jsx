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
    <div className="flex items-center justify-center my-10">
      <Form
        className="w-full max-w-md mx-auto shadow-xl p-6 rounded-lg"
        onSubmit={onSubmit}
      >
        <Fieldset>
          <FieldGroup>
            <TextField isRequired name="name">
              <Label>Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>

            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>

            <TextField isRequired name="image">
              <Label>Image URL</Label>
              <Input placeholder="https://example.com/image.jpg" />
              <FieldError />
            </TextField>

            <TextField isRequired name="password" type="password">
              <Label>Password</Label>
              <Input placeholder="Enter password" />
              <FieldError />
            </TextField>
          </FieldGroup>

          <Fieldset.Actions>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </Fieldset.Actions>
        </Fieldset>

        <div className="flex items-center gap-3 py-5">
          <div className="flex-1 h-px bg-gray-200" />
          <p className="text-gray-400 text-sm">or</p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium px-6 py-2.5 rounded-full transition-all duration-200"
          >
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SignupPage;
