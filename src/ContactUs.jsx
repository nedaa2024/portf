import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import "./ContactUs.css";
export default function ContactUs() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f5797921-a109-4bf3-a2f6-963aeeb02331");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="w-full mx-auto mt-15 mb-12">
      <h1
        className="text-white text-center font-bold mb-5"
        style={{ letterSpacing: "4px" }}
      >
        CONTACT ME
      </h1>

      <div className="flex justify-evenly">
        <div>
          {" "}
          <form onSubmit={onSubmit}>
            {" "}
            <div className="mb-4">
              <input
                name="name"
                placeholder=" Your Name"
                type="text"
                className="placeholder:text-xs form-input mt-1 block w-[60%] rounded-md  h-full ml-5  w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent border-r-transparent border-l-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border  disabled:resize-none disabled:border-0 text-white "
              />
            </div>
            <div className="mb-4">
              <input
                name="email"
                type="email"
                className="placeholder:text-xs form-input mt-1 block w-[60%] rounded-md  h-full ml-5 mb-5  w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent border-r-transparent border-l-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border  disabled:resize-none disabled:border-0 text-white"
                placeholder=" Your Email"
              />{" "}
            </div>
            <div>
              <textarea
                name="message"
                className="placeholder:text-xs border-r-transparent border-l-transparent peer h-full min-h-[100px] ml-5  w-[70%] resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200    disabled:resize-none disabled:border-0 text-white"
                placeholder="Enter Your Message "
              ></textarea>
            </div>
            <div className="flex justify-center item-center">
              {" "}
              <button
                style={{
                  letterSpacing: "4px",
                  height: "46px",
                  width: "240px",
                  border: "1px solid white",
                }}
                type="submit"
                className="flex justify-center items-center mt-8 mb-5 bg-transparent  text-white rounded-md   w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 btn"
              >
                <span style={{ fontWeight: "bold" }}> Send</span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-evenly mr-10">
          <div className="flex justify-start">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <p style={{ letterSpacing: "3px" }} className="text-white">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;+962 776485420
            </p>{" "}
          </div>
          <div className="flex justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p className="text-white" style={{ letterSpacing: "2px" }}>
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;Irbid-Alkorah
            </p>
          </div>
          <div className="flex justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <p className="text-white" style={{ letterSpacing: "2px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;nedaaalyasein@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-white" style={{ letterSpacing: "4px" }}>
          Or Contact Me With :
        </p>
        <div className="flex space-x-4 mt-4 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/nedaa-alyasein-843806293/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialLinkedinCircular
              style={{ color: "white", borderRadius: "50%", fontSize: "40px" }}
            />
          </a>
          <a
            href="https://github.com/nedaa2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              style={{ color: "white", borderRadius: "50%", fontSize: "30px" }}
            />
          </a>
          <a
            href="in/nedaa-alyasein-843806293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              style={{ color: "white", borderRadius: "50%", fontSize: "30px" }}
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <CgMail
              style={{ color: "white", borderRadius: "50%", fontSize: "35px" }}
            />
          </a>
        </div>{" "}
      </div>
    </div>
  );
}
