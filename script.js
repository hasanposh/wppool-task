const TOP_OFFSET = 78;
const navbar = document.getElementById("navbar");
const logo1 = document.getElementById("logo1");
const logo2 = document.getElementById("logo2");
const share = document.getElementById("share");
const menu = document.getElementById("menu");
const shareBtn = document.getElementById("shareBtn");
const reportBtn = document.getElementById("reportBtn");
const menuContainer = document.getElementById("menu-container");
const menuCross = document.getElementById("menu-cross");

window.addEventListener("scroll", () => {
  if (window.scrollY >= TOP_OFFSET) {
    navbar.classList.add("bg-[#F3F3F3]", "text-black", "shadow-custom");
    navbar.classList.remove("bg-opacity-0");
    logo1.classList.add("hidden");
    logo2.classList.remove("hidden");
    share.classList.add("filter-invert-100");
    menu.classList.add("filter-invert-100");
    shareBtn.classList.add("border-[#AFCD80]");
    reportBtn.classList.add("text-black", "border-[#115CD9]");
    reportBtn.classList.remove("text-white");
  } else {
    navbar.classList.remove("bg-[#F3F3F3]", "shadow-custom");
    navbar.classList.add("bg-opacity-0");
    logo1.classList.remove("hidden");
    logo2.classList.add("hidden");
    share.classList.remove("filter-invert-100");
    menu.classList.remove("filter-invert-100");
    shareBtn.classList.remove("border-[#AFCD80]");
    reportBtn.classList.remove("border-[#115CD9]");
    reportBtn.classList.add("text-white");
  }
});

menu.addEventListener("click", () => {
  menuContainer.classList.toggle("hidden");
  setTimeout(() => {
    menuContainer.classList.toggle("active");
  }, 10); // small delay to ensure transition effect
});

menuCross.addEventListener("click", () => {
  menuContainer.classList.toggle("active");
  setTimeout(() => {
    menuContainer.classList.toggle("hidden");
  }, 300); // match the transition duration
});

// Chart.js initialization
// document.addEventListener("DOMContentLoaded", function () {
//   const config = {
//     type: "line",
//     data: {
//       labels: ["", "February", "March", "April", "May", "June", "July"], // Sample data
//       datasets: [
//         {
//           label: "WPPOOL",
//           data: [28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90], // Sample data
//           backgroundColor: "#FC714D",
//           borderColor: "#FC714D",
//           yAxisID: "y1",
//         },
//         {
//           label: "Google",
//           data: [65, 59, 80, 81, 56, 55, 40,32, 72, 50, 40, 66, 55, 60,32, 72, 50, 40, 66, 55, 60], // Sample data
//           backgroundColor: "#615DE3",
//           borderColor: "#615DE3",
//           yAxisID: "y",
//         },
//         {
//           label: "Microsoft",
//           data: [32, 72, 50, 40, 66, 55, 60,32, 72, 50, 40, 66, 55, 60,32, 72, 50, 40, 66, 55, 60], // Sample data
//           backgroundColor: "#AFCD80",
//           borderColor: "#AFCD80",
//           yAxisID: "y1",
//         },
//         {
//           label: "Twitter",
//           data: [45, 68, 78, 56, 80, 45, 70,45, 68, 78, 56, 80, 45, 70,45, 68, 78, 56, 80, 45, 70], // Sample data
//           backgroundColor: "#6F34A1",
//           borderColor: "#6F34A1",
//           yAxisID: "y",
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       interaction: {
//         mode: "index",
//         intersect: false,
//       },
//       plugins: {
//         title: {
//           display: true,
          
//         },
//         legend: {
//           position: "bottom",
//           labels: {
//             boxWidth: 20,
//             padding: 15,
//             color: "#000000", // Color of the label text
//           },
//         },
//       },
//       tooltip: {
//         backgroundColor: "#FFFFFF", // White background
//         borderColor: "#000000", // Black border
//         borderWidth: 1, // Border width
//         bodyColor: "#000000", // Black text color
//         callbacks: {
//           label: function (context) {
//             console.log(context); // Debugging line
//             let label = context.dataset.label || '';
//             if (label) {
//               label += ': ';
//             }
//             if (context.parsed.y !== null) {
//               label += context.parsed.y + "%";
//             }
//             return label;
//           },
//         },
//       },
      
//       scales: {
//         y: {
//           type: "linear",
//           display: true,
//           position: "left",
//           min: -10, // Minimum value for y-axis
//           max: 100, // Maximum value for y-axis
//           ticks: {
//             callback: function(value) {
//               return value + "%";
//             }
//           },
//         },
//         y1: {
//           type: "linear",
//           display: false,
//           position: "right",
//           grid: {
//             drawOnChartArea: false,
//           },
//         },
//       },
//     },
//   };

//   const ctx = document.getElementById("myChart").getContext("2d");
//   new Chart(ctx, config);
// });
document.addEventListener("DOMContentLoaded", function () {
  const config = {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"], // Sample data
      datasets: [
        {
          label: "WPPOOL", // Label for this dataset
          data: [28, 48, 40, 19, 86, 27, 90], // Sample data
          backgroundColor: "#FC714D",
          borderColor: "#FC714D",
          yAxisID: "y1",
        },
        {
          label: "Google", // Label for this dataset
          data: [65, 59, 80, 81, 56, 55, 40], // Sample data
          backgroundColor: "#615DE3",
          borderColor: "#615DE3",
          yAxisID: "y",
        },
        {
          label: "Microsoft", // Label for this dataset
          data: [32, 72, 50, 40, 66, 55, 60], // Sample data
          backgroundColor: "#AFCD80",
          borderColor: "#AFCD80",
          yAxisID: "y1",
        },
        {
          label: "Apple", // Label for this dataset
          data: [45, 68, 78, 56, 80, 45, 70], // Sample data
          backgroundColor: "#6F34A1",
          borderColor: "#6F34A1",
          yAxisID: "y",
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: {
        title: {
          display: true,
          text: "Chart.js Line Chart with Four Datasets",
        },
        legend: {
          position: "bottom", // Legend positioned at the bottom of the chart
          labels: {
            boxWidth: 20, // Width of the box next to each label
            padding: 15, // Padding around each label
            color: "#000000", // Color of the label text
          },
        },
        tooltip: {
          backgroundColor: "#FFFFFF", // White background
          borderColor: "#000000", // Black border
          borderWidth: 1, // Border width
          bodyColor: "#000000", // Black text color
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y + "%";
              }
              return label;
            },
          },
        },
      },
      scales: {
        y: {
          type: "linear",
          display: true,
          position: "left",
          min: -10, // Minimum value for y-axis
          max: 100, // Maximum value for y-axis
          ticks: {
            callback: function(value) {
              return value + "%";
            }
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  };

  const ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, config);
});

// table 
    const tableRow = document.getElementById("myTable");

    // Fetch data from API
    fetch('/companyInfo.json')
    .then(response => response.json())
    .then(data => {
        // Reference to tbody element
        const tablebody = document.getElementById("tablebody");
        
        // Add data to table
        data.forEach(item => {
            const row = document.createElement("tr");
            Object.values(item).forEach(value => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });
            tablebody.appendChild(row);
        });
    });