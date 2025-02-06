$(document).ready(function () {
  $.getJSON("https://api.ipify.org?format=json",
    function (data) {
      var request = new XMLHttpRequest();
      request.open("POST", process.env.DISCORD_WEBHOOK_URL);
      request.setRequestHeader('Content-type', 'application/json');
      const payload = {
        "content": "A page is being accessed!",
        "embeds": [
          {
            "fields": [
              {
                "name": "Time",
                "value": Date()
              },
              {
                "name": "User-Agent",
                "value": window.navigator.userAgent
              },
              {
                "name": "IP address",
                "value": "[" + data.ip + "](https://ipinfo.io/" + data.ip + ")",
                "inline": true
              },
              {
                "name": "Path",
                "value": "[" + window.location.pathname + "](" + window.location.href + ")",
                "inline": true
              }
            ]
          }
        ]
      }
      request.send(JSON.stringify(payload));
    })
});
