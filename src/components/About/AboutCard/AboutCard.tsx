import React from "react";
import style from "./AboutCard.module.scss";

const AboutCard = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className={style.container}>
      <div className={style.svg}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_39_3)">
            <path
              d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
              fill="#5956E9"
            />
          </g>
          <defs>
            <clipPath id="clip0_39_3">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className={style.textWrap}>
        <h3 className={style.title}>{title}</h3>
        <span className={style.text}>{text}</span>
      </div>
    </div>
  );
};

export default AboutCard;