
document.addEventListener('DOMContentLoaded', () => {           //buat event listener dengan membuat js berjalan setelah dokumen dimuat. kemudia buatfungsi anonim   
    const acakNomor = Math.floor(Math.random() * 10) + 1;       //inisiasi variabel denga fungsi math untuk membuat nomor random
    const form = document.getElementById('formlah');            //inisiasi form dengan mengambil elemen dengan id formlah
    const masukan = document.getElementById('masukan');         //insiasi masukan dengan mengambil elemen dengan id masukan
    const submit = document.getElementById('submit');           //inisiasi submit degnan mengambil elemen dengan id submit
    const container = document.querySelector('.container');     //inisiasi container dengan mengambil selector dengan class container

    submit.addEventListener('click', () => {                    //tambahkan event listener click di submit. kemudian buat fungsi anoniom
        const nilaiMasukan = masukan.value.trim();              //inisiasi nilaiMasukan dengan mengamb value dari masukan, kemudian hapus spasi
        let jawabanDiv = document.querySelector('.jawaban');    //inisiasi jawabaDiv dengan mengambil selector dengan class jawaban

        if (!jawabanDiv) {                                      //jika jawanbanDiv tidak ada / Null
            jawabanDiv = document.createElement('div');         //buat jawaban div dengan membuat elemen div
            jawabanDiv.className = 'jawaban';                   //buat className jawaban pada jawabanDiv
            container.appendChild(jawabanDiv);                  //masukkan jawabanDiv sebagai child container
        }

        if (isNaN(nilaiMasukan) || nilaiMasukan === '') {       //isNan merupakan fungsi js untu mengecek apakah nilai merupakan number. jika nila bukan angka  nilai kosong
            jawabanDiv.textContent = 'Jawaban anda gak valid';  //beri jawabanDiv dengan textContent "jawaban gakvalid"
            masukan.value = '';                                 //kemudian atur value masukan dengan string kosong
        } else {                                                //kondisi ke 3
            const angkaMasukan = Number(nilaiMasukan);          //inisiasi angkaMasukan dengan Number. Number merupakan fungsi bawaan js untuk mengkonversi berbagai nilai menjadi data angka

            if (angkaMasukan === acakNomor) {                   //buat kondisi, jika kondisi true maka
                jawabanDiv.textContent = 'Jawaban anda benar';  //tambahkan jawaban anda benar di jawabanDiv
                masukan.value = "";
                acakNomor = Math.floor(Math.random() * 10) + 1;
            } else if (angkaMasukan < acakNomor) {              //jika nomor kurang
                jawabanDiv.textContent = 'Jawaban anda kurang'; //tambahkan jawaban anda kurang di jawabanDiv
                masukan.value = "";
            } else {                                            //sebaliknya
                jawabanDiv.textContent = 'Jawaban anda lebih';  //tambahkan jawaban anda lebih di jawabanDiv
                masukan.value = "";
            }
        }
    });
});