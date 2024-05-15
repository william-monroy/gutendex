const ButtonUp = () => {
  return (
    <button
      className="w-10 h-10 p-2 rounded-full fixed right-6 bottom-6 z-10 bg-gradient-to-tr from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 text-white shadow-lg
      "
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      role="button"
      aria-label="Scroll hacia arriba"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ButtonUp;
