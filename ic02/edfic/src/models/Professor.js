// src/models/Professor.js

class Professor {
    constructor(nome = '', email='', sexo = '', idade = 0, matricula = '') {        
        this.nome = nome;
        this.email = email;
        this.sexo = sexo;
        this.idade = idade;
        this.matricula = matricula;
    }
}

export default Professor;
