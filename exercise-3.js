var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca


function dataHandling(input) {
    for(var i=0;i<input.length;i++) {
        console.log('Nomor ID: ' + input[i][0] +'\n'+'Nama Lengkap: ' + input[i][1] +'\n'+ 'TTL: ' + input[i][2] +' '+ input[i][3] + '\n'+'Hobi: ' + input[i][4] + '\n');
    }
}

dataHandling(input);