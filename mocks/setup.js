const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// mock document.getElementById('id').scrollHeight
Object.defineProperty(document, 'getElementById', {
  value () {
    return {
      'scrollHeight': 80
    }
  }
});