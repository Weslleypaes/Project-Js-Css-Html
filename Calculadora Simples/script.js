function calculadora() {
    const operadores = Number(prompt('Escolha um operador: \n 1 - Adição (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão real (/) \n 5 - Divisão inteiro (%) \n 6 - Potenciação (**)'));

    if (!operadores || operadores >= 7) {
        alert('Erro - digite uma opção válida');
        calculadora();
    }
    else {
        let n1 = Number(prompt('Digite o primeiro número:'));
        let n2 = Number(prompt('Digite o segundo número'));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos!')
            calculadora();
        }
        else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao()
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao()
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao()
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao()
            }

            function divisaoInteiro() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2}  é igual a ${resultado}`);
                novaOperacao()
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
                novaOperacao()
            }

            function novaOperacao() {
                let opcao = prompt('Deseja realizar uma nova operação ? \n 1 - Sim \n 2 - Não');
                if (opcao == 1) {
                    calculadora();
                }
                else if (opcao == 2) {
                    alert('Ok! Até mais! :)');
                }
            }
        }

        /*if (operadores == 1) {
            soma();
        }
        else if (operadores == 2) {
            subtracao();
        }
        else if (operadores == 3) {
            multiplicacao();
        }
        else if (operadores == 4) {
            divisaoReal()
        }
        else if (operadores == 5) {
            divisaoInteiro()
        }
        else if (operadores == 6) {
            potenciacao()
        }*/

        switch (operadores) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteiro();
                break;
            case 6:
                potenciacao();
                break;
        }

    }


}
calculadora();