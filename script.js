const scriptURL = 'https://script.google.com/macros/s/AKfycbzI5nYVOQANXmBwgZXViWKtmlG46Z4nZvQ6FJHESRVXeynkk9sVCwdJ8HuHPED74pVsCA/exec'; // Replace with your script URL

document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        date: document.getElementById('date').value,
        amount: document.getElementById('amount').value,
        category: document.getElementById('category').value,
        comments: document.getElementById('comments').value,
    };

  return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
        .setMimeType(ContentService.MimeType.JSON)
        .setContent(JSON.stringify({ status: "success" }))
        .setHeaders({
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type"
        });
});
