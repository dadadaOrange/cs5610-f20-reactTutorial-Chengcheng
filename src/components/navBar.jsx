import React, { Component } from 'react';
//stateless functinal component: class -> function
// props as a argumrnts passing to the function

const NavBar = ({totalCounters}) => {
    return (               
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#"></a>
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
            {totalCounters}
        </span>
        </nav> );
}

// class NavBar extends Component {
//     render() { 
        // return (               
        // <nav className="navbar navbar-light bg-light">
        // <a className="navbar-brand" href="#"></a>
        // NavBar{" "}
        // <span className="badge badge-pill badge-secondary">
        //     {this.props.totalCounters}
        // </span>
        // </nav> );
//     }
// }
 
export default NavBar;