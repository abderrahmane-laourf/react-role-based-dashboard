import React from "react";

export default function GuestMessage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-yellow-50 border border-yellow-300 rounded-2xl shadow text-center">
      <h1 className="text-3xl font-extrabold text-yellow-700 mb-2">Hello, Guest!</h1>
      <p className="text-yellow-800 text-md">
        You have limited access. Please log in or sign up to enjoy more features.
      </p>
    </div>
  );
}
