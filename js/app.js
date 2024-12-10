const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".navbar");
const main = document.querySelector("main");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  navbar.classList.toggle("shifted");
  main.classList.toggle("shifted");
});

// Bar Chart
const barCtx = document.getElementById("groupedBarChart").getContext("2d");
new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "USA",
        data: [12, 19, 3, 17, 28, 24, 7],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
      },
      {
        label: "UK",
        data: [22, 14, 8, 12, 18, 21, 10],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "AU",
        data: [9, 21, 13, 6, 11, 9, 14],
        backgroundColor: "rgba(54, 162, 235, 0.4)",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: false,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
});

const lineCtx = document.getElementById("lineChart").getContext("2d");
new Chart(lineCtx, {
  type: "line",
  data: {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 17, 28, 24, 7],
        borderColor: "rgba(54, 162, 235, 0.8)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4, // Smooth curve
        fill: true, // Area under the line
        pointRadius: 5, // Size of points
      },
      {
        label: "Revenue",
        data: [22, 14, 8, 12, 18, 21, 10],
        borderColor: "rgba(75, 192, 192, 0.8)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 5,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
});



