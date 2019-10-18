'use strict';

function list(data) {
  let ul = document.createElement('ul');

  for ( const dat in data ) {
    let li = document.createElement('li');
    li.textContent = dat;

    if (data[dat] && typeof data[dat] === 'object ) {
       li.append(list(data[dat]));
    }

    ul.append(li);
  }

  return ul;
}

function createTree (container, data) {
  container.append(list(data));
}

let container = document.getElementById('container');
let data = {
  "fish": {
    "trout": {},
    "salmon": {}
  },

  "trees": {
    "huge": {
      "sequoia": {},
      "oak": {}
    },
    "flower-tree": {
      "apple-tree": {},
      "magnolia": {}
    }
  }
};

createTree(container, data);
