import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
export default function index() {
  return (
    <>
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    </>
  );
}
