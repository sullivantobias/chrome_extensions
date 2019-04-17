/**
 * Bookmarks interaction
 */

class Bookmarks {
  constructor() {
    this.listeners();
  }

  listeners() {
    chrome.storage.local.get('bookmarks', data => {
      this.fillContent(data)
      this.redirect();

      chrome.storage.onChanged.addListener((item) => {
        const counter = --data.bookmarks.count
        let contentTabs = document.querySelector('#bookmarks');
        contentTabs.innerHTML = `Bookmarks: ${counter}`;
      })
    });
  }

  fillContent (data) {
    let contentTabs = document.querySelector('#bookmarks');
    let title = document.querySelector('#title');
    contentTabs.innerHTML = `Bookmarks: ${data.bookmarks.count}`;
  
    for (let test in data.bookmarks.title) {
      const li = document.createElement('li');
      const remove = document.createElement('button');
      const target = document.createElement('button');
      target.setAttribute('data-redirect', data.bookmarks.title[test].url)
      remove.classList.add('remove');
      remove.innerHTML = 'Remove';
      target.classList.add('browse');
      target.innerHTML = 'Browse';
      remove.setAttribute('data-id', data.bookmarks.title[test].id);
      li.innerText = data.bookmarks.title[test].title;
      title.appendChild(li);
      li.appendChild(target);
      li.appendChild(remove);
  
      this.removeBookMark(data.bookmarks.title[test].id);
    }
  
  };

  removeBookMark (id) {
    document.querySelectorAll('.remove').forEach((item) => {
      item.addEventListener('click', () => {
        if (id === item.getAttribute('data-id')) {
          chrome.bookmarks.remove(id);
          item.parentElement.remove();
        }
      })
    });
  };

  redirect () {
    document.querySelectorAll('.browse').forEach((item) => {
      item.addEventListener('click', () => {
        window.open(item.getAttribute('data-redirect'), '_blank');
      })
    });
  }
}

new Bookmarks();

