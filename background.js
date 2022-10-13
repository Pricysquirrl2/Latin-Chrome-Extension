chrome.action.onClicked.addListener(async (tab) => {
  console.log('Extension started');
  chrome.scripting.executeScript(
    {
      target: {tabId: tab.id},
      files: ['content.js']
    })});

    
