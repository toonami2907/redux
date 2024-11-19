import { Link, useNavigate } from "react-router-dom";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, resetError } from "@/features/Auth/AuthSlice";
import toast from "react-hot-toast";

export function LoginForm() {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });


  useEffect(() => {
    if (error && isSubmitting) {
      toast.error(error);
      setIsSubmitting(false);
    }
    // Cleanup error on unmount
    return () => {
      dispatch(resetError());
    };
  }, [error, dispatch, isSubmitting]);

  const handleSignIn = async(e) =>{
    e.preventDefault();
  try {
    await dispatch(login(userData)).unwrap();
    toast.success("User logged in successfully");
    navigate("/");
  } catch (error) {
    toast.error(error);
  }
  }
  console.log(error);
  
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="#"
                  className="ml-auto inline-block text-xs md:text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                type="password"
                required
              />
            </div>
            <Button type="submit" onClick={(e)=>handleSignIn(e)} className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/auth/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
