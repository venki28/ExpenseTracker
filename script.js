const scriptURL = 'https://script.google.com/macros/s/AKfycbykvhmkmkb8GBDsGD4wUoJxPvzcid9Gw5mcDx_1WTiqrqSJUW5YTQQTlUSgzVjMAFTLvw/exec'
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
          headers: { 'Content-Type': 'application/json' }
        });

        const result = await response.json();
        if (result.status === "success") {
          alert('Expense added successfully!');
        } else {
          alert('Failed to add expense.');
        }
      } catch (error) {
        console.error('Error!', error);
        alert('Error adding expense.');
      }
});
