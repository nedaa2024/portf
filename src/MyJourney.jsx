import "./MyJourney.css";
export default function MyJourney() {
  return (
    <div className=" box" style={{ marginBottom: "150px" }}>
      <h1
        className="text-3xl text-center font-bold text-white mb-8 mt-2"
        style={{ letterSpacing: "4px" }}
      >
        My Journey
      </h1>
      <div className="flex justify-evenly journey-box">
        {" "}
        <div
          className="education rounded-md mt-8"
          style={{
            backgroundColor: "#ffffff2e",
            padding: "1rem",
            margin: "1rem",
          }}
        >
          <h2 className="font-bold text-white">
            Education{" "}
            <span className="text-xs text-gray-200 font-light ml-3">
              2018 - 2023
            </span>
            <hr className="w-[90%] mt-1 text-gray-100"></hr>
          </h2>
          <p className="text-sm text-gray-200 mb-2 mt-3 pp">
            Bachelor Degree of Computer Engineering
          </p>
          <p className="text-xs text-gray-200 mb-2 pp">
            Institution is Yarmouk University
          </p>
          <p className="text-xs text-gray-200 pp">
            ABET Accreditated Hijjawi Faculty For Engineering Technology
          </p>
        </div>
        <div
          className="expereience rounded-md mt-8"
          style={{
            backgroundColor: "#ffffff2e",
            padding: "1rem",
            margin: "1rem",
          }}
        >
          <h2 className="font-bold text-white">
            Experience{" "}
            <span className="text-xs text-gray-200 font-light ml-3">
              Feb 2023 - June 2023
            </span>
          </h2>
          <hr className="w-[90%] mt-1 text-gray-100"></hr>

          <p className="text-sm text-gray-200 mb-2 mt-3 pp">
            Full stack web developer Trainee
          </p>
          <p className="text-xs text-gray-200 pp">
            Institution is Hisham Hijjawi Incubator
          </p>
        </div>
      </div>
    </div>
  );
}
