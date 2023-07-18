import React from "react";
import style from "./AppFeaturesItem.module.scss";

const AppFeaturesItem = ({
  title,
  text,
  svg,
}: {
  title: string;
  text: string;
  svg: string;
}) => {
  return (
    // @ts-ignore
    <div>
      <div>
        <img className={style.svg} src={`${svg}`} alt="img" />
      </div>
      <h5>{title}</h5>
      <span>{text}</span>
    </div>
  );
};

export default AppFeaturesItem;
