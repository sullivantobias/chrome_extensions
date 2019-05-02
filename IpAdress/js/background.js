chrome.runtime.onInstalled.addListener(() => {
  getLocal()
});

const getLocal = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      chrome.storage.sync.set({'information': response})
    }
  };
  xhttp.open("GET", "http://ip-api.com/json", true);
  xhttp.send();
};