// 1. Зберігання даних у браузері (LocalStorage)
localStorage.setItem('userAgent', navigator.userAgent);
localStorage.setItem('platform', navigator.platform);
localStorage.setItem('language', navigator.language);
localStorage.setItem('screen', `${window.screen.width}x${window.screen.height}`);

document.getElementById('system-info').innerHTML = `
    <div style="text-align: center; font-family: Arial, sans-serif;">
        <p><b>Hryhorchuk Diana</b></p>
        <p><b>Системна інформація (з localStorage):</b></p>
        <p><b>User Agent (ОС та браузер):</b> ${localStorage.getItem('userAgent')}</p>
        <p><b>Платформа:</b> ${localStorage.getItem('platform')}</p>
        <p><b>Мова браузера:</b> ${localStorage.getItem('language')}</p>
        <p><b>Роздільна здатність:</b> ${localStorage.getItem('screen')}</p>
    </div>
`;

// 2. Відображення динамічного вмісту 
fetch('https://jsonplaceholder.typicode.com/posts/9/comments')
    .then(response => response.json())
    .then(data => {
        let html = "";
        data.forEach(comment => {
            html += `<p><b>${comment.name}</b> (${comment.email})<br>${comment.body}</p><hr>`;
        });
        document.getElementById('reviews').innerHTML = html;
    });

// 3. Надсилання форми зворотного зв'язку (через 60 секунд)
setTimeout(function() {
    document.getElementById('modal').classList.add('open');
}, 60000);

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('open');
});

// 4. Перехід на нічний/денний режим
const themeBtn = document.getElementById('themeBtn');
const hours = new Date().getHours();

// Автоматичне перемикання при завантаженні
if (hours >= 7 && hours < 21) {
    document.body.className = "light";
    themeBtn.innerText = "Switch to dark mode";
} else {
    document.body.className = "dark";
    themeBtn.innerText = "Switch to light mode";
}

// Ручне перемикання теми
themeBtn.addEventListener('click', function() {
    if (document.body.className === "light") {
        document.body.className = "dark";
        themeBtn.innerText = "Switch to light mode";
    } else {
        document.body.className = "light";
        themeBtn.innerText = "Switch to dark mode";
    }
});