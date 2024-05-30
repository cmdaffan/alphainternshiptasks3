document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const connectTwitterButton = document.getElementById('connect-twitter');
    const connectFacebookButton = document.getElementById('connect-facebook');
    const connectInstagramButton = document.getElementById('connect-instagram');

    // Mock user login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginSection.style.display = 'none';
        dashboardSection.style.display = 'block';
    });

    // Mock API calls
    const fetchTwitterFeed = () => {
        return [
            { id: 1, content: 'This is a tweet.' },
            { id: 2, content: 'Another tweet!' }
        ];
    };

    const fetchFacebookFeed = () => {
        return [
            { id: 1, content: 'This is a Facebook post.' },
            { id: 2, content: 'Another Facebook post!' }
        ];
    };

    const fetchInstagramFeed = () => {
        return [
            { id: 1, content: 'This is an Instagram post.' },
            { id: 2, content: 'Another Instagram post!' }
        ];
    };

    const renderFeed = (feedElement, feedData) => {
        const ul = feedElement.querySelector('ul');
        ul.innerHTML = '';
        feedData.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.content;
            ul.appendChild(li);
        });
    };

    connectTwitterButton.addEventListener('click', () => {
        const feedData = fetchTwitterFeed();
        renderFeed(document.getElementById('twitter-feed'), feedData);
    });

    connectFacebookButton.addEventListener('click', () => {
        const feedData = fetchFacebookFeed();
        renderFeed(document.getElementById('facebook-feed'), feedData);
    });

    connectInstagramButton.addEventListener('click', () => {
        const feedData = fetchInstagramFeed();
        renderFeed(document.getElementById('instagram-feed'), feedData);
    });
});
