module.exports = {
  "Retrieve API (POST)": function (client) {
        var apiUrl = 'https://requestb.in/1e71xia1';
        var postData = {
          "args": {}, 
          "data": "", 
          "files": {}, 
          "form": {
            "comments": "deliver it before it gets cold", 
            "custemail": "terry@tibbs.com", 
            "custname": "Terry Tibbs", 
            "custtel": "0208 5679922", 
            "delivery": "20:30", 
            "size": "large", 
            "topping": [
              "bacon", 
              "cheese"
            ]
          },
          "headers": {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", 
            "Accept-Encoding": "gzip, deflate", 
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8", 
            "Cache-Control": "max-age=0", 
            "Connection": "close", 
            "Content-Length": "166", 
            "Content-Type": "application/x-www-form-urlencoded", 
            "Cookie": "_gauges_unique_month=1; _gauges_unique_year=1; _gauges_unique=1; _gauges_unique_hour=1; _gauges_unique_day=1", 
            "Host": "httpbin.org", 
            "Origin": "http://httpbin.org", 
            "Referer": "http://httpbin.org/forms/post", 
            "Upgrade-Insecure-Requests": "1", 
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
          }, 
          "json": null, 
          "origin": "5.70.160.167", 
          "url": "http://httpbin.org/post"
        };
        client.apiPost(apiUrl, postData, function (response) {
        console.log(response.body);
        var data = JSON.parse(response.body);
        console.log(data);
        client.assert.equal(response.statusCode, 200, "200 OK");
        client.end();
    });
  }
};
