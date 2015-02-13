# Gerador e Validador de CPFs

A ferramenta pode ser acessada pelo link: [http://tiagoporto.github.io/gerador-validador-cpf/](http://tiagoporto.github.io/gerador-validador-cpf/).

Este foi um dos meus primeiros exercícios aprendendo PHP, depois de um bom tempo resolvi converter o código para JS e melhora-lo. Disponibilizo está ferramenta para auxiliar outros desenvolvedores em testes de software, e não tem qualquer vínculo com a Receita Federal do Brasil.

A ferramenta utiliza o seguinte [algoritmo](http://www.geradorcpf.com/algoritmo_do_cpf.htm) para verificação e geração do CPF.

Um CPF declarado como válido por essa ferramenta não significa que ele exista no Cadastro Nacional de Pessoas Físicas, nem que seja um número ativo ou com situação cadastral regular. Para conferir tais dados, consulte o site oficial da [Secretaria da Receita Federal do Brasil](http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/consultapublica.asp).

O número CPF guarda o estado de onde foi emitido, esse número corresponde ao último algarismo anterior aos dois dígitos verificadores.

Um exemplo de CPF nº 000.000.008-00, o número 8 corresponde ao estado de São Paulo.

Veja abaixo os códigos correspondentes aos estados brasileiros:

1 - Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins;

2 - Pará, Amazonas, Acre, Amapá, Rondônia e Roraima;

3 - Ceará, Maranhão e Piauí;

4 - Pernambuco, Rio Grande do Norte, Paraíba e Alagoas;

5 - Bahia e Sergipe;

6 - Minas Gerais;

7 - Rio de Janeiro e Espírito Santo;

8 - São Paulo;

9 - Paraná e Santa Catarina;

0 - Rio Grande do Sul.

## Funcionalidades

* Gerar CPFs válidos

* Validar CPFs

## Uso

* Faça o download de uma das versões:

    * [Não Compactada](https://raw.githubusercontent.com/tiagoporto/gerador-validador-cpf/gh-pages/PROJECT/public/js/CPF.js)

    * [Compactada](https://raw.githubusercontent.com/tiagoporto/gerador-validador-cpf/gh-pages/PROJECT/public/js/CPF.min.js)

* Inclua o arquivo no rodapé da sua página, como no exemplo.

    ```html
    <script src="js/CPF.js"></script>
    ```

* No seu arquivo de JS, instancie o objeto CPF;

    ```javascript
    var CPF = new CPF();
    ```

* Para __gerar CPF__ basta chamar a função `gera()`, veja um exemplo:

    ```javascript
    CPF.gera();
    ```

    Exemplo completo de uma possível utilização com javascript puro.

    ```javascript
    document.getElementById('btn-gerar-CPF').onclick = function(){
        document.getElementById('CPF').innerHTML = CPF.gera();
    };
    ```

* Para __validar um CPF__ basta chamar a função `valida(cpf)`, passando como string o número a ser validado, não importa se tiver pontuação, a função fica encarregada de eliminar caracteres não numéricos para verificação posterior, veja um exemplo:

    ```javascript
    CPF.valida("123.456.789-00");
    ```

    Exemplo completo de uma possível utilização com javascript puro.

    ```javascript
    document.getElementById('valida-CPF').onsubmit = function (event){
        document.getElementById('resultadoValidacao').innerHTML = CPF.valida(document.getElementById('cpf').value);

        return false;
    };
    ```


## Licença

Gerador e validador de CPFs está sobre os termos da [licença MIT](http://opensource.org/licenses/MIT).
