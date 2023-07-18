import React from "react";
import style from "./DownloadApp.module.scss";

const DownloadApp = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.getStartWrapper}>
          <img
            className={style.imgQuad}
            src="./src/assets/img/Quad.png"
            alt="img"
          />
          <div className={style.getStart}>
            <h2 className={style.title}>A GREAT APP MAKES YOUR LIFE BETTER</h2>
            <span className={style.text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              <br />
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation <br /> veniam consequat sunt nostrud amet.
            </span>
            <div className={style.download}>
              <h5 className={style.downloadTitle}>DOWNLOAD APP NOW</h5>
              <div>
                <a href="/">
                  <img src="./src/assets/img/GooglePlay1.png" alt="img" />
                </a>
                <a href="/">
                  <img src="./src/assets/img/AppStore1.png" alt="img" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={style.phoneWrapper}>
          <img
            className={style.imgPhone}
            src="./src/assets/img/Phone3.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
