import { useState, useEffect } from 'react';

export default function Footer() {
    const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

    useEffect(() => {
        // Зберігаємо дані в localStorage
        localStorage.setItem('os', navigator.platform);
        localStorage.setItem('browser', navigator.userAgent);
        
        // Зчитуємо дані у стан
        setSysInfo({
            os: localStorage.getItem('os'),
            browser: localStorage.getItem('browser')
        });
    }, []);

    return (
        <footer style={{ marginTop: '40px', borderTop: '1px solid gray', padding: '20px', textAlign: 'center' }}>
             <p><b> Hryhorchuk Diana</b></p>
            <p><b>Системна інформація (з localStorage):</b></p>
            <p><b>ОС:</b> {sysInfo.os}</p>
            <p><b>Браузер:</b> {sysInfo.browser}</p>
        </footer>
    );
}