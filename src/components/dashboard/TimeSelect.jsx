import React, { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import YearLineChart from "./YearLineChart";
import FilterByMonthApi from "../../controllers/FilterByMonthApi";
import FilterByDayApi from "../../controllers/FilterByDayApi";
import FilterAcrossYearsApi from "../../controllers/FilterAcrossYearsApi";

function TimeSelect(props) {

    let years = []
    const [Year, changeYear] = useState('Year')
    const [Month, changeMonth] = useState('Month')

    const [load, setLoad] = useState(0);

    for(let year=2000; year<=2022; year++) {
        years.push(
            <button onClick={(e) => { props.setStatus1(1); props.setStatus2(year); changeYear(e.target.value); callMonth(year); }}
            class="dropdown-item" type="button" value={year}>{year}</button>
        )
    }

    const [monthsInfo, setMonthsInfo] = useState([]);
    const [daysInfo, setDaysInfo] = useState([]);


    async function callMonth(year) {
        let temp = await FilterByMonthApi(year);
        console.log("temp is:", temp);
        setMonthsInfo(temp);
        setLoad(1);
      }

    async function callDay(month) {
        let temp = await FilterByDayApi(month);
        console.log("temp is:", temp);
        setDaysInfo(temp);
        setLoad(1);
    }



    return (
        <div>

        <div className="row gx-0">
            <div className="col yearcol">
                <div class="dropdown">
                    <button className="btn generalbtn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false" >{Year}</button>
                    <div class="dropdown-menu dropdown-menu-end">
                        {years}
                    </div>
                </div>
            </div>


            <div className="col monthcol">
                <div class="dropdown">
                    <button className="btn generalbtn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">{Month}</button>
                    <div class="dropdown-menu dropdown-menu-end">
                        <button  onClick={(e) => {
                            props.setStatus1(2);
                            props.setStatus2(1);
                            changeMonth(e.target.value);
                            callDay(this.id);

                        }}
                            class="dropdown-item" value="Jan" type="button" id = "jan">Jan</button>
                        <button onClick={(e) => {
                            props.setStatus1(2);
                            props.setStatus2(2);
                            changeMonth(e.target.value);
                            callDay(this.id);
                        }}
                            class="dropdown-item" value = "Feb" type="button" id = "feb">Feb</button>
                        <button onClick={(e) => {
                            props.setStatus1(2);
                            props.setStatus2(3);
                            changeMonth(e.target.value);
                            callDay(this.id);
                        }}
                            class="dropdown-item" value="Mar" type="button" id = "mar">Mar</button>
                        <button onClick={(e) => {
                            props.setStatus1(2);
                            props.setStatus2(4);
                            changeMonth(e.target.value);
                            callDay(this.id);
                        }}
                            class="dropdown-item" value = "Apr" type="button" id = "apr">Apr</button>
                        <button onClick={(e) => {
                            props.setStatus1(2);
                            props.setStatus2(5);
                            changeMonth(e.target.value);
                            callDay(this.id);
                        }}
                            class="dropdown-item" value = "May" type="button" id = "may">May</button>
                        <button onClick={(e) => {
                            props.setStatus1(2);
                            props.setStatus2(6);
                            changeMonth(e.target.value);
                            callDay(this.id);
                        }}
                            class="dropdown-item" value = "Jun" type="button" id = "jun">Jun</button>
                        <button onClick={(e) => {
                            props.setStatus1(2);
                            props.setStatus2(7);
                            changeMonth(e.target.value);
                            callDay(this.id);
                        }}
                            class="dropdown-item" value = "Jul" type="button" id = "jul">Jul</button>
                        <button onClick={(e) => {
                            props.setStatus1(2);
                            props.setStatus2(8);
                            changeMonth(e.target.value);
                            callDay(this.id);
                        }}
                            class="dropdown-item" value = "Aug" type="button" id = "aug">Aug</button>
                        <button onClick={(e) => {
                            props.setStatus1(2);
                            props.setStatus2(9);
                            changeMonth(e.target.value);
                            callDay(this.id);
                        }}
                            class="dropdown-item" value = "Sep" type="button" id = "sep">Sep</button>
                        <button onClick={(e) => {
                            props.setStatus1(2);
                            props.setStatus2(10);
                            changeMonth(e.target.value);
                            callDay(this.id);
                        }}
                            class="dropdown-item" value = "Oct" type="button" id = "oct">Oct</button>
                        <button onClick={(e) => {
                            props.setStatus1(2);
                            props.setStatus2(11);
                            changeMonth(e.target.value);
                            callDay(this.id);
                        }}
                            class="dropdown-item" value = "Nov" type="button" id = "nov">Nov</button>
                        <button onClick={(e) => {
                            props.setStatus1(2);
                            props.setStatus2(12);
                            changeMonth(e.target.value);
                            callDay(this.id);
                        }}
                            class="dropdown-item" value = "Dec" type="button" id = "dec">Dec</button>
                    </div>
                </div>
            </div>

            <div className="col datecol">
                <div class="dropdown">
                    <button className="btn generalbtn btn-secondary dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Date</button>
                    <div class="dropdown-menu dropdown-menu-end">
                        {/* <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button> */}
                    </div>
                </div>
            </div>

        </div>

        </div>
      );
}

export default TimeSelect;
