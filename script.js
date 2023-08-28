const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
        name: 'Our Products',
        id: 'product',
        child: [
            { name: 'Product 1', id: 'p1' },
            { name: 'Product 2', id: 'p2' },
            { name: 'Product 3', id: 'p3' },
            { name: 'Product 4', id: 'p4' },
        ],
    },
    { name: 'Contact Us', id: 'contact' },
];

const topMenu = document.getElementById('top-menu');

function createMenu(menuData, parent) {
    const ul = document.createElement('ul');

    menuData.forEach((item) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.name;
        a.href = `#${item.id}`;
        li.appendChild(a);

        if (item.child && item.child.length > 0) {
            li.appendChild(createMenu(item.child, li));
        }

        ul.appendChild(li);
    });

    parent.appendChild(ul);
}

createMenu(navbar, topMenu);
