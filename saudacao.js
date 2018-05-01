function Pessoa(nomeCompleto, Idade, corFavorita) {
    this.nome = nomeCompleto,
	this.idade = Idade
    this.corFav = corFavorita,
    this.saudacao = function() {
        console.log("Olá o meu nome é " + this.nome + ", tenho " + this.idade + " anos e a minha cor favorita é " + this.corFav);
    }
}

var fabio = new Pessoa("Fabio Franco", "17", "azul");
fabio.saudacao();

var andreia = new Pessoa("Andreia Rodrigues", "27", "amarelo");
andreia.saudacao();

var catia = new Pessoa("Catia Andrade", "25", "cor de rosa");
catia.saudacao();