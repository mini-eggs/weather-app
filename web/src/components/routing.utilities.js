import { connect } from "react-redux";
import { push } from "react-router-redux";

function mapDispatch(dispatch) {
  console.log("here");
  return {
    navigate: url => dispatch(push(url))
  };
}

export default function(navigation, route) {
  return connect(null, mapDispatch)(function({ navigate }) {
    navigate(route);
    return null;
  });
}
