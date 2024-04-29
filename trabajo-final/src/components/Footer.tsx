import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-4 px-6 flex justify-between items-center mx-auto max-w-screen-lg flex-wrap">
      <a href="/" className="font-bold text-inherit">
        ACME
      </a>
      <p>Designed & Developed by Kebab Team</p>
    </footer>
  );
};
