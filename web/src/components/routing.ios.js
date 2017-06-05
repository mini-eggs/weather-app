import { Component } from "react";
import { connect } from "react-redux";
import Navigate from "./routing.utilities";

class Routing extends Component {
  componentWillReceiveProps({ path, navigation }) {
    if (path !== this.props.path) {
      navigation.navigate(path);
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

export default connect(mapState)(Routing);
