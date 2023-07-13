import * as React from "react";
import { Link } from "react-router-dom";
import './font.css'
import './style.css'

function Splash() {
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
              <h1>허니 보틀 스플래시 화면입니다</h1>
              <Link to="/sign_up"><button>로그인</button></Link>
              <button>회원가입</button>
              <Link to="/honey"><button>게시판</button></Link>
            </section>
          </body>
        </html>
      </>
    );
  }
  
  export default Splash;
  