function validateForm() {
    // Mengambil input dari Form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;

    // Cek validasi input
    if (name == "" || email == "" || address == "") {
        // Tampilkan alert kesalahan
        alert('Semua field harus diisi!');
        return false; // Mencegah form dikirim
    } else {
        // Tampilkan alert sukses
        alert('Form berhasil diisi!');
        return true; // Form dapat dikirim jika semua field diisi
    }
}
