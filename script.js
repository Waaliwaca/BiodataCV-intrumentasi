/**
 * Fungsi untuk menampilkan section yang dipilih dan menyembunyikan yang lain.
 * @param {string} id - ID dari elemen section yang ingin ditampilkan ('cv' or 'portfolio').
 */
function showSection(id) {
    // Sembunyikan semua section utama
    document.querySelectorAll('.main-section').forEach(sec => {
        sec.style.display = 'none';
    });
    
    // Tampilkan section yang dipilih
    document.getElementById(id).style.display = 'block';
    
    // Hapus kelas 'active' dari semua link navigasi
    document.querySelectorAll('.navbar a').forEach(a => {
        a.classList.remove('active');
    });
    
    // Tambahkan kelas 'active' ke link navigasi yang diklik
    document.getElementById('nav-' + id).classList.add('active');
}

// Saat halaman pertama kali dimuat, tampilkan section CV secara default.
window.onload = function() {
    showSection('cv');
};
