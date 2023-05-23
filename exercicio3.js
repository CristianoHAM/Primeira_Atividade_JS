function personagemMorreu(saude,dano) {
    vida = saude - dano;

    if( vida <= 0){
      return 1;
    }else{
      return 0;
    }
  }
  
  document.write(`<br>O valor da vida é ${vida}`);
  let vida = 100;
  let resposta;
  resposta = personagemMorreu(vida, 50);
  document.write(`<br>O valor retornado da foção é  ${resposta}`);
  document.write(`<br>O valor da vida agora é ${vida}`);
  
  
  
  
  
  
  