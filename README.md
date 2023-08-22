# Eletro-Moderna-Front--Angular-16

## Front em desenvolvimento, está com a estrutura principal funcionando, para adição de cadastro de cliente via form.
Conectado provisoriamente com um back-end teste, ainda está sendo refatorado para receber uma lista de endereço e contatos 

Para teste utilizar o Back-and local executado via terminal, com as  seguintes dados em Json.

``
{
  "clientes": [
    {
      "id": 2,
      "nome": "Paulo Miquiles",
      "email": "paulo@email.com",
      "documento": "985623147528925",
      "dataNascimento": "16/07/2022",
      "contato": {
        "ddd": "81",
        "telefone": "999999999"
      },
      "endereco": {
        "rua": "SA",
        "numero": "333",
        "cep": "54000000",
        "bairro": "CJS",
        "cidade": "Recife",
        "uf": "PE"
      }
    },
    {
      "nome": "BRUNO DE OLIVEIRA Silva",
      "email": "brunodeoliveiraalcantara@gmail.com",
      "documento": "11111111111111",
      "dataNascimento": "1993-02-21",
      "contato": {
        "ddd": "",
        "telefone": "81987384283"
      },
      "endereco": {
        "rua": "",
        "numero": "",
        "cep": "51300000",
        "bairro": "",
        "cidade": "Recife",
        "uf": ""
      },
      "id": 3
    },
    {
      "nome": "Bruno Alcântara",
      "email": "brunodeoliveiraalcantara@gmail.com",
      "documento": "822565156",
      "dataNascimento": "1999-07-21",
      "contato": {
        "ddd": "",
        "telefone": "81985190095"
      },
      "endereco": {
        "rua": "",
        "numero": "",
        "cep": "51280400",
        "bairro": "",
        "cidade": "Recife",
        "uf": ""
      },
      "id": 4
    }
  ]
}
``
### Comando para a execusão do back-end in terminal:

``
json-server --watch db.json
``
