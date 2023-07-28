import React from "react";
import style from "./Achieve.module.scss";

type SvgInHtml = HTMLElement & SVGElement;
interface props {
  icon: string;
  state: string;
  name: string;
}

const Achieve = ({ icon, state, name }: props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.imgWrapper}>
        <img className={style.icon} src={`${icon}`} alt="image download" />
      </div>
      <div className={`${style.state}`}>{state}</div>
      <div className={`${style.name}`}>{name}</div>
    </div>
  );
};

export default Achieve;
