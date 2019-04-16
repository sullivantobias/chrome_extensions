/**
 * Popup interaction
 */

chrome.storage.sync.get('numberOfTabs', data => {
    let contentTabs = document.querySelector('#tabs');
    contentTabs.innerHTML = `Tabs: ${data.numberOfTabs}`;
});