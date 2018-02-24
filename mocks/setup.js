const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
const { JSDOM } = require('jsdom');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

const win = new JSDOM('<!doctype html><html><body></body></html>');
const doc = win.window.document;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = win;
global.document = doc;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(win, global);