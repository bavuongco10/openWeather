let React = require('react');
let {IndexLink, Link}  = require('react-router');

let Nav = React.createClass({
  render() {
    return (
      <div>
        <h1>Navigator</h1>
        <IndexLink
          to="/"
          activeClassName="active"
          activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
        <Link
          to="about"
          activeClassName="active"
          activeStyle={{fontWeight: 'bold'}}>About</Link>
      </div>
    );
  },
});

module.exports = Nav;