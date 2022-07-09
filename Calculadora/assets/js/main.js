//calc solo
const display = document.querySelector('.display');
//const button = document.querySelector('.btn-num');

function calculadora() {

    document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
            exibeDisplay(el.innerHTML);
        }

        if (el.classList.contains('btn-clear')) {
            clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
            deleteCharacter();
        }

        if (el.classList.contains('btn-eq')) {
            realizaConta();
        }

        function exibeDisplay(valor) {
            display.value += valor;
        }

        function clearDisplay() {
            display.value = '';
        }

        function deleteCharacter() {
            display.value = display.value.slice(0, -1);
        }

        function realizaConta() {
            let conta = display.value;
            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Valor desconhecido!')
                    return
                }
                display.value = conta;
            }
            catch (e) {
                alert('Valor desconhecido!')
                clearDisplay();
            }
        }
    })


}

calculadora();
