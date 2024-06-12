

function preencherEndereco(v) {
    var cep = v.value;

    cep = cep.replace(/\D/g, '');

    if (cep.length === 8) {
      var url = 'https://viacep.com.br/ws/' + cep + '/json/';

      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          if (!data.erro) {
            document.getElementById('logradouro').value = data.logradouro;
            document.getElementById('bairro').value =data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('uf').value = data.uf;
        }
    })
        .catch(function(error) {
          console.log('Ocorreu um erro:', error);
        });
    } 
  }

 