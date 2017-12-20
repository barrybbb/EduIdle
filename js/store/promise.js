"use strict";

import { testMenuEnabled } from "../env";

function warn(error) {
  if (testMenuEnabled) {
    console.warn(error.message || error);
  } // only log promise failures when debug menu is enabled
  throw error; // To let the caller handle the rejection
}

module.exports = store => next => action =>
  typeof action.then === "function"
    ? Promise.resolve(action).then(next, warn)
    : next(action);
