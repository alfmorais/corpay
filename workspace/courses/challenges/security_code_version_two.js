const codigo = gets();

let temMaiuscula = false;
let temDigito = false;

for (let i = 0; i < codigo.length; i++) {
    const caractere = codigo[i];

    if (caractere >= "A" && caractere <= "Z") {
        temMaiuscula = true;
    }

    if (caractere >= "0" && caractere <= "9") {
        temDigito = true;
    }
}

if (codigo.length >= 6 && temMaiuscula && temDigito) {
    print("seguro");
} else {
    print("inseguro");
}