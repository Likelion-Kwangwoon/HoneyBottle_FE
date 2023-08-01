import * as React from "react";
import '../font.css';
import '../style.css';

function SideBar({title}) {
    return (
        <div className="col-lg-4">
                <div className="container bootstrap snippets bootdey">
                  <div
                    className="row"
                    style={{ backgroundColor: 'rgba(244, 243, 250, 1)' }}
                  >
                    <div className="nav-logo-layout">
                      <a className="nav-logo" href="#">
                        🍯 HoneyBottle
                      </a>
                    </div>
                    <nav className="list-group">
                      <a className="list-group-item with-badge" href="#">
                        <i className="fa fa-th"></i>여기는
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>{title}
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>페이지
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>카테고리바
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
    )

};

export default SideBar;