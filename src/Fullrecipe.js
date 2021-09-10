import {
  useParams,
  useHistory
} from "react-router-dom";

export function Fullrecipe({ data }) {
  let { id } = useParams();
  const history = useHistory();
  return (
    <>
      {data
        .filter((ele) => ele._id === id)
        .map((ele, index1) => {
          {console.log(ele);}
          return (
            <div key={index1} className="full">
              <img
                src={ele.img}
                alt="picture"
                style={{
                  boxShadow: "3px 3px 3px 3px rgba(255, 255, 255, 0.5)",
                }} />
              <h1 style={{ margin: "20px 0" }}>{ele.title} </h1>
              <ul>
                {ele.ingredients.map((ele) => (
                  <li>{ele}</li>
                ))}
              </ul>

              <p
                className="br1"
                onClick={(e) => {
                  history.goBack();
                }}
              >
                Go back...
              </p>
            </div>
          );
        })}
    </>
  );
}
