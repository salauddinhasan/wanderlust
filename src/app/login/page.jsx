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
import { redirect, useRouter } from "next/navigation";

import { FaGoogle } from "react-icons/fa6";

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const password = e.target.password.value;

    if (!email || !password) {
      alert("Please fill in all required fields!");
      return;
    }

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    // console.log(data, error);

    if (error) {
      alert("invalid email & password !");
      return;
    }

    alert("Account created successfully!");
    e.target.reset();
    router.push("/");
    redirect("/");
  };

 const handleGoogleLogin = async () => {
    const result = await authClient.signIn.social({
      provider: "google",
    });
    console.log({result})
  };

  return (
    <div className="flex items-center justify-center my-10 ">
      <Form
        className="w-full max-w-md mx-auto shadow-xl p-6 rounded-lg"
        onSubmit={onSubmit}
      >
        <Fieldset>
          <FieldGroup>
            <h1>Login Page</h1>

            {/* Email */}
            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>

            {/* Password */}
            <TextField isRequired name="password" type="password">
              <Label>Password</Label>
              <Input placeholder="Enter password" />
              <FieldError />
            </TextField>
          </FieldGroup>

          <Fieldset.Actions>
            <Button type="submit" className="w-full">
              log in
            </Button>
          </Fieldset.Actions>
        </Fieldset>

        <div className="flex items-center gap-3 py-5">
          <div className="flex-1 h-px bg-gray-200" />
          <p className="text-gray-400 text-sm">or</p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex items-center justify-center">
          <button onSubmit={handleGoogleLogin} className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium px-6 py-2.5 rounded-full transition-all duration-200">
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
