import * as React from "react";
import '../font.css';
import '../style.css';
import MainCard from "./MainCard";
import Container from "./Container";
import SideBar from "./SideBar";

const titles = ['스모어쿠키 만들기', '웜아트 섬유질 클레이로 만드는 스톤', '도마만들기 원데이클래스', '[분재클래스] 초보자도 할 수 있는 나만의 한 그루 만들기', '(유리공예)스테인드글라스로 나만의 소품만들기'];
const addresses = ['인천 부평구 장제로 196 2층', '서울 서초구 방배천로32길 2 2층',
  '경기 광주시 경충대로 2149 지1층4호', '경기 시흥시 수인로 2093', '서울 강동구 천중로11길 41 1층 라랑공방'];
const urls = ['./ocean.jpg', './forest.jpeg', './bridge.jpeg'];
const page = ['체험','먹거리','명소'];


function Eat() {
  return (
    <>
      <html lang="ko">
        <head>
          <meta charset="utf-8" />
          <title>꿀통</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet" />
          <link href='./style.css' type="text/css" rel="stylesheet" />
        </head>
        <body style={{ backgroundColor: 'rgba(244, 243, 250, 1)' }}>
          <link rel="stylesheet" href='./font.css' />
          <section className="section">
            <Container />

            <div className="candidate-list">
            <SideBar title={page[1]}/>

              <div className="col-lg-8">
                <div className="candidate-list-group">

                  <MainCard title={titles[0]} address={addresses[0]} imageUrl={urls[0]} />
                  <MainCard title={titles[1]} address={addresses[1]} imageUrl={urls[1]} />
                  <MainCard title={titles[2]} address={addresses[2]} imageUrl={urls[2]} />

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

export default Eat;
