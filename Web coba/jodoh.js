document.getElementById('compatibilityForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const yourName = document.getElementById('nameInput').value.trim();
    const partnerName = document.getElementById('partnerInput').value.trim();

    if (yourName === '' || partnerName === '') {
        alert('Isi dulu wir');
        return;
    }

    // Calculate compatibility score (random for demo purposes)
    const compatibilityScore = Math.floor(Math.random() * 101);
    
    // Determine the message based on the score
    let message;
    if (compatibilityScore >= 80) {
        message = "Cocok banget slebew";
    } else if (compatibilityScore >= 60) {
        message = "Cukup cocok (tapi boong)";
    } else {
        message = "Sebaiknya jangan terlalu berharap wir";
    }

    // Display result with animation
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>${yourName} and ${partnerName}</p>
        <p>Compatibility Score:</p>
        <span>${compatibilityScore}%</span>
        <p class="message">${message}</p>
    `;
});
