import React from "react";
import "./index.css";

const TournamentCard = ({
  name,
  startDate,
  endDate,
  summary,
  registrationUrl,
}) => (
  <div className="tournament-card">
    <h3>{name}</h3>
    <p>
      <strong>Dates:</strong> {startDate} - {endDate}
    </p>
    <p>{summary}</p>
    <button
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded my-4"
      onClick={() => window.open(registrationUrl, "_blank")}
    >
      Register Now
    </button>
  </div>
);

export default TournamentCard;
