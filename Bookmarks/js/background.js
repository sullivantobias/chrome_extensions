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
  chrome.bookmarks.getTree(bookmarksTree => {
    chrome.storage.local.set({
      bookmarks: {
        count: bookmarksTree[0].children[0].children.length,
        title: bookmarksTree[0].children[0].children
      }
    })
  });
};