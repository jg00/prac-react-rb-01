class City extends React.Component {
  render() {
    return (
      <div className="city">
        <img src={this.props.image} />
        <div className="city-name">{this.props.city.name}</div>
        <div className="city-price">{this.props.city.price}</div>
      </div>
    );
  }
}

{
  /* <div key={i} className="city">
<img src={randomImage} />
<div className="city-name">{city.name}</div>
<div className="city-price">{city.price}</div>
</div> */
}
