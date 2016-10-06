const jsdom = require("jsdom");

/* JSDOM Setup */

var exposedProperties = ['window', 'navigator', 'document'];

global.window = jsdom.jsdom('<html> <head> </head> <body> <div id="sandbox"></div> </body> </html>').defaultView;
global.navigator = global.window.navigator;
global.document = global.window.document;
global.addEventListener = global.window.addEventListener;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});
global.navigator = {
  userAgent: 'node.js'
};
global.React = require("react");
global.ReactDOM = require("react-dom");
