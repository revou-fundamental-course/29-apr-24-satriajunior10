document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Menghentikan pengiriman formulir secara default

        // Panggil fungsi validasi saat formulir disubmit
        validation();
    });
});

function validation() {
    let name = document.getElementById('name').value;   
    let email = document.getElementById('email').value;   
    let question = document.getElementById('question').value;   

    // Validasi input
    if (name === '' || name === null || email === '' || email === null || question === '' || question === null) {
        alert("Please fill in all fields.");
    } else {
        // Redirect ke halaman awal jika formulir tervalidasi
        window.location.href = "index.html"; // Ganti "index.html" dengan halaman awal Anda
    }
}
