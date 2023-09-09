const chuvaDeMeteoros = [
    { nome: 'Alfa Centaurídeos', declinacao: -59},
    { nome: 'Gama Normídeos', declinacao: -50},
    { nome: 'Pi Pupídeos', declinacao: -45},
    { nome: 'Líridas', declinacao: 34},
    { nome: 'Eta Aquáridas', declinacao: -1},
    { nome: 'Eta Líridas', declinacao: 44},
    { nome: 'Bootídeos de Junho', declinacao: 48},
    { nome: 'Alfa Capricornídeos', declinacao: -10},
    { nome: 'Delta Aquáridas do Sul', declinacao: -16},
    { nome: 'Piscis Austrinídeos', declinacao: -30},
    { nome: 'Perseidas', declinacao: 58},
]

const hemisferioNorte = chuvaDeMeteoros.filter((chuva) => {
    return chuva.declinacao >= 0;
});

const hemisferioSul = chuvaDeMeteoros.filter((chuva) => {
    return chuva.declinacao < 0;
});

console.log(hemisferioNorte);
console.log(hemisferioSul);

const hj = new Date()



console.log(hj.getDay());

chuvaDeMeteoros.splice(0, 7)

console.log(chuvaDeMeteoros);

const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
    { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
  ];
  
  const totalVolume = itensCarrinho.reduce( (total, itemCarrinho) => {
    return(total += itemCarrinho.qnt);
  }, 0);
  
  
  console.log(totalVolume);

const dataAtual = new Date();

const ano = dataAtual.getFullYear();

const proximoAno = ano + 1

console.log(proximoAno);

const receitas = [
    { nome: 'Misto quente', tempoPreparo: 5 },
    { nome: 'Omelete', tempoPreparo: 10  },
    { nome: 'Pão de queijo', tempoPreparo: 20  },
    { nome: 'Pizza', tempoPreparo: 60 },
    { nome: 'Hamburguer', tempoPreparo: 60 },
  ];
  
  const receitasRapidas = 
  receitas.filter
  ( receita => receita.tempoPreparo <= 10);
  
  for(const receita of receitasRapidas){
    console.log(receita.nome);
  }

  let nome = 'lucas'

  const palavra = ' é um programador'