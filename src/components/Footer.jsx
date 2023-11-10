import React from "react";
const footerText =[
  {
    title:"github",
    desc:"깃허브에 들어오시면 모든 소스를 볼 수 있습니다.",
    link:"https://github.com/any1107",
  },
  {
    title:"티스토리",
    desc:"티스토리에 들어오시면 유용한 정보를 볼 수 있습니다.",
    link:"https://anysmartweb.tistory.com",
  },
];

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
            <a href="#">social</a>
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
