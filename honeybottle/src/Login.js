import React from 'react';
import { Link } from "react-router-dom";
import './font.css';
import './login.css';

function Login() {
  return (
    <>
      <html lang="ko">
        <head>
          <meta charset="utf-8" />
          <title>로그인</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link href="./style.css" type="text/css" rel="stylesheet" />
        </head>
        <body className="login-body">
          <section className="section">
            <div className="login-container">
              <h1 className="login-title">로그인</h1>
              <form className="login-form">
                <div className="form-group">
                  <label htmlFor="username">아이디</label>
                  <input type="text" id="username" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">비밀번호</label>
                  <input type="password" id="password" className="form-control" />
                </div>
                <Link to="/Main"><button type="submit" className="btn btn-primary">로그인</button></Link>
              </form>
            </div>
          </section>
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

export default Login;