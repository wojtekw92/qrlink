function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

function renderLink(link) {
  document.getElementById('link').textContent = link;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    renderLink(url);
    var qrcode = new QRCode("qrCode", {
      text: url,
      width: 128,
      height: 128,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });

  });
});
