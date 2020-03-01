import React from "react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

export default function ExpandableRow({ score }) {
  
  const {datatypes} = score.association_score
  const data = Object.entries(datatypes).map(([key, value]) => {
    return {
      x: key,
      y: value
    }
   })
  return (
    <tr className="expandable" key="tr-expander">
      <td className="uk-background-muted" colSpan={6}>
        <div className="inner uk-grid">
          <div className="uk-width-3-4">
          <div className="chart-container">
          <h3>Association Score vs Data Type</h3>
            <RadarChart
              cx={250}
              cy={200}
              outerRadius={150}
              width={550}
              height={380}
              data={data}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey='x'/>
              <PolarRadiusAxis />
              <Radar
                dataKey="y"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
