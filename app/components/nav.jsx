let React = require('react');
let {IndexLink, Link}  = require('react-router');

let Nav = React.createClass({

  onSearch(e) {
    e.preventDefault();
  },

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Menu</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
            </li>
            <li>
              <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather"/>
              </li>
              <li>
                <input type="submit" className="button" value="Search weather"></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  },
});

module.exports = Nav;

//
// return (
//   <div>
//     <h1>Navigator</h1>
//     <IndexLink
//       to="/"
//       activeClassName="active"
//       activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
//     <Link
//       to="about"
//       activeClassName="active"
//       activeStyle={{fontWeight: 'bold'}}>About</Link>
//   </div>
// );