import React from "react";
import LoginPrompt from "./components/LoginPrompt";
import AdminPanel from "./components/AdminPanel";
import UserPanel from "./components/UserPanel";
import GuestMessage from "./components/GuestMessage";

export default function Dashboard({ isLoggedIn, accountType }) {
  if (!isLoggedIn) {
    return <LoginPrompt />;
  }

  switch (accountType){
    case "user":
      return <UserPanel/>;
    case "admin":
      return <AdminPanel/>;
    case "guest":
      return <GuestMessage/>;
    default:
      return  <p>Unknown account type</p>;
  }
}
