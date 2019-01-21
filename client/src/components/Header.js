import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <a class="waves-effect blue btn" href="/auth/google">Login With Google
              <i className="material-icons right">send</i>
            </a>
          </div>
        );
      default:
        return (
          <div>
            <a className="waves-effect red btn" href="/api/logout">
              Logout
              <i className="material-icons right">close</i>
            </a>


          </div>

        )
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper #546e7a blue-grey darken-1">
          <Link
            to={this.props.auth ? "/dashboard" : "/"}
            className="left brand-logo"
            style={{ paddingLeft: "15px" }}
          >
            Life Graph
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
