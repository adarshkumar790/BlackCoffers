import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data, xVariable, yVariable, yLabel }) => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', 600)
            .attr('height', 500)
            .style('overflow', 'none');

        const xScale = d3.scaleBand()
            .domain(data.map((d) => d[xVariable]))
            .range([0, 800])
            .padding(0.3);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => d[yVariable])])
            .range([400, 0]);

        svg.selectAll('*').remove();

        svg.append('g')
            .call(d3.axisBottom(xScale).tickSize(0))
            .attr('transform', 'translate(0, 400)')
            .selectAll("text")
            .attr("transform", "rotate(-45)")
            .style("text-anchor", "end");

        svg.append('g').call(d3.axisLeft(yScale));

        svg.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d) => xScale(d[xVariable]))
            .attr('y', (d) => yScale(d[yVariable]))
            .attr('width', xScale.bandwidth())
            .attr('height', (d) => 400 - yScale(d[yVariable]))
            .attr('fill', 'green');

    }, [data, xVariable, yVariable]);

    return (
        <div>
            <h2>{yLabel} Bar Chart</h2>
            <svg ref={svgRef}></svg>
        </div>
    );
};

export default BarChart;
