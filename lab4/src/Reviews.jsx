import { useState, useEffect } from 'react';

export default function Reviews() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/9/comments')
            .then(response => response.json())
            .then(data => setComments(data));
    }, []);

    return (
        <div style={{ padding: '0 20px' }}>
            <h2>Відгуки:</h2>
            {comments.map(c => (
                <div key={c.id}>
                    <p><b>{c.name}</b> ({c.email})<br/>{c.body}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}