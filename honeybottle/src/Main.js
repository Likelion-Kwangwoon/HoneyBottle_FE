import * as React from "react";
import { Link } from "react-router-dom";
import './font.css'
import './style.css'

function Main() {
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
          <Link to="/Activity"><button>체험</button></Link>
          <Link to="/Eat"><button>먹거리</button></Link>
          <Link to="/Place"><button>명소</button></Link>  
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

export default Main;
