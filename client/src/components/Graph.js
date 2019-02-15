import React from "react";
import Plot from "react-plotly.js";



const Graph = () => {
  return (
    <div>
      <Plot
        data={[
          {
            x: ["2017-01-01", "2017-01-10", "2017-01-20"],
            y: [1, 50, 75],
            text: ["Text A", "Text B", "Text C"],
            type: "scatter",
            mode: "lines+points",
            marker: { color: "red" },
            fixedrange: true
          }
        ]}
        layout={{ title: "A Fancy Plot" }}
      />
    </div>
  );
};

export default Graph;
