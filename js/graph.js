var options = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'bar',
      data: [30,65,75,119]
    }],
    xaxis: {
      categories: [2019, 2020, 2021, 2022]
    }
  }
  
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
