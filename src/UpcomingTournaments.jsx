// // import React, { useState, useEffect } from "react";
// // import TournamentCard from "./TournamentCard";

// // const UpcomingTournaments = () => {
// //   const [tournaments, setTournaments] = useState([]);

// //     useEffect(() => {
// //       fetch("http://localhost:3000/upcoming-tournaments")
// //         .then((response) => response.json())
// //         .then((data) => setTournaments(data));
// //     }, []);

// //   console.log(tournaments);

// //   return (
// //     <section className="upcoming-tournaments">
// //       <h1>Upcoming Tournaments</h1>
// //       <ul>
// //         {tournaments.map((tournament) => (
// //           <li key={tournament.id}>
// //             <TournamentCard
// //               name={tournament.name}
// //               dates={tournament.dates}
// //               registerLink={tournament.registerLink}
// //               tournamentId={tournament.id}
// //             />
// //           </li>
// //         ))}
// //       </ul>
// //     </section>
// //   );
// // };

// // export default UpcomingTournaments;

// import React, { useState, useEffect } from "react";

// function UpcomingTournaments() {
//   const [upcomingTournaments, setUpcomingTournaments] = useState([]);

//   // Fetch upcoming tournament data from an API or mock API
//   useEffect(() => {
//     fetch("http://localhost:3000/upcoming-tournaments") // Example API
//       .then((response) => response.json())
//       .then((data) => setUpcomingTournaments(data));
//   }, []);

//   return (
//     <div className="upcoming-tournaments">
//       <h2>Upcoming Tournaments</h2>
//       <ul style={upcomingListStyle}>
//         {upcomingTournaments.map((tournament) => (
//           <li key={tournament.id} style={listItemStyle}>
//             {tournament.name} - {tournament.dates}
//           </li>
//         ))}
//       </ul>
//       <button style={viewMoreButtonStyle}>View More</button>
//     </div>
//   );
// }

// // CSS Styles
// const upcomingListStyle = {
//   border: "1px solid #ddd",
//   padding: "16px",
//   margin: "10px",
//   listStyleType: "none",
// };

// const listItemStyle = {
//   padding: "8px 0",
//   borderBottom: "1px solid #eee",
// };

// const viewMoreButtonStyle = {
//   marginTop: "20px",
//   padding: "10px 20px",
//   backgroundColor: "#007bff",
//   color: "#fff",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
// };

// export default UpcomingTournaments;

// UpcomingEvents.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function UpcomingTournaments() {
  const [upcomingTournaments, setUpcomingTournaments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Mock upcoming tournaments data
    const mockUpcomingTournaments = [
      { id: 1, name: "Esports Championship", dates: "Oct 25 - Oct 30" },
      { id: 2, name: "Global League", dates: "Nov 15 - Nov 20" },
    ];
    setUpcomingTournaments(mockUpcomingTournaments);
  }, []);

  return (
    <div className="upcoming-tournaments">
      <h2>Upcoming Tournaments</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {upcomingTournaments.map((tournament) => (
          <li
            key={tournament.id}
            style={{
              border: "1px solid #ddd",
              margin: "10px 0",
              padding: "10px",
            }}
          >
            {tournament.name} - {tournament.dates}
          </li>
        ))}
      </ul>
      <Link to="/upcoming-events">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded my-4">
          View More
        </button>
      </Link>
    </div>
  );
}

export default UpcomingTournaments;
