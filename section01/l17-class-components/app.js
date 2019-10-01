let cards = data.map((course, i) => {
  return <Card data={course} key={i} />;
});

console.log(cards);

ReactDOM.render(
  <div className="row">{cards}</div>,
  document.getElementById("root")
);
