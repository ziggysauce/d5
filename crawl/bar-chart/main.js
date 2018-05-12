const run = () => {
  const svgWidth = 500;
  const svgHeight = 300;
  const svg = d3.select('svg')
      .attr('width', svgWidth)                  // set width of chart
      .attr('height', svgHeight)                // set height of chart
      .attr('class', 'bar-chart');              // add class to chart

  const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
  const barPadding = 5;
  const barWidth = (svgWidth / dataset.length);
  const barChart = svg.selectAll('rect')        // select all rect elements
    .data(dataset)                              // chain dataset
    .enter()                                    // looks for matches between DOM and data
    .append('rect')                             // adds an element for each unmatched data item
    .attr('y', d => svgHeight - d)            // set y-coordinate (top) of data item
    .attr('height', d => d)                   // stretch to bottom of chart
    .attr('width', barWidth - barPadding)       // set width
    .attr('transform', (d, i) => {              // set x-coordinates of data items
      let x = barWidth * i;
      return `translate(${x})`;                 // push items horizontally based on index
    });

  const labels = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .attr('class', 'label')
    .text(d => d)
    .attr('x', (barWidth - barPadding) / 2)
    .attr('y', d => svgHeight - d - 5)
    .attr('transform', (d, i) => {              
      let x = barWidth * i;
      return `translate(${x})`;                 
    });
}

window.app = { run };
window.app.run();