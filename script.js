//your code here!

document.addEventListener("DOMContentLoaded", function() {
  const list = document.getElementById("infi-list");

  function addItems(num) {
    for (let i = 0; i < num; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${list.children.length + 1}`;
      list.appendChild(listItem);
    }
  }

 
  addItems(10);

  list.addEventListener("scroll", function() {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      
      addItems(2);
    }
  });
});