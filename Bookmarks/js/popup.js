/**
 * Popup interaction
 */
chrome.storage.sync.get('bookmarks', data => {
  fillContent(data)
});

const removeBookMark = (id) => {
  document.querySelectorAll('.remove').forEach((item) => {
    item.addEventListener('click', () => {
      chrome.bookmarks.remove(id);
      if (id === item.getAttribute('data-id')) {
        item.parentElement.remove();
      }
    })
  });
};

const fillContent = data => {
  let contentTabs = document.querySelector('#bookmarks');
  let title = document.querySelector('#title');
  contentTabs.innerHTML = `Bookmarks: ${data.bookmarks.count}`;

  for (let test in data.bookmarks.title) {
    const li = document.createElement('li');
    const target = document.createElement('button');
    target.classList.add('remove');
    target.innerHTML = 'Remove';
    target.setAttribute('data-id', data.bookmarks.title[test].id);
    li.innerText = data.bookmarks.title[test].title;
    title.appendChild(li);
    li.appendChild(target);

    removeBookMark(data.bookmarks.title[test].id);
  }

};