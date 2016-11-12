let React = require('react');
let Nav = require('Nav');

let Main = React.createClass({
  render() {
    return (
      <div>
        <Nav/>
        <h1>Main component</h1>
        {this.props.children}
      </div>
    );
  },
});

module.exports = Main;