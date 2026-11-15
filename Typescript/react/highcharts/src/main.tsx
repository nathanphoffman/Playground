import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <HighchartsReact
    highcharts={Highcharts}
    options={{ title: { text: "Hello, Highcharts" }, series: [{ type: "line", data: [1, 3, 2, 4] }] }}
  />,
);
