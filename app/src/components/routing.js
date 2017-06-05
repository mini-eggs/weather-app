import { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

class Routing extends Component {
  componentWillReceiveProps({ path, navigate }) {
    if (path !== this.props.path) {
      navigate(path);
    }
  }
  render() {
    return null;
  }
}

function mapState({ Routing }) {
  return {
    path: Routing.path
  };
}

function mapDispatch(dispatch) {
  return {
    navigate: url => dispatch(push(url))
  };
}

export default connect(mapState, mapDispatch)(Routing);
