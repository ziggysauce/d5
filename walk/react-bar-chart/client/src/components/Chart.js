import React, { Component } from 'react';
import * as d3 from 'd3';

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      dataset: [80, 100, 56, 120, 180, 30, 40, 120, 160],
    };
  }

  visualize() {
    const { dataset } = this.state;
    const svgWidth = 500;
    const svgHeight = 300;
    const barPadding = 5;
    const barWidth = (svgWidth / dataset.length);
    const svg = d3.select('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .attr('class', 'bar-chart');

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('y', d => svgHeight - d)
      .attr('height', d => d)
      .attr('width', barWidth - barPadding)
      .attr('transform', (d, i) => {
        const x = barWidth * i;
        return `translate(${x})`;
      });

    svg.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .attr('class', 'label')
      .text(d => d)
      .attr('x', (barWidth - barPadding) / 2)
      .attr('y', d => svgHeight - d - 5)
      .attr('transform', (d, i) => {
        const x = barWidth * i;
        return `translate(${x})`;
      });
  }

  componentDidMount() {
    this.visualize();
  }

  render() {
    console.log(this.state.dataset);

    return (
      <div>
        <h2>Chart info here!</h2>
        <svg>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(105)">
              <stop className="bar-top" offset="0%"/>
              <stop className="bar-bottom" offset="100%"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }
}

export default Chart;
