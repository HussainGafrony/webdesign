let ul = document.getElementById('myList');
Array.from({ length: 100 }).forEach((_, index) => {
    let item = document.createElement('li');
    item.textContent = 'Item ' + (index + 1) + ': ';
    ul.appendChild(item);
});