const codigo = gets();

let digitos = 0;
let valido = true;

if (codigo.length !== 8) valido = false;
if (codigo[0] !== "S") valido = false;
if (codigo[7] !== "X") valido = false;

for (let i = 1; i < 7; i++) {
    const c = codigo[i];

    if (c >= "0" && c <= "9") {
        digitos++;
    } else if (!(c >= "A" && c <= "Z")) {
        valido = false;
    }
}

if (digitos !== 3) valido = false;

print(valido ? "ACESSO LIBERADO" : "ACESSO NEGADO");