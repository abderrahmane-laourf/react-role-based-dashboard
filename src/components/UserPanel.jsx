import React from "react";

export default function UserPanel() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-2">Welcome, User!</h2>
      <p className="text-gray-600 mb-6">Choose an action below:</p>
      <div className="flex flex-col gap-3">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          View Profile
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
          Settings
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
          Log Out
        </button>
      </div>
    </div>
  );
}
