chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
	if(!tab.url.includes('youtube.com')) return;
	chrome.scripting.insertCSS({target: { tabId }, css: '[is-shorts] { display: none; }'});
});
