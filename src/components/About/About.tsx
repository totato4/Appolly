import React from "react";
import style from "./About.module.scss";
import AboutCard from "./AboutCard/AboutCard";

const About = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.textWrap}>
          <h4 className={style.title}>ABOUT OUR APP</h4>
          <h3 className={style.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </h3>
        </div>
        <div className={style.notTextWrap}>
          <img src="./src/assets/img/Phone2.png" alt="" />
          <div className={style.cardWrapper}>
            <AboutCard
              title={"CREATIVE DESIGN"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus  amet etiam tincidunt rhoncus, ullamcorper velit."
              }
            />
            <AboutCard
              title={"EASY TO USE"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.  Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
              }
            />
            <AboutCard
              title={"BEST USER EXPERINCE"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
