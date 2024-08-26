import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import MockData from "../utils/MockData.json";

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

const LineChart = () => {
  const { data } = MockData.business_discovery.media;
  const [likeData] = useState(data.map((item) => item.like_count));
  const [commentData] = useState(data.map((item) => item.comments_count));

  const maxValue = Math.max(...likeData, ...commentData);
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    if (!dimensions) return;

    const xScale = d3
      .scaleLinear()
      .domain([0, likeData.length])
      .range([0, dimensions.width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 1.3 * maxValue])
      .range([dimensions.height, 0]);

    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    const xAxis = d3.axisBottom(xScale).ticks(likeData.length);
    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height}px)`)
      .call(xAxis);

    svg.select(".x-axis").selectAll("text").style("fill", "white");
    svg.select(".x-axis").select("path").style("stroke", "white");
    svg.select(".x-axis").selectAll("line").style("stroke", "white");

    const yAxis = d3.axisLeft(yScale).ticks(8);
    svg.select(".y-axis").call(yAxis);

    svg.select(".y-axis").selectAll("text").style("fill", "white");
    svg.select(".y-axis").select("path").style("stroke", "white");
    svg.select(".y-axis").selectAll("line").style("stroke", "white");

    svg
      .selectAll(".line.like")
      .data([likeData])
      .join("path")
      .attr("class", "line like")
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2);

    svg
      .selectAll(".line.comment")
      .data([commentData])
      .join("path")
      .attr("class", "line comment")
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2);

    svg
      .append("text")
      .attr("x", dimensions.width / 2)
      .attr("y", dimensions.height + 40)
      .attr("fill", "white")
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .style("text-anchor", "middle")
      .text("Posts");

    svg
      .append("text")
      .attr("x", -dimensions.height / 2)
      .attr("y", -60)
      .attr("fill", "white")
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .style("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Counts");

    svg
      .append("text")
      .attr("x", dimensions.width)
      .attr("y", 20)
      .attr("fill", "blue")
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .text("Likes");

    svg
      .append("text")
      .attr("x", dimensions.width)
      .attr("y", 0)
      .attr("fill", "red")
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .text("Comments");
  }, [likeData, commentData, maxValue, dimensions]);

  return (
    <div ref={wrapperRef} className="w-full h-full">
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};

export default LineChart;
