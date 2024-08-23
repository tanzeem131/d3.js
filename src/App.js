import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./App.css";

function App() {
  const [data] = useState([25, 5, 35, 15, 90, 20]);
  const svgRef = useRef();
  useEffect(() => {
    const w = 400;
    const h = 100;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("background", "#d3d3d3")
      .style("margin-top", "50");
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "black");
  }, [data]);
  return (
    <div className="App">
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default App;
