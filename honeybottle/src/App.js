import React from 'react';
import './font.css'
import './style.css'

function App() {
  return (
    <>
      <html lang="ko">
        <head>
          <meta charset="utf-8" />
          <title>꿀통</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
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
                          🏚 Home
                        </button>
                        <button id="category-button" href="#">
                          꿀통
                        </button>
                        <button id="category-button" href="#">
                          단기구인
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="align-items-center row">
              <div className="col-lg-8">
                <div className="mb-3 mb-lg-0">
                  <h6 className="fs-16 mb-0"> </h6>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="candidate-list-widgets">
                  <div className="row"></div>
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
                      <a className="nav-logo">
                        🍯 HoneyBottle
                      </a>
                    </div>
                    <nav className="list-group">
                      <a className="list-group-item with-badge" href="#">
                        <i className="fa fa-th"></i>알바 꿀통
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>학교 꿀통
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>자취 꿀통
                      </a>
                      <a className="list-group-item" href="#">
                        <i className="fa fa-map"></i>방문 꿀통
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
                                Amy1
                              </a>
                            </h5>
                            <p className="text-muted mb-2"> 2023/07/07 13:00</p>
                            <p className="text-muted mb-2">
                              광운대 앞에 화로상회 알바해보신 분 계신가요?
                              후기좀요 아자차카타파하마자낭러니ㅏㅇ러니ㅏㅇ러니ㅏ어리나러
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
                                Amy2
                              </a>
                            </h5>
                            <p className="text-muted mb-2"> 2023/07/07 13:00</p>
                            <p className="text-muted mb-2">
                              광운대 앞에 화로상회 알바해보신 분 계신가요?
                              후기좀요 아자차카타파하마자낭러니ㅏㅇ러니ㅏㅇ러니ㅏ어리나러
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
                                src="https://bootdey.com/img/Content/avatar/avatar3.png"
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
                                Amy3
                              </a>
                            </h5>
                            <p className="text-muted mb-2"> 2023/07/07 13:00</p>
                            <p className="text-muted mb-2">
                              컴포즈 vs 브레댄코 
                            </p>
                            <ul className="list-inline mb-0 text-muted">
                              <li
                                className="list-inline-item"
                                style={{ color: 'rgba(155, 155, 155, 1)' }}>
                                <i className="mdi mdi-map-marker"></i> 댓글5개
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
                                src="https://bootdey.com/img/Content/avatar/avatar5.png"
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
                                Amy5
                              </a>
                            </h5>
                            <p className="text-muted mb-2"> 2023/07/07 13:00</p>
                            <p className="text-muted mb-2">
                              화로상회 맛있나요
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

export default App;
