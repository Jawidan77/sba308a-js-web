
export function displayMenu(menuItems) {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';
    menuItems.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('menu-item');
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: $${item.price}</p>
        `;
        menuContainer.appendChild(div);
    });
}

export function showMessage(message) {
    alert(message);
}
