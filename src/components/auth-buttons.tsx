"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, RegisterLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Button from "./ui/button";
import Loader from "./loader/loader";

interface AuthButtonsProps {
  isLoggedIn: boolean;
}


export default function AuthButtons({ isLoggedIn }: AuthButtonsProps) {
  const { isLoading } = useKindeBrowserClient();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {isLoggedIn ? (
        <LogoutLink className="text-xs">
          <Button>Logout</Button>
        </LogoutLink>
      ) : (
        <div className="flex items-center">
          <RegisterLink className="mr-5 text-xs">
            <Button>Register</Button>
          </RegisterLink>

          <LoginLink className="text-xs">
            <Button>Login</Button>
          </LoginLink>
        </div>
      )}
    </>
  );
}