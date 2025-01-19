const scriptURL = 'https://script.google.com/macros/s/AKfycbzI5nYVOQANXmBwgZXViWKtmlG46Z4nZvQ6FJHESRVXeynkk9sVCwdJ8HuHPED74pVsCA/exec'; // Replace with your script URL

document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        date: document.getElementById('date').value,
        amount: document.getElementById('amount').value,
        category: document.getElementById('category').value,
        comments: document.getElementById('comments').value,
    };

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();
        if (result.status === 'success') {
            alert('Data logged successfully!');
        } else {
            alert('Failed to log data.');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});