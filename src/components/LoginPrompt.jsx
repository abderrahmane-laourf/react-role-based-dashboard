import React from 'react';

function LoginPrompt() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">You are not logged in</h2>
        <p className="text-gray-600 mb-6">Please log in to access your dashboard.</p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPrompt;
