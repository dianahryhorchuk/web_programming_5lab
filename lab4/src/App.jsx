import { useState, useEffect } from 'react';
import Footer from './Footer';
import Reviews from './Reviews';
import ContactForm from './ContactForm';
import './App.css'; // Підключаємо стилі для теми

export default function App() {
    const [theme, setTheme] = useState('light');

    // Автоматичне перемикання при завантаженні
    useEffect(() => {
        const hours = new Date().getHours();
        if (hours >= 7 && hours < 21) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, []);

    // Застосування CSS-класу до body
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <header style={{ backgroundColor: '#17365d', color: 'white', textAlign: 'center', padding: '40px 20px' }}>
                <h1 style={{ textTransform: 'uppercase', margin: '0 0 10px 0' }}>Діана Григорчук</h1>
                <button 
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    style={{ padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                </button>
            </header>

            <Reviews />
            <ContactForm />
            <Footer />
        </div>
    );
}