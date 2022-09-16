import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

function Home(props) {

  const [swapButton, setSwapButton] = useState("down")

  let content = [];
  let paginate = [];

  useEffect(() => {
  //Runs only on the first render
  // content = [];

}, []);

content.push(<div className="row titlebar">
  <div className="col-lg-1 col-md-1 col-sm-1"></div>
  <div className="tabletitles">
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-3">
        <h5 className="info bugidTitle">Bug Id</h5>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3">
        <h5 className="info statusTitle">Status</h5>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3">
        <h5 className="info priorityTitle">Priority</h5>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3">
        <h5 className="info docTitle">Date of Creation</h5>
      </div>
    </div>
  </div>
</div>);


  function items(numberOfItems, itemsArray) {
    // this should be changed to the for loop
    for (let index = 0; index < numberOfItems; index++) {

      let temp = swapButton + ":" + String(index)
      if (index == 0) {
        console.log("here");
        content.push(<div className="row">
          <div className="homealigndiv"></div>
        </div>)
      } else {
        content.push(<div className="row">
          <div className="col-lg-1 col-md-1 col-sm-1"></div>
          <div className="collapsebox">
            <a className="removestyle" data-bs-toggle="collapse" href={"#collapseExample" + index} role="button" aria-expanded="false" aria-controls="collapseExample">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <h5 className="info">Bug Id</h5>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <h5 className="info">Status</h5>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <h5 className="info">Priority</h5>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <h5 className="info">Date of Creation</h5>
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
            <div class="collapse" id={"collapseExample" + index}>
              <div class="card card-body">
                <p className="bugdescription">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel molestie lectus, sed scelerisque metus. Pellentesque tincidunt odio eu enim dictum, non pellentesque nibh fringilla. Aliquam posuere eget lacus id porta. Nullam vel enim id metus efficitur tristique eu at leo. Nam nibh ex, accumsan nec nulla nec, iaculis pretium elit. Integer hendrerit est turpis, eu sollicitudin quam molestie sed. Donec posuere justo metus, nec commodo erat suscipit id. Praesent mattis turpis consectetur nulla consectetur maximus. Suspendisse quis purus at mauris mattis maximus. Sed euismod massa scelerisque ligula dignissim, at semper tortor fringilla. Sed ornare dui vitae consequat eleifend. Vivamus viverra ante molestie, volutpat purus in, volutpat mi. Vestibulum laoreet gravida ipsum, eu laoreet ligula sagittis ac. Integer placerat ipsum ipsum, eget pellentesque sem malesuada at. Phasellus vel scelerisque elit.
                </p>
                <p className="bugdescription">
                  <a className="moreBugInfo" href={index}>Click To Get More Bug Info</a>
                </p>
              </div>
            </div>
          </div>
        </div>);
      }

    }
  }

  function pagination(currentPage) {

    // Need to write onclick handlers which will take the currentpage and send the axios response

    if(currentPage===1){
      paginate.push(
        <nav aria-label="Page navigation example gx-3">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">{currentPage}</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">{currentPage+1}</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">{currentPage+2}</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      );
    } else {
      paginate.push(
        <nav aria-label="Page navigation example gx-3">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">{currentPage-1}</a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">{currentPage}</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">{currentPage+1}</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      );
    }

  }

  items(10, {});
  pagination(1);

  return (<div className="homecomponent">
    <div>{content}</div>
    <div class="p-3">
      {paginate}
    </div>
  </div>);
}

export default Home;
