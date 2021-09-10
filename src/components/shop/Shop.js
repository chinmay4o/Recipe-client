import { useHistory } from "react-router-dom";

export default function Shop() {
  let history = useHistory();
  return (
    <>
      <div className="full">
        <p className="br2" onClick={() => history.goBack()}> Go Back..</p>
        <h1>This is shop page </h1>;
      </div>
    </>
  );
}
