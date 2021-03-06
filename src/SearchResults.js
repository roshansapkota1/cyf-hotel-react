import React, { useState } from "react";
import SearchRows from "./SearchRows";
import CustomerProfile from "./CustomerProfile";
const SearchResults = props => {
  const Heading = [
    "Id",
    "Title",
    "First Name",
    "Surname",
    "E-mail",
    "Room id",
    "Check In",
    "Check Out",
    "Total Nights",
    "Buttons"
  ];

  const [customerId, setCustomerId] = useState("");

  const customerIdSettersSetter = id => {
    setCustomerId(id);
  };

  const [className, setClassName] = "";

  const classNameChangerFunction = any => {
    if (any === "No") {
      setClassName(any);
    } else {
      setClassName("");
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {Heading.map((any, index) => (
              <td key={index}>{any}</td>
            ))}
          </tr>
        </thead>

        <tbody>
          {props.results.map((data, index) => (
            <SearchRows
              key={index}
              data={data}
              customerId={customerIdSettersSetter}
            />
          ))}
        </tbody>
      </table>
      {customerId && !className && (
        <CustomerProfile
          id={customerId}
          classNameChangerFunction={classNameChangerFunction}
        />
      )}
    </div>
  );
};

export default SearchResults;
