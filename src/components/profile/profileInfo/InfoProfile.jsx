import React from "react";
import style from "./InfoProfile.module.css";
const InfoProfile = () => (
  <>
    <div className={style.img_container}>
      <img
        src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg"
        alt=""
      />
    </div>
    <div className={style.avaBox}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpYkPOQ9cNplPA-2OwuG9WeTwcGKAyo3VsA&usqp=CAU"
        alt=""
      />
    </div>
    <div className={style.descrption}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt
      alias ab, possimus numquam tempora expedita deserunt eius explicabo cumque
      delectus aliquam cupiditate id veniam vero repudiandae voluptatibus
      provident ea?
    </div>
  </>
);
export default InfoProfile;
