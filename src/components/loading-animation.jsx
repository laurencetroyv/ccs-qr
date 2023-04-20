import React from "react";

export default function Spinner() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="inline-block w-14 h-14 border border-solid rounded-3xl border-t-pink-400 animate-spin" />
    </div>
  );
}
