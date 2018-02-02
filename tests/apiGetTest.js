module.exports = {
    "Retrieve API (GET)": function (client) {
          var apiUrl = 'http://httpbin.org/get';
      client.apiGet(apiUrl, function (response) {
        console.log(response.body);
        var data = JSON.parse(response.body);
        console.log(data.url + ' from origin ' + data.origin);
        client.assert.equal(response.statusCode, 200, "200 OK");
        client.end();
      });
    }
  };
  