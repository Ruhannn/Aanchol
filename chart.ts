const config = {
  type: "horizontalBar",
  data: {
    labels: ["National", "Urban", "Rural"],
    datasets: [
      {
        label: "Fully immunized",
        backgroundColor: "#7A2233",
        data: [81.6, 79, 85],
      }, {
        label: "Not fully protected (Aanchol's target)",
        backgroundColor: "#C28A1F",
        data: [18.4, 21, 15],
      }
    ],
  },
  options: {
    layout: {
      padding: {
        top: 6,
        right: 22,
        bottom: 2,
        left: 2,
      },
    },
    legend: {
      position: "bottom",
      labels: {
        fontSize: 13,
        fontColor: "#2A1F1C",
        boxWidth: 14,
      },
    },
    title: {
      display: true,
      text: "The last-mile coverage gap  (% of children fully immunized)",
      fontSize: 15,
      fontColor: "#4A1420",
      padding: 12,
    },
    scales: {
      xAxes: [
        {
          stacked: true,
          gridLines: {
            color: "#E8DBCC",
          },
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            fontColor: "#7A6F68",
          },
        }
      ],
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
          },
          ticks: {
            fontColor: "#2A1F1C",
            fontSize: 14,
          },
        }
      ],
    },
    plugins: {
      datalabels: {
        color: "#ffffff",
        font: {
          weight: "bold",
          size: 13,
        },
      },
    },
  },
}

const url = "https://quickchart.io/chart?width=760&amp;height=360&amp;devicePixelRatio=2&amp;backgroundColor=white&amp;version=2&amp&c=" + encodeURIComponent(JSON.stringify(config));

console.log(url);
