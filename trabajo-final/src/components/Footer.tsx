import React from "react";
import { useEffect, useState } from "react";

export const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="py-4 px-6 flex justify-between items-center mx-auto max-w-screen-lg flex-wrap">
      <a href="/" className="font-bold text-inherit">
        ACME
      </a>
      <p>Designed & Developed by Kebab Team</p>
    </footer>
  );
};
