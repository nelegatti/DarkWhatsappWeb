document.addEventListener('DOMContentLoaded', function() {
  var communicationPort = chrome.runtime.connect();
  document.getElementById('popupBtn').addEventListener('click', function() {
      communicationPort.postMessage({
          'from': 'popup',
          'start': 'Y'
      });
  });
});