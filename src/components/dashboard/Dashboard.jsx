import React, { useState, useEffect } from "react";
import WeekBarGraph from './WeekBarGraph';
import MonthBarGraph  from "./MonthBarGraph";
import TaskMeter from './TaskMeter';
import TimeSelect from './TimeSelect';
import YearLineChart from "./YearLineChart";
import YearBarGraph from "./YearBarGraph";
import FilterByMonthApi from "../../controllers/FilterByMonthApi";
import FilterByDayApi from "../../controllers/FilterByDayApi";
import FilterAcrossYearsApi from "../../controllers/FilterAcrossYearsApi";
import FilterCurrentWeekApi from "../../controllers/FilterCurrentWeekApi";
import progressApi from "../../controllers/ProgressApi";


function Dashbaord(props) {

    const [status1, setStatus1] = useState(0);
    const [status2, setStatus2] = useState(0);

    const[currentWeekInfo, setCurrentWeekInfo] = useState([]);
    const [yearData, setYearData] = useState(new Array(12).fill(0));
    const [monthData, setMonthData] = useState(new Array(30).fill(0));
    let numberOfYears = new Date().getFullYear() - 1996;
    const [acrossYearsInfo, setAcrossYearsInfo] = useState(new Array(numberOfYears).fill(0));
    const [progress, setProgress] = useState(0);

    const [load, setLoad] = useState(0);

    async function callApi(){
      let temp = await progressApi();
      setProgress(((temp["RESOLVED"]+ temp["VERIFIED"])/temp["ALL"])*100);
      console.log(progress);
    }

    useEffect(() => {
      callApi();
    }, []);

    async function callAcrossYears(fromYear, toYear) {
        let temp = await FilterAcrossYearsApi(fromYear, toYear);
        console.log("temp is:", temp);
        setAcrossYearsInfo(temp);
        setLoad(1);
    }

    async function callCurrentWeek() {
        let temp = await FilterCurrentWeekApi();
        console.log(temp);
        setCurrentWeekInfo(temp);
        setLoad(1);
    }

    // status 1 : 0 -> week 1 -> year 2 -> month 3 -> date 4-> line chart
    function toggleButtons(status1, status2) {

        if(status1==0) {
           return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><WeekBarGraph /></div></div>
        }
        else if(status1==1) {

            for(let year=1996; year<=new Date().getFullYear(); year++) {

                if(year==status2) {
                    return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><YearBarGraph year={year} yearData = {yearData}/></div></div>
                }
            }

        }
        else if(status1==2) {

            switch(status2) {
                case 1: return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><MonthBarGraph monthData = {monthData} numberOfDays = "31"/></div></div>
                case 2: return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><MonthBarGraph monthData = {monthData} numberOfDays = "28" /></div></div>
                case 3: return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><MonthBarGraph monthData = {monthData} numberOfDays = "31"/></div></div>
                case 4: return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><MonthBarGraph monthData = {monthData} numberOfDays = "30" /></div></div>
                case 5: return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><MonthBarGraph monthData = {monthData} numberOfDays = "31" /></div></div>
                case 6: return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><MonthBarGraph monthData = {monthData} numberOfDays = "30" /></div></div>
                case 7: return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><MonthBarGraph monthData = {monthData} numberOfDays = "31" /></div></div>
                case 8: return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><MonthBarGraph monthData = {monthData} numberOfDays = "31" /></div></div>
                case 9: return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><MonthBarGraph monthData = {monthData} numberOfDays = "30" /></div></div>
                case 10: return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><MonthBarGraph monthData = {monthData} numberOfDays = "31" /></div></div>
                case 11: return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><MonthBarGraph monthData = {monthData} numberOfDays = "30" /></div></div>
                case 12: return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><MonthBarGraph monthData = {monthData} numberOfDays = "31" /></div></div>
            }
        }

        /* across years */
        else if (status1==4) {
            return <div className="col-lg-8 col-md-7 col-sm-8"><div className="graphdiv"><YearLineChart  acrossYearsInfo={acrossYearsInfo}/></div></div>
        }


    }

    function swap(value){
        // console.log(value);
        setStatus1(value);
    }



    return (
        <div>
            <div className="row">

                {toggleButtons(status1, status2)}

                <div className="col-lg-4 col-md-4 col-sm-4"><div className="timeselect"><TimeSelect setStatus1={swap} status1={status1} setStatus2={setStatus2} status2= {status2} setYearData={setYearData} setMonthData={setMonthData}/></div></div>

            </div>

            <div className="row">

                <div className="col-lg-8 col-md-8 col-sm-8"><div className="taskmeterdiv" style={{fontSize: 21, textAlign: 'center', color: '#000000', marginTop: '5vh', marginLeft: '5vh', }}>
                <TaskMeter label="Bugs fixed" value={progress}/></div></div>
                {/* <div className="col-lg-4 col-md-4 col-sm-4"><CurrentWeekButton onClick={() => props.setStatus(0)}/></div> */}

                <div className="col-lg-1 col-md-1 col-sm-1"><button className="btn btn-sm generalbtn btn-secondary" onClick={() => setStatus1(0)} >
                    Current Week</button></div>
                  <div className="col-lg-1 col-md-1 col-sm-1"><button className="btn btn-sm generalbtn btn-secondary" onClick={() => {setStatus1(4); callAcrossYears(1996,new Date().getFullYear());}} >
                    Across years</button></div>



            </div>


    </div>
  );
}

export default Dashbaord;
