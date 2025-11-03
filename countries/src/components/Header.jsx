import { useTheme } from "../context/ThemeContext";

function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="bg-element text-text shadow-xl">
      <div className="flex items-center justify-between px-4 py-8 md:mx-auto md:max-w-xl md:px-0 xl:max-w-7xl">
        <h2 className="m-0 text-lg font-extrabold">Where in the world?</h2>
        <button
          type="button"
          onClick={toggleDarkMode}
          className="flex cursor-pointer items-center gap-2 border-none bg-transparent p-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
            width={20}
            height={20}
          >
            <path
              d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
              className="fill-fill stroke-text"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
          <span className="font-semibold text-text">Dark Mode</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
