import React from "react";

export default function AdminPanel() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-green-50 border border-green-300 rounded-2xl shadow text-center">
      <h1 className="text-3xl font-extrabold text-green-700 mb-2">Hello, Admin!</h1>
      <p className="text-green-800 text-md">
        You have full access to manage users, settings, and reports.
      </p>
    </div>
  );
}
