chrome.action.onClicked.addListener(async (tab) => {

  chrome.tabs.sendMessage(tab.id, { text: "" }, function (msg) {
    msg = msg || {};

    console.log("message status received from content script: ", msg);
  });

  try {
    console.log('executing script');

    
    const result = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["./dist/index.js"],
    }); //injects foreground script to webpage

    await chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["./dist/index.css"],
    });
  } catch (ex) {
    console.error(ex);
  }
});
