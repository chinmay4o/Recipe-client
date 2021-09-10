// import "./App.css";

import { useHistory } from "react-router-dom";
import "./nav.css";

export default function Nav({ setsearch }) {
  const history = useHistory();
  function search12(e) {
    console.log(e.target.value);

    setsearch(e.target.value);
  }
  return (
    <div className="nav">
      <h1 className="logo" onClick={() => history.push("/")}>
        Daily Recipes
      </h1>

      <div className="search">
        <input
          type="search"
          onChange={search12}
          placeholder="Search Your Favorite Recipe..."
        />
      </div>
    </div>
  );
}
