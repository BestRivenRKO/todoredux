import React from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { addTodo } from "../../../redux/actions/todo";
function Index(props) {
  const handleKey = (e) => {
    if (e.keyCode !== 13) return;
    if (e.target.value.trim() === "") {
      alert("不能输入为空");
    }
    const newTodo = { id: nanoid(), name: e.target.value, done: false };
    console.log("@@@=>", newTodo);
    props.addTodo(newTodo);
    e.target.value = "";
  };
  return (
    <>
      <div className='todo-header'>
        <input
          onKeyUp={(e) => {
            handleKey(e);
          }}
          type='text'
          placeholder='请输入你的任务名称，按回车键确认'
        />
      </div>
    </>
  );
}
export default connect((state) => ({}), { addTodo })(Index);
