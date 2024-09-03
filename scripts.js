document.addEventListener('DOMContentLoaded', function() {
    const createAccountForm = document.getElementById('create-account-form');
    const depositForm = document.getElementById('deposit-form');
    const withdrawForm = document.getElementById('withdraw-form');
    const viewBalanceForm = document.getElementById('view-balance-form');
    const loadAccountsButton = document.getElementById('load-accounts');
    const accountsList = document.getElementById('accounts-list');
    const balanceResult = document.getElementById('balance-result');

    createAccountForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const accountNumber = document.getElementById('account-number').value;
        const initialBalance = document.getElementById('initial-balance').value;

        // Adicionar a nova conta à lista (simulação)
        const listItem = document.createElement('li');
        listItem.textContent = `Conta: ${accountNumber}, Saldo Inicial: ${initialBalance}`;
        accountsList.appendChild(listItem);

        // Limpar o formulário
        createAccountForm.reset();
    });

    depositForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const accountNumber = document.getElementById('deposit-account-number').value;
        const depositAmount = document.getElementById('deposit-amount').value;

        // Simular o depósito
        console.log(`Depositar ${depositAmount} na conta ${accountNumber}`);

        // Limpar o formulário
        depositForm.reset();
    });

    withdrawForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const accountNumber = document.getElementById('withdraw-account-number').value;
        const withdrawAmount = document.getElementById('withdraw-amount').value;

        // Simular a retirada
        console.log(`Retirar ${withdrawAmount} da conta ${accountNumber}`);

        // Limpar o formulário
        withdrawForm.reset();
    });

    viewBalanceForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const accountNumber = document.getElementById('view-balance-account-number').value;

        // Simular a visualização do saldo
        // Aqui você poderia fazer uma requisição para o servidor
        balanceResult.textContent = `Saldo da conta ${accountNumber}: R$ 1000.00`;

        // Limpar o formulário
        viewBalanceForm.reset();
    });

    loadAccountsButton.addEventListener('click', function() {
        // Simular a carga das contas
        console.log('Carregar contas');
    });
});
