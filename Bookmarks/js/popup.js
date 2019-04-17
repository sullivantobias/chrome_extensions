/**
 * Popup interaction
 */
chrome.storage.local.get('bookmarks', data => {
  fillContent(data)

  chrome.storage.onChanged.addListener(() => {
    const counter = --data.bookmarks.count
    let contentTabs = document.querySelector('#bookmarks');
    contentTabs.innerHTML = `Bookmarks: ${counter}`;
  })
});


const removeBookMark = id => {
  document.querySelectorAll('.remove').forEach((item) => {
    item.addEventListener('click', () => {
      if (id === item.getAttribute('data-id')) {
        chrome.bookmarks.remove(id);
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