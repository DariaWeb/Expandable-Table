import React, { useState, useRef } from "react";
import ExpandableRow from "./ExpandableRow";
import { PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";

export default function TableRow({ score, index }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpander = e => {
    if (!expanded) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  };

  const { symbol, name } = score.target.gene_info;
  const { id } = score.target;
  const { overall } = score.association_score;
  return [
    <tr key={index}>
      <td>
        {!expanded ? (
          <PlusCircleTwoTone onClick={toggleExpander} />
        ) : (
          <MinusCircleTwoTone onClick={toggleExpander} />
        )}
      </td>
      <td className="uk-text-nowrap">{symbol}</td>
      <td className="uk-text-nowrap">{id}</td>
      <td className="uk-text-nowrap">{name}</td>
      <td className="uk-text-nowrap">{overall}</td>
    </tr>,
    expanded && <ExpandableRow score={score} />
  ];
}
