import { fetchMenu,sendMessage} from './api.js';
import { displayMenu, showMessage } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    const menuItems = await fetchMenu();
    if (menuItems) {
        displayMenu(menuItems);
    }
    console.log(menuItems);
});

document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const response = await sendMessage(name, email, message);
    if (response) {
        showMessage('Your message has been sent!');
    }
});
