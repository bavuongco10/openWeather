let React = require('react');

let WeatherMessage = React.createClass({
  render() {
    let {location,temp} = this.props;

    return (
      <div>
        <h3>It's about {temp} degree in {location}</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;