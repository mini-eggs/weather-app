import React, { Component } from "react";
import { addNavigationHelpers } from "react-navigation";

export default class extends Component {
  componentWillReceiveProps(props) {
    if (this.props.navigation.state !== props.navigation.state) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    console.log(this.props.router.getScreenOptions());
    return null;
    // const { navigation, router } = this.props;
    // const { isMobileMenuOpen } = this.state;
    // const childNavigation = addNavigationHelpers({
    //   ...navigation,
    //   state: navigation.state.routes[navigation.state.index]
    // });
    // const { state } = navigation;
    // const ScreenView = router.getComponentForRouteName(
    //   state.routes[state.index].routeName
    // );
    // const { routes, index } = state;
    // const route = routes[index];
    // const hasChildNavigation = !!route.routes;
    // return <ScreenView navigation={childNavigation} />;
  }
}
