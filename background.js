chrome.runtime.onConnect.addListener(function (communicationPort) {
  communicationPort.onMessage.addListener(function (message) {
    if (message.from && message.from === 'popup' && message.start && message.start === 'Y') {
      chrome.tabs.executeScript(null, {
        code: "document.body.className = \"web dark\";"
      });
    }
  });
});