import React, { ReactNode } from "react";
import style from "./AppFeaturesItem.module.scss";

const AppFeaturesItem = ({
  title,
  text,
  svg,
  children,
}: {
  title: string;
  text: string;
  svg?: string;
  children?: ReactNode;
}) => {
  return (
    // @ts-ignore
    <div className={style.wrapper}>
      <div className={style.svg}>{children && children}</div>
      <h5>{title.toUpperCase()}</h5>
      <span>{text}</span>
    </div>
  );
};

export default AppFeaturesItem;
