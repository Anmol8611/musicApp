import React from "react";

const UserCard = (props) => {
  return (
    <div className="flex flex-col items-center gap-10 max-w-fit px-5 py-8">
      <img src={`/assets/${props.img}`} alt='user photo' />
      <h5 className="text-3xl font-bold">{props.name}</h5>
      <p className="text-sm font-medium max-w-[300px] text-center">
        <span className="text-3xl text-[--secondary-purple]">"</span><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        saepe excepturi modi accusantium? Laboriosam esse labore sunt in
        voluptates. Minima? </div><span className="text-3xl text-[--secondary-purple]">"</span>
      </p>
    </div>
  );
};

export default UserCard;
