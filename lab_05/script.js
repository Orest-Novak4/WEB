document.addEventListener('DOMContentLoaded', () => {
    const lightThemeBtn = document.getElementById('light-theme-btn');
    const darkThemeBtn = document.getElementById('dark-theme-btn');
    const body = document.body;

    lightThemeBtn.addEventListener('click', () => {
        body.style.backgroundColor = '#ffffff'; 
        body.style.color = '#2c3e50'; 
    });

    darkThemeBtn.addEventListener('click', () => {
        body.style.backgroundColor = '#2c3e50'; 
        body.style.color = '#ecf0f1'; 
    });
});
