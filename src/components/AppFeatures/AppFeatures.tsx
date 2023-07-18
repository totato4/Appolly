import React from "react";
import style from "./AppFeatures.module.scss";
import AppFeaturesItem from "./AppFeaturesItem/AppFeaturesItem";
import comment from "../../assets/big/comment.svg";
import browser from "../../assets/big/browser.svg";
import telemarketer from "../../assets/big/telemarketer.svg";
import eye from "../../assets/big/eye.svg";
import phone from "../../assets/big/phone.svg";
import vector from "../../assets/big/vector.svg";

const AppFeatures = () => {
  return (
    <div className={style.wrapper}>
      <div
        className={style.container}
        style={{ backgroundImage: `url('./src/assets/img/bg2.jpg')` }}
      >
        <div className={style.head}>
          <h4>APP FEATURES</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </span>
        </div>
        <div className={style.content}>
          <div className={style.top}>
            <AppFeaturesItem
              title={"FULL FREE CHAT"}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              svg={comment}
            />
          </div>
          <div className={style.middle}>
            <div className={style.middleSide + " " + style.left}>
              <AppFeaturesItem
                title={"FULL FREE CHAT"}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                svg={browser}
              />
              <AppFeaturesItem
                title={"FULL FREE CHAT"}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                svg={vector}
              />
            </div>
            <div className={style.phone}>
              <img src="./src/assets/img/phone5.png" alt="" />
            </div>
            <div className={style.middleSide + " " + style.right}>
              <AppFeaturesItem
                title={"FULL FREE CHAT"}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                svg={phone}
              />
              <AppFeaturesItem
                title={"FULL FREE CHAT"}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                svg={eye}
              />
            </div>
          </div>
          <div className={style.bottom}>
            <AppFeaturesItem
              title={"FULL FREE CHAT"}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              svg={telemarketer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
