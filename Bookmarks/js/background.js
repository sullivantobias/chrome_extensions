/**
 * On Installed
 */

chrome.runtime.onInstalled.addListener(() => {
  updateBookmarks();
  chrome.bookmarks.onCreated.addListener(() => {
    updateBookmarks();
  });
  chrome.bookmarks.onRemoved.addListener(() => {
    updateBookmarks();
  });
});

const updateBookmarks = () => {
  chrome.bookmarks.getTree(bookmarks => {
    chrome.storage.sync.set({
      bookmarks: {
        count: bookmarks[0].children[0].children.length,
        title: bookmarks[0].children[0].children
      }
    })
  });
};