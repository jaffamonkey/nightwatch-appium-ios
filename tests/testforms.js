module.exports = {
    'Demo test form authentication' : function (client) {
        client
            .url('http://the-internet.herokuapp.com/login')
            //.click('a*=Form Authentication')
            .setValue('#username', 'tomsmith')
            .setValue('#password', 'SuperSecretPassword')
            .click('.radius')
            .assert.containsText('#flash','Your password is invalid!')
            .setValue('#username', 'tomsmith')
            .setValue('#password', 'SuperSecretPassword!')
            .click(".radius")
            .assert.containsText('#flash','You logged into a secure area!')
            .assert.containsText('h4.subheader','Welcome to the Secure Area. When you are done click logout below.')
            .click("i.icon-2x.icon-signout")
            .assert.containsText('#flash','You logged out of the secure area!')
            .end();
    }
};
