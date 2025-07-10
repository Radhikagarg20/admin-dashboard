const ctxBar = document.getElementById('barChart');
new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Income',
        data: [12000, 15000, 17000, 14000, 18000, 19000, 22000, 21000],
        backgroundColor: '#00ffcc'
      },
      {
        label: 'Outcome',
        data: [8000, 7000, 9500, 8500, 10000, 11000, 9000, 9500],
        backgroundColor: '#ff4d4d'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#fff'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#fff'
        }
      },
      y: {
        ticks: {
          color: '#fff'
        }
      }
    }
  }
});

const ctxDoughnut = document.getElementById('doughnutChart');
new Chart(ctxDoughnut, {
  type: 'doughnut',
  data: {
    labels: ['Daily Payment', 'Hobby', 'Others'],
    datasets: [{
      data: [55, 20, 25],
      backgroundColor: ['#00ffcc', '#5555ff', '#ffaa00']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#fff'
        }
      }
    }
  }
});
