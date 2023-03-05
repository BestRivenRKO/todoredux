import React, { useState } from "react";

export default function Index(props) {
  // 鼠标移入移出回调
  const [flag, setFlag] = useState();
  const handleMouse = (flag) => {
    setFlag(flag);
  };
  const { id, name, done } = props;
  return (
    <>
      <li
        key={id}
        style={{ backgroundColor: flag ? "#ddd" : "", cursor: "pointer" }}
        onMouseEnter={() => {
          handleMouse(true);
        }}
        onMouseLeave={() => {
          handleMouse(false);
        }}
      >
        <label>
          <input type='checkbox' defaultChecked={done} />
          <span>{name}</span>
        </label>
        {flag ? <button className='btn btn-danger'>删除</button> : null}
      </li>
    </>
  );
}
