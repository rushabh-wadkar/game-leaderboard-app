import "./App.css";

import Leaderboard from "./components/Leaderboard/Leaderboard";
const App = () => {
  return (
    <div className="App">
      <Leaderboard />
      <div className="stack-info">
        <h3>Tech Stack</h3>
        <span>REACT, NODE, MONGO</span>
      </div>
      <div>
        <h3>Features implemented</h3>
        <ul>
          <li>Realtime leaderboard</li>
          <li>
            Rest API based backend architecture (Endpoints at /api/leaderboard)
          </li>
          <li>
            Editable cells (User can click on any cells to edit, on clicking
            outside would result in value persistence to db)
          </li>
          <li>
            Sorting - Each Column can be sorted by ascending/descending (Click
            on the header column)
          </li>
          <li>
            Pagination - (User can click through next & previous to go back and
            forth)
          </li>
          <li>Deployment of build on Free-tier hosting provider (HEROKU)</li>
        </ul>
        <h3>Features not implemented due to time-limit</h3>
        <ul>
          <li>Search functionality</li>
        </ul>
      </div>
      <div className="stack-info">
        <h3>
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/rushabh-wadkar/"
            rel="noreferrer"
            target="_blank"
          >
            Rushabh Wadkar
          </a>
        </h3>
      </div>
    </div>
  );
};

export default App;
