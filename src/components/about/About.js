import {useHistory} from "react-router-dom";

function About() {
    const history = useHistory();
  
    return (
      <div className="full">
        <p className="br2" onClick={() => history.goBack()}>
          {" "}
          Go Back..
        </p>
        <h1>this is about page </h1>{" "}
      </div>
    );
  }

  export default About;