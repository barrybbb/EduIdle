"use strict";

// Depdencies
import React from "react";
//import FacebookSDK from "./FacebookSDK";
//import Parse from "parse/react-native";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

// Components
import { Text } from "react-native";
import EduApp from "./EduApp";
//import LaunchScreen from "./common/LaunchScreen";

// Config
//import { serverURL, parseAppID } from "./env";

function setup(): ReactClass<{}> {
  console.disableYellowBox = true;
  //Parse.initialize(parseAppID);
  //Parse.serverURL = `${serverURL}/parse`;
  console.log("DEBUG!!! ");

  //FacebookSDK.init();
  //Parse.FacebookUtils.init();

  // TODO: Don't prevent fontScaling on iOS (currently breaks UI)
  Text.defaultProps.allowFontScaling = false;

  class Root extends React.Component {
    state: {
      isLoading: boolean,
      store: any
    };

    constructor() {
      super();
      this.state = {
        storeCreated: false,
        storeRehydrated: false,
        store: null
      };
    }

    componentDidMount() {
      configureStore(
        // rehydration callback (after async compatibility and persistStore)
        _ => this.setState({ storeRehydrated: true })
      ).then(
        // creation callback (after async compatibility)
        store => this.setState({ store, storeCreated: true })
      );
    }

    render() {
      //if (!this.state.storeCreated || !this.state.storeRehydrated) {
        //return <LaunchScreen />;
      //}
      return (
        <Provider store={this.state.store}>
          <EduApp />
        </Provider>
      );
    }
  }

  return Root;
}

module.exports = setup;
