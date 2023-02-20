import React from "react";
import "./tabular.css";

export default function tabular(props) {
  const data = props.results.map((item, index) => {
    return (
      <table key={index}>
        <thead>
          <tr>
            <td colSpan="2" className="bold">
              {item.name} Details
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bold">NAME</td>
            <td>{item.name}</td>
          </tr>
          <tr>
            <td className="bold">AGE</td>
            <td>{item.age}</td>
          </tr>
          <tr>
            <td className="bold">E-mail</td>
            <td>{item.email}</td>
          </tr>
          <tr>
            <td className="bold">Phone</td>
            <td>{item.Phone_Number}</td>
          </tr>
          <tr>
            <td className="bold">Department</td>
            <td>{item.dept}</td>
          </tr>
          <tr>
            <td className="bold">status</td>
            <td className={item.status === "Active" ? "active" : "inactive"}>
              {item.status}
            </td>
          </tr>
          <tr>
            <td className="bold">Employee ID</td>
            <td>{item.Emp_id}</td>
          </tr>
        </tbody>
      </table>
    );
  });
  return (
    <div className="outerdiv">
      <div className="innerdiv">
        <h2 className="close" onClick={() => props.close()}>
          &#10060;
        </h2>
        {data}
      </div>
    </div>
  );
}
