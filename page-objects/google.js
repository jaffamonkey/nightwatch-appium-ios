module.exports = {
  url: 'https://www.google.com',
  elements: {
    searchBar: {
      selector: 'input[name="q"]'
    },
    submit: {
      selector: 'input[name="q"]',
      
    }
  },
  commands: [{
    submit() {
      this.api.pause(1000);

      return this.click('@submit');
    }
  }]
};


