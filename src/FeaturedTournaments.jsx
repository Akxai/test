// // import React, { useState, useEffect } from "react";
// // import TournamentCard from "./TournamentCard";

// // const FeaturedTournaments = () => {
// //   const [tournaments, setTournaments] = useState([]);

// //   useEffect(() => {
// //     fetch("http://localhost:3000/featured-tournaments")
// //       .then((response) => response.json())
// //       .then((data) => setTournaments(data));
// //   }, []);

// //   return (
// //     <section className="featured-tournaments">
// //       <h1>Featured Tournaments</h1>
// //       <ul>
// //         {tournaments.map((tournament) => (
// //           <li key={tournament.id}>
// //             <TournamentCard
// //               name={tournament.name}
// //               dates={tournament.dates}
// //               summary={tournament.summary}
// //               tournamentId={tournament.id}
// //             />
// //           </li>
// //         ))}
// //       </ul>
// //     </section>
// //   );
// // };

// // export default FeaturedTournaments;

// import React, { useState, useEffect } from "react";

// function FeaturedTournaments() {
//   const [tournaments, setTournaments] = useState([]);

//   // Fetch tournament data from an API or mock API
//   useEffect(() => {
//     fetch("http://localhost:3000/featured-tournaments") // Example API
//       .then((response) => response.json())
//       .then((data) => setTournaments(data));
//   }, []);

//   return (
//     <div className="featured-tournaments">
//       <h2>Featured Tournaments</h2>
//       <div className="tournament-list">
//         {tournaments.map((tournament) => (
//           <TournamentCard
//             key={tournament.id}
//             name={tournament.name}
//             startDate={tournament.dates.split(" - ")[0]} // Assuming dates format is "Oct 15 - Oct 20"
//             endDate={tournament.dates.split(" - ")[1]}
//             summary={tournament.summary}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// // TournamentCard Component
// const TournamentCard = ({ name, startDate, endDate, summary }) => (
//   <div className="tournament-card" style={cardStyle}>
//     <h3>{name}</h3>
//     <p>
//       <strong>Dates:</strong> {startDate} - {endDate}
//     </p>
//     <p>{summary}</p>
//     <button style={registerButtonStyle}>Register Now</button>
//   </div>
// );

// // CSS Styles
// const cardStyle = {
//   border: "1px solid #333",
//   padding: "16px",
//   margin: "10px",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   textAlign: "center",
//   backgroundColor: "#f9f9f9",
// };

// const registerButtonStyle = {
//   marginTop: "10px",
//   padding: "10px 20px",
//   backgroundColor: "#ff4081",
//   color: "#fff",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
// };

// export default FeaturedTournaments;

// FeaturedTournaments.js
import React, { useState, useEffect } from "react";
import TournamentCard from "./TournamentCard";

function FeaturedTournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    // Mock API response
    const mockTournaments = [
      {
        id: 1,
        name: "Esports Championship",
        start_date: "Oct 15",
        end_date: "Oct 20",
        summary: "The most exciting championship of the year!",
        registrationUrl: "http://localhost:3000/register",
      },
      {
        id: 2,
        name: "Global League",
        start_date: "Nov 5",
        end_date: "Nov 10",
        summary: "An international league event.",
        registrationUrl: "http://localhost:3000/register",
      },
    ];
    setTournaments(mockTournaments);
  }, []);

  return (
    <div className="featured-tournaments">
      <h2>Featured Tournaments</h2>
      <div className="tournament-cards">
        {tournaments.map((tournament) => (
          <TournamentCard
            key={tournament.id}
            name={tournament.name}
            startDate={tournament.start_date}
            endDate={tournament.end_date}
            summary={tournament.summary}
            registrationUrl={tournament.registrationUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedTournaments;
