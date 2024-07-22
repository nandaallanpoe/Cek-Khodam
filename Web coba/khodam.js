function cekKhodam() {
    const spirits = ["Macan Kumbang", "Menara Teratai", "Monas", "Jagung", "Kak Gem", "Macan Sumbing", "kudanil salto", "sate madura", "naga laut aseli jawa", "pace kobo kanaeru", "om anton", "putra kabupaten", "lumba lumba asli jawa", "pegawai kominfo", "tikus maulana"];
    const name = document.getElementById('nameInput').value.trim();
    
    if (name === "") {
        alert("Masukkan nama terlebih dahulu!");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * spirits.length);
    const khodam = spirits[randomIndex];
    
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `${name}, khodam Anda adalah ${khodam}`;
}
