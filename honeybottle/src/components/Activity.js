import * as React from "react";
import { Link } from "react-router-dom";
import '../font.css';
import '../style.css';
import MainCard from "./MainCard";
import Main from "../Main";
function Activity() {
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
                        <i className="fa fa-map"></i>체험
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
                  <div className="candidate-list-box bookmark-post card mt-4">
                    <div className="p-4 card-body">
                      <div className="align-items-center row">
                        <div className="col-auto">
                          <div className="candidate-list-images">
                            <a href="#">
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                alt=""
                                className="avatar-md img-thumbnail rounded-circle"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="candidate-list-content mt-3 mt-lg-0">
                            <h5 className="fs-19 mb-0">
                              <a className="primary-link" href="#">
                                Kanye
                              </a>
                            </h5>
                            <p className="text-muted mb-2"> 2023/07/07 13:00</p>
                            <p className="text-muted mb-2">
                              여기는 체험 페이지 입니다
                            </p>
                            <ul className="list-inline mb-0 text-muted">
                              <li
                                className="list-inline-item"
                                style={{ color: 'rgba(155, 155, 155, 1)' }}>
                                <i className="mdi mdi-map-marker"></i> 댓글1개
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="mt-2 mt-lg-0 d-flex flex-wrap align-items-start gap-1">
                            <span className="badge bg-soft-secondary fs-14 mt-1">
                              학교꿀통
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="favorite-icon">
                        <a href="#">
                          <i className="mdi mdi-heart fs-18"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                

                  <div className="candidate-list-box bookmark-post card mt-4">
                    <div className="p-4 card-body">
                      <div className="align-items-center row">
                        <div className="col-auto">
                          <div className="candidate-list-images">
                            <a href="#">
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                alt=""
                                className="avatar-md img-thumbnail rounded-circle"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="candidate-list-content mt-3 mt-lg-0">
                            <h5 className="fs-19 mb-0">
                              <a className="primary-link" href="#">
                                Charlie
                              </a>
                            </h5>
                            <p className="text-muted mb-2"> 2023/07/07 13:00</p>
                            <p className="text-muted mb-2">
                              석계 칼국수 맛집 아시나요
                            </p>
                            <ul className="list-inline mb-0 text-muted">
                              <li
                                className="list-inline-item"
                                style={{ color: 'rgba(155, 155, 155, 1)' }}>
                                <i className="mdi mdi-map-marker"></i> 댓글1개
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="mt-2 mt-lg-0 d-flex flex-wrap align-items-start gap-1">
                            <span className="badge bg-soft-secondary fs-14 mt-1">
                              학교꿀통
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="favorite-icon">
                        <a href="#">
                          <i className="mdi mdi-heart fs-18"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <MainCard />

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

export default Activity;
