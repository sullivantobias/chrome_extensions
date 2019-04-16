/**
 * On Installed
 */

chrome.runtime.onInstalled.addListener(() => {
    chrome.bookmarks.getTree( bookmarks => {
        chrome.storage.sync.set({bookmarks: bookmarks[0].children[0].children.length});
    });
});