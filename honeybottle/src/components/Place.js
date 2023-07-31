import * as React from "react";
import { Link } from "react-router-dom";
import '../font.css';
import '../style.css';
import MainCard from "./MainCard";

const titles = ['동막해변','죽녹원','가우도출렁다리','광명동굴','강주해바라기마을'];
const addresses = ['인천 강화군 화도면 해안남로 1481','전남 담양군 담양읍 죽녹원로 119',
'전남 강진군 도암면 신기리 산7-1','경기 광명시 가학로85번길 142','경남 함안군 법수면 강주4길 37'];
const urls = ['./ocean.jpg','./forest.jpeg','./bridge.jpeg'];


function Place() {
  return (
    <>
      <html lang="ko">
        <head>
          <meta charset="utf-8" />
          <title>꿀통</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"/>
          <link href='./style.css' type="text/css" rel="stylesheet" />
        </head>
        <body style={{ backgroundColor: 'rgba(244, 243, 250, 1)' }}>
          <link rel="stylesheet" href='./font.css' />
          <section className="section">
            <div className="container">
              <div className="justify-content-center row">
                <div className="col-lg-12">
                  <div className="candidate-list-widgets mb-4">
                    <form action="#" className="">
                      <div className="g-2 row">
                        <div className="align-items-center row">
                          <div className="col-lg-8">
                            <div className="city-layout">
                              <h4 className="cityname">서울동북부지역</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="division-line"></div>
                      <div className="button-group">
                      <button id="category-button" href="#">
                          체험
                        </button>
                        <button id="category-button" href="#">
                          먹거리
                        </button>
                        <button id="category-button" href="#">
                          명소
                        </button>
                      
                      
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

           

            <div className="candidate-list">
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
                        <i className="fa fa-map"></i>명소
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

              <div className="col-lg-8">
                <div className="candidate-list-group">

                <MainCard title={titles[0]} address={addresses[0]} imageUrl={urls[0]} />
                <MainCard title={titles[1]} address={addresses[1]} imageUrl={urls[1]}/>
                <MainCard title={titles[2]} address={addresses[2]} imageUrl={urls[2]}/>

                  {/* 나머지 candidate-list-box 컴포넌트들 */}

                </div>
              

                  {/* 페이지 네비게이션 */}
                  <div className="row">
                    <div className="mt-4 pt-2 col-lg-12">
                      <nav aria-label="Page navigation example">
                        <div className="pagination job-pagination mb-0 justify-content-center">
                          <li className="page-item disabled">
                            <a
                              className="page-link"
                              tabIndex="-1"
                              href="#"
                            >
                              <i className="mdi mdi-chevron-double-left fs-15"></i>
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <i className="mdi mdi-chevron-double-right fs-15"></i>
                            </a>
                          </li>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            
          </section>

          <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
            crossOrigin="anonymous"
          ></script>
          <script type="text/javascript"></script>
        </body>
      </html>
    </>
  );
}

export default Place;
