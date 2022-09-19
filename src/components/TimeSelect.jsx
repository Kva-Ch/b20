import React, { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import YearLineChart from "./YearLineChart";

function TimeSelect(props) {

    let years = []

    for(let year=2017; year<=2022; year++) {
        years.push(
            <button onClick={() => { props.setStatus1(1); props.setStatus2(year); }} class="dropdown-item" type="button">{year}</button>
        )
    }

    return (
        <div>

        <div className="row gx-0">
            <div className="col yearcol">
                <div class="dropdown">
                    <button className="btn generalbtn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false" >Year</button>
                    <div class="dropdown-menu dropdown-menu-end">
                        {years}
                    </div>
                </div>
            </div>

            
            <div className="col monthcol">
                <div class="dropdown">
                    <button className="btn generalbtn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false">Month</button>
                    <div class="dropdown-menu dropdown-menu-end">
                        <button onClick={() => {
                            props.setStatus1(2);
                            props.setStatus2(1);}} 
                            class="dropdown-item" type="button">Jan</button>
                        <button onClick={() => {
                            props.setStatus1(2);
                            props.setStatus2(2);}}
                            class="dropdown-item" type="button">Feb</button>
                        <button onClick={() => {
                            props.setStatus1(2);
                            props.setStatus2(3)}}
                            class="dropdown-item" type="button">March</button>
                        <button onClick={() => {
                            props.setStatus1(2);
                            props.setStatus2(4)}}
                            class="dropdown-item" type="button">April</button>
                        <button onClick={() => {
                            props.setStatus1(2);
                            props.setStatus2(5)}}
                            class="dropdown-item" type="button">May</button>
                        <button onClick={() => {
                            props.setStatus1(2);
                            props.setStatus2(6)}}
                            class="dropdown-item" type="button">June</button>
                        <button onClick={() => {
                            props.setStatus1(2);
                            props.setStatus2(7)}}
                            class="dropdown-item" type="button">July</button>
                        <button onClick={() => {
                            props.setStatus1(2);
                            props.setStatus2(8)}}
                            class="dropdown-item" type="button">August</button>
                        <button onClick={() => {
                            props.setStatus1(2);
                            props.setStatus2(9)}} 
                            class="dropdown-item" type="button">September</button>
                        <button onClick={() => {
                            props.setStatus1(2);
                            props.setStatus2(10)}}
                            class="dropdown-item" type="button">October</button>
                        <button onClick={() => {
                            props.setStatus1(2);
                            props.setStatus2(11)}}
                            class="dropdown-item" type="button">November</button>
                        <button onClick={() => {
                            props.setStatus1(2);
                            props.setStatus2(12)}}
                            class="dropdown-item" type="button">December</button>
                    </div>
                </div>
            </div>

            <div className="col datecol">
                <div class="dropdown">
                    <button className="btn generalbtn btn-secondary dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false">Date</button>
                    <div class="dropdown-menu dropdown-menu-end">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>
            </div>

        </div>
        
        </div>
      );
}

export default TimeSelect;