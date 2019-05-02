chrome.storage.sync.get(['information'], (result) => {
  const allTD = document.querySelectorAll('td');
  let ids = [];

  allTD.forEach((id) => {
    const elements = {element: id, id: id.id};

    ids.push(elements)
  });

  Object.keys(result.information).forEach((item) => {
    ids.forEach((element) => {
      if (element.id.includes(item)) {
        element.element.innerHTML = result.information[item]
      }
    })
  });
});
