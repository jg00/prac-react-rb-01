function Card(props) {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={props.data.image} />
            <span className="card-title">{props.data.course}</span>
          </div>
          <div className="card-content">
            <p>{props.data.instructor}</p>
            <p>{props.data.course}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
