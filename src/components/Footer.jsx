import React from "react";
import { footerText } from "../constants";

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
    <div className="footer_inner">
      <div className="footer_text">
        <span>ajysmartweb</span>
        <span>©ajy</span>
      </div>
      <div className="footer_info">
        <div className="left">
          <div className="title">
            <p>social</p>
          </div>
          <p>under construction</p>
        </div>
        <div className="right">
          <h3>site</h3>
          <ul>
           {footerText.map((footer,key) => (
            <li key={key}>
              <a href={footer.link}>{footer.title}</a>
              <em>{footer.desc}</em>
            </li>
           ))}
          </ul>
        </div>
      </div>
      <div className="footer_right">
        © 2023 ajysmartweb<br />
        이 사이트는 리액트를 이용하여 제작하였습니다.
      </div>

    </div>

  </footer>
  );
};

export default Footer
