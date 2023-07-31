import * as React from "react";
import { Link } from "react-router-dom";
import "./maincard.css"; // 스타일 파일을 임포트합니다.
import '../font.css';

function MainCard({title,address,imageUrl}) {
  return (
    <>
    <div className="card bg-dark text-white">
      <img src={imageUrl} className="card-img square-img" alt="..."/> {/* square-img 클래스 추가 */}
      <div className="card-img-overlay">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{address}</p>
      </div>
    </div>
    </>
  );
}

export default MainCard;

