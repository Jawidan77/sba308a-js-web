const background = document.getElementById('img');
export async function fetchMenu() {
    try {
        // const url = ""
        const response = await fetch('https://foodish-api.com/api');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
background.style.backgroundImage = `url(${data.image})`
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

export async function sendMessage(name, email, message) {
    try {
        const response = await fetch('https:', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*", 'Access-Control-Allow-Headers': "*"
            },
            body: JSON.stringify({ name, email, message })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
