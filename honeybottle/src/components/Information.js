import React from 'react';
import { useLocation } from 'react-router-dom';
import './information.css';
import Container from "./Container";
import SideBar from "./SideBar";

function Information() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  if (!data) {
    return <div>데이터가 로딩중입니다...</div>;
  }

  return (
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
            <SideBar title={"세부페이지"} />
            <div className="col-lg-8">
          {/* Post content */}
          <article>
            {/* Post header */}
            <header className="mb-4 mt-3">
              {/* Post title */}
              <h1 className="fw-bolder mb-1">{data.title}!</h1>
              {/* Post meta content */}
              <div className="text-muted fst-italic mb-2">{data.address}</div>
              {/* Post categories */}
              {/*<a className="badge bg-secondary text-decoration-none link-light" href="#!">체험</a>
              <a className="badge bg-secondary text-decoration-none link-light" href="#!">먹거리</a>*/}
            </header>
            {/* 이미지 */}
            <figure className="mb-4">
              {/*<img className="img-fluid rounded" src={'./skywork.JPG'} />*/ }
              <a href="https://www.idus.com/c/class/7685">
              <img src={data.imageUrl} className="card-img square-img" alt="..."/>
              </a>
            </figure>
              

            {/* Post content */}
            <section className="mb-5">
              <p className="fs-5 mb-4">{data.content}Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.</p>
              <p className="fs-5 mb-4">The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.</p>
              <p className="fs-5 mb-4">If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.</p>
              <h2 className="fw-bolder mb-4 mt-5">I have odd cosmic thoughts every day</h2>
              <p className="fs-5 mb-4">For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.</p>
              <p className="fs-5 mb-4">Venus has a runaway greenhouse effect. I kind of want to know what happened there because we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's bone dry today. Something bad happened there as well.</p>
            </section>
          </article>
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
  );
}

export default Information;
