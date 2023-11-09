import React from 'react';

import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";
import port07 from "../assets/img/port07.jpg";
import port08 from "../assets/img/port08.jpg";
import port09 from "../assets/img/port09.jpg";
import port10 from "../assets/img/port10.jpg";


const portText=[
  {
    num:"01",
    title:"포트폴리오1",
    desc: "포트폴리오 1소개",
    img: port01,
    code:"http://github.com/Any1107/port2023-vite",
    view:"http://ajysmartweb.dothome.co.kr/port-vite",
    name:"포트폴리오1"
  },
  {
    num:"02",
    title:"포트폴리오2",
    desc: "포트폴리오 2소개",
    img: port02,
    code:"http://github.com/Any1107/port2023-vite",
    view:"http://ajysmartweb.dothome.co.kr/port-vite",
    name:"포트폴리오2"
  },
  {
    num:"03",
    title:"포트폴리오3",
    desc: "포트폴리오 3소개",
    img: port03,
    code:"http://github.com/Any1107/port2023-vite",
    view:"http://ajysmartweb.dothome.co.kr/port-vite",
    name:"포트폴리오3"
  },
  {
    num:"04",
    title:"포트폴리오4",
    desc: "포트폴리오 4소개",
    img: port04,
    code:"http://github.com/Any1107/port2023-vite",
    view:"http://ajysmartweb.dothome.co.kr/port-vite",
    name:"포트폴리오4"
  },
  {
    num:"05",
    title:"포트폴리오5",
    desc: "포트폴리오 5소개",
    img: port05,
    code:"http://github.com/Any1107/port2023-vite",
    view:"http://ajysmartweb.dothome.co.kr/port-vite",
    name:"포트폴리오5"
  },
  {
    num:"06",
    title:"포트폴리오6",
    desc: "포트폴리오 6소개",
    img: port06,
    code:"http://github.com/Any1107/port2023-vite",
    view:"http://ajysmartweb.dothome.co.kr/port-vite",
    name:"포트폴리오6"
  },
  {
    num:"07",
    title:"포트폴리오7",
    desc: "포트폴리오 7소개",
    img: port07,
    code:"http://github.com/Any1107/port2023-vite",
    view:"http://ajysmartweb.dothome.co.kr/port-vite",
    name:"포트폴리오7"
  },
  {
    num:"08",
    title:"포트폴리오8",
    desc: "포트폴리오 8소개",
    img: port08,
    code:"http://github.com/Any1107/port2023-vite",
    view:"http://ajysmartweb.dothome.co.kr/port-vite",
    name:"포트폴리오8"
  },
  {
    num:"09",
    title:"포트폴리오9",
    desc: "포트폴리오 9소개",
    img: port09,
    code:"http://github.com/Any1107/port2023-vite",
    view:"http://ajysmartweb.dothome.co.kr/port-vite",
    name:"포트폴리오9"
  },
  {
    num:"10",
    title:"포트폴리오10",
    desc: "포트폴리오 10소개",
    img: port10,
    code:"http://github.com/Any1107/port2023-vite",
    view:"http://ajysmartweb.dothome.co.kr/port-vite",
    name:"포트폴리오10"
  },

]



const Port = () => {
  return (
    <section id="port">
    <div className="port_inner">
      <div className="port_title">
        portfolio<em>포폴작업물</em>
      </div>
      <div className="port_wrap">
        {portText.map((port, key)=>(
            <article className={`port_item p${key+1}`}key ={key}>
            <span className="num">{port.num}</span>
            <a href={port.code} target="_blank" className="img" rel="noreferrer">
              <img src={port.img} alt={port.name}/>
            </a>
            <h3 className="title">{port.title}</h3>
            <p className="desc">
              {port.desc}
            </p>
            <a href={port.view} target="_blank" className="site" rel="noreferrer">사이트보기</a>
          </article>
        ))}

      </div>
    </div>
  </section>
  )
}

export default Port;
