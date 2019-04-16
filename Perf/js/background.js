/**
 * On Installed
 */

chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.query({windowType:'normal'}, function(tabs) {
        chrome.storage.sync.set({numberOfTabs: tabs.length});
    });
});