import React from 'react'
import { redirect } from "next/navigation";

const Page = () => {
  redirect("/controlpanel/login");
};

export default Page;