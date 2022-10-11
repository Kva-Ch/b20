import React, {useState, useEffect} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import YearLineChart from "./YearLineChart";
import FilterByMonthApi from "../../controllers/FilterByMonthApi";
import FilterByDayApi from "../../controllers/FilterByDayApi";
import FilterAcrossYearsApi from "../../controllers/FilterAcrossYearsApi";
import FilterByDateApi from "../../controllers/FilterByDateApi";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import onClickOutside from 'react-onclickoutside'
import {useDetectClickOutside} from 'react-detect-click-outside';

function TimeSelect(props) {

  let years = []
  const [Year, changeYear] = useState('Year');
  const [Month, changeMonth] = useState('Month');
  const [date, setDate] = useState(new Date());

  const [load, setLoad] = useState(0);

  const [showCalendar, setShowCalendar] = useState(false);
  const [clickCalendar, setClickCalendar] = useState(0);

  const [monthsInfo, setMonthsInfo] = useState([]);
  const [daysInfo, setDaysInfo] = useState([]);
  const monthMap = {
    "Jan": 1,
    "Feb": 2,
    "Mar": 3,
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8,
    "Sep": 9,
    "Oct": 10,
    "Nov": 11,
    "Dec": 12
  }

  const locale = 'fr-CA';

  const handleChange = value => {
    setDate(value);
    setShowCalendar(false);
  };

  for (let year = 1996; year <= new Date().getFullYear(); year++) {
    years.push(<button onClick={(e) => {
        props.setStatus1(1);
        props.setStatus2(year);
        changeYear(e.target.value);
        callYear(year);
      }} class="dropdown-item" type="button" value={year}>{year}</button>)
  }

  async function callDateApi(){
    const dd = String(date.getDate()).padStart(2, '0');;
    const mm = String(date.getMonth()+1).padStart(2, '0');;
    const yyyy = String(date.getFullYear());
    const finalDate = yyyy + "-" + mm + "-" + dd;
    const temp = await FilterByDateApi(finalDate);
    props.setDateData(temp);
    props.setDateValue(finalDate);
    props.setStatus1(3);
    props.setStatus2(1);
  }

  async function callYear(year) {
    if (Month === "Month") {
      // if month is not present and only year is present
      changeYear(String(year));
      let temp = await FilterByMonthApi(year);
      console.log("temp is:", temp);
      setMonthsInfo(temp);
      props.setYearData(temp);
      setLoad(1);
    } else {
      //if some month is selected then we need this year and that particular month

      await callMonthYear(Month, year);
    }
  }

  async function callMonth(month) {
    let year = Year;

    if (year === "Year") {
      year = 1999
    }
    changeYear(String(year));
    changeMonth(month);
    let temp = await FilterByDayApi(monthMap[month], year);
    console.log("temp is:", temp);
    setDaysInfo(temp);
    props.setMonthData(temp);
    setLoad(1);
  }

  async function callMonthYear(month, year) {
    changeYear(String(year));
    changeMonth(String(month));
    let temp = await FilterByDayApi(monthMap[month], year);
    setDaysInfo(temp);
    props.setMonthData(temp);
    setLoad(1);
    props.setStatus1(2);
    props.setStatus2(1);
  }

  return (<div>

    <div className="row gx-0">
      <div className="col yearcol">
        <div class="dropdown">
          <button className="btn generalbtn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{Year}</button>
          <div class="dropdown-menu dropdown-menu-end">
            {years}
          </div>
        </div>
      </div>

      <div className="col monthcol">
        <div class="dropdown">
          <button className="btn generalbtn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{Month}</button>
          <div class="dropdown-menu dropdown-menu-end">
            <button onClick={(e) => {
                props.setStatus1(2);
                props.setStatus2(1);
                changeMonth(e.target.value);
                callMonth(e.target.value);

              }} class="dropdown-item" value="Jan" type="button" id="jan">Jan</button>
            <button onClick={(e) => {
                props.setStatus1(2);
                props.setStatus2(2);
                changeMonth(e.target.value);
                callMonth(e.target.value);
              }} class="dropdown-item" value="Feb" type="button" id="feb">Feb</button>
            <button onClick={(e) => {
                props.setStatus1(2);
                props.setStatus2(3);
                changeMonth(e.target.value);
                callMonth(e.target.value);
              }} class="dropdown-item" value="Mar" type="button" id="mar">Mar</button>
            <button onClick={(e) => {
                props.setStatus1(2);
                props.setStatus2(4);
                changeMonth(e.target.value);
                callMonth(e.target.value);
              }} class="dropdown-item" value="Apr" type="button" id="apr">Apr</button>
            <button onClick={(e) => {
                props.setStatus1(2);
                props.setStatus2(5);
                changeMonth(e.target.value);
                callMonth(e.target.value);
              }} class="dropdown-item" value="May" type="button" id="may">May</button>
            <button onClick={(e) => {
                props.setStatus1(2);
                props.setStatus2(6);
                changeMonth(e.target.value);
                callMonth(e.target.value);
              }} class="dropdown-item" value="Jun" type="button" id="jun">Jun</button>
            <button onClick={(e) => {
                props.setStatus1(2);
                props.setStatus2(7);
                changeMonth(e.target.value);
                callMonth(e.target.value);
              }} class="dropdown-item" value="Jul" type="button" id="jul">Jul</button>
            <button onClick={(e) => {
                props.setStatus1(2);
                props.setStatus2(8);
                changeMonth(e.target.value);
                callMonth(e.target.value);
              }} class="dropdown-item" value="Aug" type="button" id="aug">Aug</button>
            <button onClick={(e) => {
                props.setStatus1(2);
                props.setStatus2(9);
                changeMonth(e.target.value);
                callMonth(e.target.value);
              }} class="dropdown-item" value="Sep" type="button" id="sep">Sep</button>
            <button onClick={(e) => {
                props.setStatus1(2);
                props.setStatus2(10);
                changeMonth(e.target.value);
                callMonth(e.target.value);
              }} class="dropdown-item" value="Oct" type="button" id="oct">Oct</button>
            <button onClick={(e) => {
                props.setStatus1(2);
                props.setStatus2(11);
                changeMonth(e.target.value);
                callMonth(e.target.value);
              }} class="dropdown-item" value="Nov" type="button" id="nov">Nov</button>
            <button onClick={(e) => {
                props.setStatus1(2);
                props.setStatus2(12);
                changeMonth(e.target.value);
                callMonth(e.target.value);
              }} class="dropdown-item" value="Dec" type="button" id="dec">Dec</button>
          </div>
        </div>
      </div>

      <div className="col datecol">
        {/* <div class="dropdown">
          <button className="btn generalbtn btn-secondary dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Date</button>
          <div class="dropdown-menu dropdown-menu-end">
            <Calendar onChange={setDate} value={date}/>
          </div>
        </div> */
        }
        <button className="btn generalbtn btn-secondary dropdown" onClick={(e) => setClickCalendar(!clickCalendar)}>
          Date
        </button>
      </div>
      {
        clickCalendar == 1
          ? <div className="col calendarcol">
              <input className="date-display" value={date.toLocaleDateString()} onFocus={() => setShowCalendar(false)}/>
              <div className="row">
                <div className="col-lg-6"><Calendar className="calendar" value={date} onChange={handleChange}/></div>
                <div className="col-lg-6">
                  <button className="btn generalbtn btn-secondary " onClick={(e) => {setClickCalendar(!clickCalendar); callDateApi();}}>
                    Select
                  </button>
                </div>
              </div>
            </div>
          : <div></div>
      }

    </div>

  </div>);
}

export default TimeSelect;
