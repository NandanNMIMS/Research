var options = {
  chart: {
      type: 'bar',
      height: '100%', // Set the height to 100%
      toolbar: {
          show: false // Hide the toolbar
      }
  },
  series: [{
      name: "Student",
      data: [30, 65, 75, 119]
  }],
  xaxis: {
      categories: [2019, 2020, 2021, 2022]
  },
  responsive: [{
      breakpoint: 480, // Breakpoint for small screens
      options: {
          chart: {
              height: 'auto' // Set height to auto for small screens
          }
      }
  }]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


  var options = {
    series: [30,65,75,119],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: [2019, 2020, 2021, 2022],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#pie"), options);
  chart.render();


// last chart
var options = {
  chart: {
      type: 'bar',
      height: '100%',
      toolbar: {
          show: false
      },
  },
  series: [{
      name: "Student",
      data: [30, 65, 75, 119],
  }],
  xaxis: {
      categories: [2019, 2020, 2021, 2022],
  },
  plotOptions: {
      bar: {
          dataLabels: {
              position: 'top', // Display data labels at the top of the bars
          },
      }
  },
  responsive: [{
      breakpoint: 480,
      options: {
          chart: {
              height: 'auto',
          }
      }
  }]
};

var chart = new ApexCharts(document.querySelector("#line"), options);
chart.render();

// Add hover effect
