const scriptURL = 'https://script.googleusercontent.com/macros/echo?user_content_key=BMAmcsqQJNPozMfl6JZ31dRvZtRoCrq0fcNUYNtI-j_MJhPpkC6b0CDG1dKBX4UNRcsrp4nvx3JevVV_odY7xvjYp5HliZkom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDpXdHUTYYmN2TXKmbn62VXQBgfBJnccapM2bKtyJbmYbt28UZdv4EM-JOYN8SgV34JMz-B503NyLVKgRsbE2LHJPxyAKTLQNtz9Jw9Md8uuAQ&lib=MnDRMshGbi1MoqoVJwMQV8loeeCS1ka4Q'
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
