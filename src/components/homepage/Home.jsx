import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import assignedBugsApi from '../../controllers/assignedBugsApi.jsx';

function Home(props) {

  const [swapButton, setSwapButton] = useState("down")
  const [bugs, setBugs] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [sortBy, setSortBy] = useState("id");
  const [load, setLoad] = useState(false);

  let content = [];
  let paginate = [];

  async function callApi(page, pageSize, sortBy) {
    setLoad(false);
    let temp = await assignedBugsApi(page, pageSize, sortBy);
    setBugs(temp[0]);
    setPageNumber(temp[1]);
    setLoad(true);
  }

  useEffect(() => {
    console.log("Calling useeffect");
    setPageNumber(localStorage.getItem("pageNumber"));
    setSortBy(localStorage.getItem("sortBy"));
    callApi(localStorage.getItem("pageNumber"), 10, localStorage.getItem("sortBy"));
  }, []);

  function sortById(e) {
    localStorage.setItem("sortBy", "id");
    callApi(localStorage.getItem("pageNumber"), 10, localStorage.getItem("sortBy"));
  }

  function sortByStatus(e) {
    // console.log("Clicked");
    // console.log(localStorage.getItem("sortBy"));
    localStorage.setItem("sortBy", "status");
    // console.log(localStorage.getItem("sortBy"));
    // console.log("===============");
    callApi(localStorage.getItem("pageNumber"), 10, localStorage.getItem("sortBy"));
  }

  function sortByPriority(e) {
    localStorage.setItem("sortBy", "Priority");
    callApi(localStorage.getItem("pageNumber"), 10, localStorage.getItem("sortBy"));
  }

  function sortByDOC(e) {
    localStorage.setItem("sortBy", "Creation_time");
    console.log("DOC");
    callApi(localStorage.getItem("pageNumber"), 10, localStorage.getItem("sortBy"));
  }

  function nextPage(e) {
    const clickedPageNumber = e.target.value;
    console.log(clickedPageNumber);
    localStorage.setItem("pageNumber", clickedPageNumber);
    callApi(localStorage.getItem("pageNumber"), 10, localStorage.getItem("sortBy"));
  }

  content.push(<div className="row titlebar">
    <div className="col-lg-1 col-md-1 col-sm-1"></div>
    <div className="tabletitles">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3">
          <h5 className="info bugidTitle">
            <a className="titleSort" onClick={sortById}>Bug Id</a>
          </h5>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
          <h5 className="info statusTitle">
            <a className="titleSort" onClick={sortByStatus}>Status</a>
          </h5>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
          <h5 className="info priorityTitle">
            <a className="titleSort" onClick={sortByPriority}>Priority</a>
          </h5>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
          <h5 className="info docTitle">
            <a className="titleSort" onClick={sortByDOC}>Date Of Creation</a>
          </h5>
        </div>
      </div>
    </div>
  </div>);

  function items(numberOfItems, bugsArray) {
    // this should be changed to the for loop
    for (let index = -1; index < numberOfItems; index++) {
      // console.log(index);
      let temp = swapButton + ":" + String(index)
      if (index == -1) {
        console.log("here");
        content.push(<div className="row">
          <div className="homealigndiv"></div>
        </div>)
      } else {
        content.push(<div key={index} className="row boxes">
          <div className="col-lg-1 col-md-1 col-sm-1"></div>
          <div className="collapsebox">
            <a className="removestyle" data-bs-toggle="collapse" href={"#collapseExample" + index} role="button" aria-expanded="false" aria-controls="collapseExample">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <h5 className="info">{bugsArray[index]["Id"]}</h5>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <h5 className="info">{bugsArray[index]["Status"]}</h5>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <h5 className="info">{bugsArray[index]["Priority"]}</h5>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <h5 className="info">{bugsArray[index]["Creation_time"].split("T")[0]}</h5>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1">
                  <button id={temp} className="arrow" style={{
                      visibility: swapButton === "down"
                        ? 'visible'
                        : 'hidden'
                    }} onClick={() => setSwapButton("up")}>
                    <i className="fa fa-angle-down fa-lg"></i>
                  </button>

                  <button className="arrow" style={{
                      visibility: swapButton === "up"
                        ? 'visible'
                        : 'hidden'
                    }} onClick={() => setSwapButton("down")}>
                    <i className="fa fa-angle-up fa-lg"></i>
                  </button>

                </div>
              </div>

            </a>
            <div className="collapse" id={"collapseExample" + index}>
              <div className="card card-body">
                <p className="bugdescription">
                  {bugsArray[index]["Summary"]}
                </p>
                <p className="bugdescription">
                  <a className="moreBugInfo" href={"/bugInfoPage/" + bugsArray[index]["Id"]}>Click To Get More Bug Info</a>
                </p>
              </div>
            </div>
          </div>
        </div>);
      }

    }
  }

  function noitems() {
    content.push(<div className="emptyDiv"></div>);
  }

  function pagination(currentPage) {

    // Need to write onclick handlers which will take the parseInt(currentPage) and send the axios response

    if (parseInt(currentPage) === 1) {
      paginate.push(<nav aria-label="Page navigation example gx-3">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          <li className="page-item active">
            <button className="page-link" onClick={nextPage} value={parseInt(currentPage)}>{parseInt(currentPage)}</button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextPage} value={parseInt(currentPage) + 1}>{parseInt(currentPage) + 1}</button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextPage} value={parseInt(currentPage) + 2}>{parseInt(currentPage) + 2}</button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextPage} value={parseInt(currentPage) + 1}>Next</button>
          </li>
        </ul>
      </nav>);
    } else {
      paginate.push(<nav aria-label="Page navigation example gx-3">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" onClick={nextPage} value={parseInt(currentPage) - 1}>Previous</button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextPage} value={parseInt(currentPage) - 1}>{parseInt(currentPage) - 1}</button>
          </li>
          <li className="page-item active">
            <button className="page-link" onClick={nextPage} value={parseInt(parseInt(currentPage))}>{parseInt(parseInt(currentPage))}</button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextPage} value={parseInt(parseInt(currentPage)) + 1}>{parseInt(parseInt(currentPage)) + 1}</button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextPage} value={parseInt(currentPage) + 1}>Next</button>
          </li>
        </ul>
      </nav>);
    }

  }

  if (load && bugs.length) {
    console.log(bugs, bugs.length);
    items(bugs.length, bugs);
    pagination(pageNumber);
  } else {
    noitems();
    pagination(pageNumber);
  }

  return (<div className="homecomponent">
    <div>{content}</div>
    <div className="p-3">
      {paginate}
    </div>
  </div>);
}

export default Home;
