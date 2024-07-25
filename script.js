
document.addEventListener('DOMContentLoaded', () => {               
    const acakNomor = Math.floor(Math.random() * 10) + 1;           
    const form = document.getElementById('formlah');
    const masukan = document.getElementById('masukan');
    const submit = document.getElementById('submit');
    const container = document.querySelector('.container');

    submit.addEventListener('click', () => {
        const nilaiMasukan = masukan.value.trim();
        let jawabanDiv = document.querySelector('.jawaban');

        if (!jawabanDiv) {
            jawabanDiv = document.createElement('div');
            jawabanDiv.className = 'jawaban';
            container.appendChild(jawabanDiv);
        }

        if (isNaN(nilaiMasukan) || nilaiMasukan === '') {
            jawabanDiv.textContent = 'Jawaban anda gak valid';
        } else {
            const angkaMasukan = Number(nilaiMasukan);

            if (angkaMasukan === acakNomor) {
                jawabanDiv.textContent = 'Jawaban anda benar';
            } else if (angkaMasukan < acakNomor) {
                jawabanDiv.textContent = 'Jawaban anda kurang';
            } else {
                jawabanDiv.textContent = 'Jawaban anda lebih';
            }
        }
    });
});