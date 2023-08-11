import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import {
  POKEMON_STATS_COLORS,
  POKEMON_STATS_PASTEL_COLORS,
} from "../../utils/constants";
import { capitalizer } from "../../helpers/capitalizer";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

type Props = {
  values: Array<any>;
};

export const StatChart = ({ values }: Props) => {
  const names = values?.map((item: any) => {
    return capitalizer(item.stat?.name);
  });

  const stats = values?.map((item: any) => {
    return item.base_stat;
  });

  const dataChart = {
    labels: names,
    datasets: [
      {
        //label: "# of stat",
        data: stats,
        backgroundColor: POKEMON_STATS_PASTEL_COLORS,
        borderColor: POKEMON_STATS_COLORS,
        hoverBackgroundColor: POKEMON_STATS_COLORS,
        borderWidth: 1,
      },
    ],
  };

  const myOptions = {
    indexAxis: "y" as const,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
      },
      title: {
        display: false,
        text: "Chart.js",
      },
    },
  };

  return (
    <section style={{ paddingBottom: "80px" }}>
      <PolarArea data={dataChart} options={myOptions} />
    </section>
  );
};
