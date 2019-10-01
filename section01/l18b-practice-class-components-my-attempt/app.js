const data = [
  {
    icon: "code",
    title: "Development"
  },
  {
    icon: "business",
    title: "Business"
  },
  {
    icon: "computer",
    title: "IT & Software"
  },
  {
    icon: "library_books",
    title: "Office Productivity"
  },
  {
    icon: "person",
    title: "Personal Development"
  },
  {
    icon: "mode_edit",
    title: "Personal Development"
  },
  {
    icon: "track_changes",
    title: "Marketing"
  },
  {
    icon: "directions_bike",
    title: "Health & Fitness"
  },
  {
    icon: "music_note",
    title: "Music"
  }
];

let icons = data.map((iconData, index) => {
  return <CatNav data={iconData} key={index} />;
});

// console.log(icons);

ReactDOM.render(
  <div className="row">
    <ul className="cat-nav center-align">{icons}</ul>
  </div>,

  // <div>
  //   {/* <CatNav data={data[0]} /> */}
  // </div>

  document.getElementById("root")
);
