import { BarElement, CategoryScale, Chart, LinearScale } from "chart.js";
import { createRoot } from "react-dom/client";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement);

createRoot(document.getElementById("root")!).render(
  <>
    <h1>Hello, Chart.js</h1>
    <Bar data={{ labels: ["A", "B", "C"], datasets: [{ label: "Sales", data: [3, 7, 4] }] }} />
  </>,
);
