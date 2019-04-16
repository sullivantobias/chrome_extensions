/**
 * Popup interaction
 */

chrome.storage.sync.get('bookmarks', data => {
    let contentTabs = document.querySelector('#bookmarks');
    contentTabs.innerHTML = `Bookmarks: ${data.bookmarks}`;
});