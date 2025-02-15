import React from "react";
import Choose from "./Choose/Choose";
import Categories from "./Category/Categories";
import style from "./Main.module.css";
import SearchBlock from './SearchBlock/SearchBlock'
import Advantages from "./Advantages/Advantages";
import Promotion from "./Promotion/Promotion";
import OboutUs from "./OboutUs/OboutUs";
import PhotoAdd from "../AddPhotoBlock/PhotoAdd";

const Main = () => {
  return (
    <div className={style.main}>
      <SearchBlock />
      <Advantages />
      <Choose />
      <Categories />
      <Promotion />
      <OboutUs />
      <PhotoAdd />
    </div>
  );
};

export default Main;
