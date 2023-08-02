import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../font.css';
import '../style.css';
import MainCard from "./MainCard";
import Container from "./Container";
import SideBar from "./SideBar";


const ITEMS_PER_PAGE = 4; // 한 페이지당 4개 게시물
const TOTAL_ITEMS = 20; // 총 항목 개수 일부러 지정해 둠

function Activity() {
  const [ data, setData ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
        params: {
          _limit: TOTAL_ITEMS, // 총 항목 개수를 지정합니다.
        },
      });
      setData(response.data);
      console.log(response.data);
    };

    fetchData();
  }, []);

  //const totalItems = data.length;
  const totalItems = TOTAL_ITEMS;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);



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

            {/*<div className="container">
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

                        <button id="category-button" onClick={goActivity}>
                          체험
                        </button>
                        <button id="category-button" onClick={goEat}>
                          먹거리
                        </button>

                        <button id="category-button" onClick={goPlace}>
                          명소
                        </button>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>*/}
            <Container />



            <div className="candidate-list">
              <SideBar title={"체험"}/>

              {/*<div className="col-lg-4">
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
          </div>*/}

              <div className="col-lg-8">
              <div className="candidate-list-group">
              <MainCard key={0} title={'통영마을'} address={'서울특별시 노원구 어쩌구'} imageUrl={'./skywork.JPG'} />
                {displayedData.map((item) => (
                  <MainCard key={item.id} title={item.title} address={item.url} imageUrl={item.thumbnailUrl} />
                ))}
                {/* 나머지 candidate-list-box 컴포넌트들 */}

              </div>

                {/* 페이지 네비게이션 */}
                <div className="row">
                  <div className="mt-4 pt-2 col-lg-12">
                    <nav aria-label="Page navigation example">
                      <div className="pagination job-pagination mb-0 justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                          <button
                            className="page-link"
                            tabIndex="-1"
                            onClick={() => onPageChange(currentPage - 1)}
                          >
                            <i className="mdi mdi-chevron-double-left fs-15"></i>
                          </button>
                        </li>
                        {Array.from({ length: totalPages }).map((_, index) => (
                          <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button
                              className="page-link"
                              onClick={() => onPageChange(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                          <button
                            className="page-link"
                            onClick={() => onPageChange(currentPage + 1)}
                          >
                            <i className="mdi mdi-chevron-double-right fs-15"></i>
                          </button>
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