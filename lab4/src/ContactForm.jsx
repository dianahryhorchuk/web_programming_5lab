import { useState, useEffect } from 'react';

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Таймер на 1 хвилину
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000); 

        return () => clearTimeout(timer);
    }, []);

    // Умовний рендеринг: якщо false, нічого не рендериться
    if (!isOpen) return null; 

    return (
        <div style={{ position: 'fixed', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', background: '#ccc', color: 'black', padding: '20px', borderRadius: '8px' }}>
            <h3>Форма зворотного зв'язку</h3>
            <form action="https://formspree.io/f/mzeegqrv" method="POST">
                <input name="name" placeholder="Ім'я" required /><br /><br />
                <input type="email" name="email" placeholder="Email" required /><br /><br />
                <input type="tel" name="phone" placeholder="Номер телефону" required /><br /><br />
                <textarea name="message" placeholder="Поле для тексту" required></textarea><br /><br />
                <button type="submit">Надіслати</button>
                <button type="button" onClick={() => setIsOpen(false)}>Закрити</button>
            </form>
        </div>
    );
}