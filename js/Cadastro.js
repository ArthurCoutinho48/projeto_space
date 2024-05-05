<html Lang="en">
    <body>
        <form class="box">
            <input type="text" name="telefone" i="idTelefone"
                onkeydown="ajustaTelefone(this)"
                onkeypress="ajustaTelefone(this)"
                onkeyup="ajustaTelefone(this)"
                maxLength="15" required></input>

        </form>

    </body>

    <body>
        function validaCEP(cep) {
            // Remove todos os caracteres que não sejam dígitos
            cep = cep.replace(/\D/g, '');

            var url = 'https://viacep.co.br/ws/' + cep + '/json/'

        fetch(url)
        .then(function(response) {
                return response.json();

            })
        .then(function(data) {


        // Verifica se o CEP possui exatamente 8 dígitos
        if (cep.length !== 8) {
        return false;


      }

        return true;
      }

        // Testando a função
        console.log(validaCEP('12345678')); // Deve retornar true
        console.log(validaCEP('12345-678')); // Deve retornar true
        console.log(validaCEP('1234567')); // Deve retornar false
        console.log(validaCEP('123456789')); // Deve retornar false
    </body>

</html>
