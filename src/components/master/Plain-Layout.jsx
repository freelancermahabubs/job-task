import React from "react";
import AppNavBar from "../../components/master/AppNavBar";

import {Toaster} from "react-hot-toast";
import {cookies} from "next/headers";

async function getData() {

}

const PlainLayout = async (props) => {
  const data = await getData();

  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let isLogin = false;
  isLogin = typeof token !== "undefined";

  return (
    <>
      <AppNavBar isLogin={isLogin} data={data} />
      {props.children}

      <Toaster position="bottom-center" />
    </>
  );
};

export default PlainLayout;
