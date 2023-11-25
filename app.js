function listar(){
  let url = `./back/listar.php`;
  let req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send();
  let resposta = JSON.parse(req.responseText);

  console.log(resposta);

  console.log(req.responseText);

  let t = document.getElementById(`comentarios`);
  t.innerHTML='';
  for (i in resposta) {
    t.innerHTML += `<tr>
      <th scope="row"><img src="dep1.png" height="100" width="100" class="img-fluid" alt="Imagem responsiva"></th>
      <td>${resposta[i].nome}</td>
      <td>"${resposta[i].descricao}"</td>
    </tr>`;
  }
  
}

function adicionar() {
  let url = './back/inserir.php'; 
  document.getElementById('id_comentario').value = '';
  document.getElementById('nome').value = '';
  document.getElementById('descricao').value = '';

  let req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send();
  let res = JSON.parse(req.responseText);
  console.log(res);
}


function selecionar(id_comentario){
  let url = `./back/selecionar?id_comentario=${id_comentario}`;
  let req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send();

  let res = JSON.parse(req.responseText);

  document.getElementById('id_comentario').value = res[0].id_comentario;
  document.getElementById('nome').value = res[0].nome;
  document.getElementById('descricao').value = res[0].descricao;
}

function salvar(){
  let id_comentario = document.getElementById('id_comentario').value;
  let nome = document.getElementById('nome').value;
  let descricao = document.getElementById('descricao').value;

  let url;

  if(id_comentario == ''){
      url = `./back/inserir.php?id_comentario=${id_comentario}&nome=${nome}&descricao=${descricao}`;

  }
  let req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send();
  let res = JSON.parse(req.responseText);
  console.log(res);
  listar();
}

function enviar(){;
  let email = encodeURIComponent(document.getElementById('email').value);
  let solicitacao = document.getElementById('solicitacao').value;

  let url;

  url = `./back/inserir_orcamento.php?email=${email}&solicitacao=${solicitacao}`;


  let req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send();
  let res = JSON.parse(req.responseText);
  console.log(res);
  listar();
}