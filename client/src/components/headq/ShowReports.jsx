import React from 'react'
import BarChartBox from "../vizualization/BarChartbox";
import AreaChartBox from "../vizualization/AreaChartBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit
} from "./data";

function ShowReports() {
  return (<>
    <div className="box box9">
      <AreaChartBox />
    </div>
    <div className="box box9">
      <BarChartBox {...barChartBoxRevenue} />
    </div>
    <div className="box box9">
      <BarChartBox {...barChartBoxVisit} />
    </div>
  </>
  )
}

export default ShowReports
