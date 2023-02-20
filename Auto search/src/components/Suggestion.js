import React from "react";
import "./Suggestion.css";
export default function Suggestions(props) {
  const sugg = props.results.map((data, index) => {
    return (
      <div
        key={index}
        className="empdata"
        onClick={() => props.update(data.name, data.Emp_id)}
      >
        <span className="large">{data.name}</span>

        <span className="right large">{data.Emp_id}</span>
        <br />
        <span className="small">{data.dept}</span>
        <span className="right small">Emp-ID</span>
        <hr />
      </div>
    );
  });
  return <div className="suggestion">{sugg}</div>;
}
