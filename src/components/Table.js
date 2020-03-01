import React, { Fragment } from "react";
import TableRow from "./TableRow";
import { headerTitle } from "../constants";

export default function Table({ scores }) {
  
  const header = headerTitle.map((item, index) => {
    return <th key={index}>{item}</th>;
  });

  return (
    <Fragment>
      <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
        <thead>
          <tr>
           {header}
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <TableRow key={index} score={score} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
