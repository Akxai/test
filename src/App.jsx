import React from "react";
import FeaturedTournaments from "./FeaturedTournaments";
import UpcomingTournaments from "./UpcomingTournaments";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpcomingTournamentsPage from "./UpcomingTournamentsPage";

const App = () => {
  return (
    <div className="app">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<FeaturedTournaments />} />
            <Route
              path="/upcoming-events"
              element={<UpcomingTournamentsPage />}
            />
          </Routes>
          <UpcomingTournaments />
        </div>
      </Router>
    </div>
  );
};

export default App;
