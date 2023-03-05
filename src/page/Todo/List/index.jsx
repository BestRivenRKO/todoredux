import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
function Index(props) {
  const { list } = props;
  return (
    <>
      <ul className='todo-main'>
        {list.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </ul>
    </>
  );
}

export default connect((state) => ({ list: state.todo }), {})(Index);
