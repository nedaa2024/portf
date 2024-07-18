import { useState, useEffect } from "react";
export default function BackToTop() {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTop && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
          onClick={scrollUp}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "50px",
            zIndex: "2",
            color: "#c0fffe",
            cursor: "pointer",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        // <button
        //   style={{
        //     position: "fixed",
        //     bottom: "50px",
        //     right: "50px",
        //     height: "50px",
        //     width: "50px",
        //     fontSize: "50px",
        //   }}
        //   onClick={scrollUp}
        // >
        //   ^
        // </button>
      )}{" "}
    </div>
  );
}
