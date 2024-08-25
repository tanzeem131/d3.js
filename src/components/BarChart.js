import React from "react";
import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

export const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);
  return dimensions;
};

const BarChart = ({ data = [] }) => {
  const maxValue = data.length > 0 ? Math.max(...data) : 0;
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    if (!dimensions) return;

    const xScale = d3
      .scaleBand()
      .domain(data.map((value, index) => index + 1))
      .range([0, dimensions.width])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, 1.1 * maxValue])
      .range([dimensions.height, 0]);

    const colorScale = d3
      .scaleLinear()
      .domain([0, 0.5 * maxValue, maxValue])
      .range(["green", "orange", "red"])
      .clamp(true);

    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height}px)`)
      .call(xAxis);

    const yAxis = d3.axisLeft(yScale).ticks(10);

    svg.select(".y-axis").style("transform", `translateX(0px)`).call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index + 1))
      .attr("y", -dimensions.height)
      .attr("width", xScale.bandwidth())
      .on("mouseenter", function (event, value) {
        const index = svg.selectAll(".bar").nodes().indexOf(this);
        svg
          .selectAll(".tooltip")
          .data([value])
          .join((enter) => enter.append("text").attr("y", yScale(value)))
          .attr("class", "tooltip")
          .text(value)
          .attr("x", xScale(index + 1) + xScale.bandwidth() / 2)
          .attr("text-anchor", "middle")
          .transition()
          .attr("y", yScale(value) - 8)
          .attr("opacity", 1);
      })
      .on("mouseleave", () => svg.select(".tooltip").remove())
      .transition()
      .attr("fill", colorScale)
      .attr("height", (value) => dimensions.height - yScale(value));
  }, [data, maxValue, dimensions]);
  return (
    <div ref={wrapperRef} className="w-fit h-fit">
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};

export default BarChart;
