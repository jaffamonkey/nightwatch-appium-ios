module.exports = {
    'Demo test Google' : function (client) {
        client
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .assert.title('Google')
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'rembrandt van rijn')
            .click('body')
            .waitForElementVisible('input[name=btnK]', 1000)
            .click('input[name=btnK]')
            .waitForElementVisible('#ires', 1000)
            .assert.containsText('#ires','Rembrandt - Wikipedia')
            .end();
    }
};