let cards = data.map((course, i) => {
  return <Card data={course} key={i} />;
});

console.log(cards);

ReactDOM.render(
  <div className="row">
    {cards}

    {/* JSX unpacks {cards} array of components and treat it like below
    <Card data={data[0]} />
    <Card data={data[1]} />
    <Card data={data[2]} />
    <Card data={data[3]} /> 
    */}
  </div>,
  document.getElementById("root")
);
