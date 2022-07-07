function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keycode === 13) {
                    this.realizaConta();
                }
            })
        },

        clearDisplay() {
            this.display.value = '';
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida')

                    return;
                }

                this.display.value = conta;
            } catch (e) {
                alert('conta inválida');
                return this.clearDisplay();
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },



        cliqueBotoes() {

            document.addEventListener('click', (e) => {
                const el = e.target;        //evento q tá chegando do addEvent... qual o botão, o que q tá sendo clicado

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) { //Se o botão clicador for btn clear
                    this.clearDisplay();                //ele chama essa funçãozinha aq
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}
const calculadora = criaCalculadora();
calculadora.inicia();