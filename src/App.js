 /* eslint-disable */
import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/nav/Nav";
import Shop from "./components/shop/Shop";
import AddNew from "./components/AddNew/AddNew";
import About from "./components/about/About";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { Fullrecipe } from "./Fullrecipe";

export default function App() {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [flag, setflag] = useState(true);

  // feting api
  async function getD() {
    // return fetch("https://60bc7d4ab8ab37001759f265.mockapi.io/recipes")
    //   .then((response) => response.json())
    //   .then((data1) => setData(data1));
    const response = await fetch("https://recipe-app4o.herokuapp.com/all",{
      type: "GET",
      header: {Accept: "application/json"}
    });

    const data1  = await response.json();
    console.log(data1);
    setData(data1);
  }

  // useeffect
  useEffect(() => {
    getD();
  }, []);

  // main data mapping
  function printAll(ele, indexA) {
    if (ele.title.toLowerCase().includes(search.toLowerCase())) {
      return (
        <div key={indexA} className="main">
          <div key={ele._id} className="main2">
            <h3> {ele.title} </h3>
            <img src={ele.img} alt="" />

            <Link to={`/recipes/${ele._id}`}>
              <button className="btn1" onClick={() => setflag(!flag)}>
                <p className="btn-text">Show Ingredients</p>
              </button>
            </Link>
          </div>
        </div>
      );
    }
  }

  return (
    <>
      <Router>
        {/* nav bar */}
        <Nav setsearch={setsearch} />
        <Switch>
          <Route exact path="/">
            <div className="home">
              <div className="body1">{data.map(printAll)}</div>
            </div>
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/addnew">
            <AddNew getD={getD}/>
          </Route>

          <Route path="/recipes/:id">
            <Fullrecipe data={data} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

// delete component
// function Delete1({ index, data, setData , getD }) {
//   const deleteMe = (index) => {
//     let newArr = data;
//     newArr.splice(index, 1);
//     console.log(newArr);
//     return setData(newArr);
//   };
//   getD();
//   return (
//     <>
//       <p className="btn2" onClick={(e) => deleteMe(index)}>
//         <span class="material-icons del1">delete</span>
//       </p>
//     </>
//   );
// }

