function showContent(section) {
    const contentDiv = document.getElementById('content');
    let content = '';

    switch (section) {
        case 'home':
            content = '<h1>Home</h1><p>This is the home page.</p>';
            break;
        case 'about':
            content = '<h1>About</h1><p>This is the about page.</p>';
            break;
        case 'resources':
            content = '<h1>Resources</h1><p>This is the resources page.</p>';
            break;
        case 'feedback':
            content = '<h1>Feedback</h1><p>This is the feedback page.</p>';
            break;
        default:
            content = '<h1>Welcome!</h1><p>Select a menu item to see the content.</p>';
    }

    contentDiv.innerHTML = content;
}