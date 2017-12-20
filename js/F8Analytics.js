import { AppEventsLogger } from "react-native-fbsdk";

export default class F8Analytics {
  static logEvent(name, value, opts) {
    AppEventsLogger.logEvent(name, value, opts);
  }
}
