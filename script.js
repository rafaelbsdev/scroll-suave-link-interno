function Carro() {
  this.marca = "Marca";
  this.preco = 0;
}

const honda = new Carro();
honda.marca = "Honda";
honda.preco = 4000;

const fiat = new Carro();
fiat.marca = "Fiat";
fiat.preco = 3000;

console.log(honda.preco);

// OUTRA FORMA DE FAZER É
function Carros(marcas, precos) {
  this.marca1 = marcas;
  this.preco1 = precos;
}

const honda1 = new Carros("Honda1", 5000);
const fiat1 = new Carros("Fiat1", 7000);
