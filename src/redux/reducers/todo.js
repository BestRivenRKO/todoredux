const init = [
  { id: 1, name: "吃饭", done: false },
  { id: 2, name: "睡觉33", done: true },
  { id: 3, name: "喝水1122", done: false },
];

export default function todoReducer(preState = init, action) {
  const { type, data } = action;
  console.log(data);
  switch (type) {
    case "addTodoObj":
      return [data, ...preState];
    default:
      return preState;
  }
}
