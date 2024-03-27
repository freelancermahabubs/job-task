import React from "react";


import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import LoginForm from "../../../components/user/LoginForm";
import PlainLayout from "../../../components/master/Plain-Layout";

const Page = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (typeof token !== "undefined") {
    redirect("/");
  }
  return (
    <PlainLayout>
      <LoginForm />
    </PlainLayout>
  );
};

export default Page;
