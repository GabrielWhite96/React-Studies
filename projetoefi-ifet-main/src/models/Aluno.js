class Aluno {
  constructor(nome = '', email = '', sexo = '', idade = '', matricula = ' ') {
    this.nome = nome;
    this.email = email;
    this.sexo = sexo;
    this.idade = idade;
    this.matricula = matricula; 
  }
}

export default Aluno;