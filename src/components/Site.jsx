import React from 'react';
const siteText = [
  {
    text: ["Make", "site compliant with", "webstandard"],
    title:"웹 표준을 준수한 사이트 제작",
    code: "http://github.com/Any1107/port2023-vite",
    view:"http://ajysmartweb.dothome.co.kr/port-vite",
    info:[
      "site coding",
      "production perido:two days",
      "use stack:html5/css3,Css Variable, Vite",
    ],
  },
  {
    text: ["Make", "site compliant with", "react.js"],
    title:"리액트를 이용한 사이트 제작",
    code: "http://github.com/Any1107/port2023-react",
    view:"http://ajysmartweb.dothome.co.kr/port-react",
    info:[
      "site coding",
      "production perido:two days",
      "use stack:html5/css3,Css Variable, React",
    ],
  },
  {
    text: ["Make", "site compliant with", "vue.js"],
    title:"뷰를 이용한 사이트 제작",
    code: "http://github.com/Any1107/port2023-vue",
    view:"http://ajysmartweb.dothome.co.kr/port-vue",
    info:[
      "site coding",
      "production perido:two days",
      "use stack:html5/css3,Css Variable, Vue",
    ],
  },
  {
    text: ["Make", "site compliant with", "next.js"],
    title:"넥스트를 이용한 사이트 제작",
    code: "http://github.com/Any1107/port2023-next",
    view:"http://ajysmartweb.dothome.co.kr/port-next",
    info:[
      "site coding",
      "production perido:two days",
      "use stack:html5/css3,Css Variable, Next.js",
    ],
  },
]

const Site = () => {
  return (
    <section id="site">
      <div className="site_inner">
        <h2 className="site_title">
          Site coding<em>나의 작업물</em>
        </h2>
        <div className="site_wrap">
          {siteText.map((site, key)=> (

         
            <article className={`site_item s${key+1}`} key={key}>
              <span className="num">{key+1}.</span>
              <div className="text">
                  <div>{site.text[0]}</div>
                  <div>{site.text[1]}</div>
                  <div>{site.text[2]}</div>
              </div>    
                <h3 className="title">
                  {site.title}
                </h3>
                <div className="btn">
                  <a href={site.code}></a>
                  <a href={site.view}></a>
                </div>
                <div className="info">
                  <span>{site.info[0]}</span>
                  <span>{site.info[1]}</span>
                  <span>{site.info[2]}</span>
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Site;
