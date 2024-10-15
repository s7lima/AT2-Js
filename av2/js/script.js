document.getElementById('login-form').addEventListener('submit', function(event) {
    const inputs = this.querySelectorAll('input[type="text"], input[type="password"]');
    let isEmpty = false;

    inputs.forEach(function(input) {
      if (input.value.trim() === '') {
        isEmpty = true;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '#dbdbdb';
      }
    });

    if (isEmpty) {
      event.preventDefault();
      alert('Por favor, preencha todos os campos.');
    } else {
      // Adicionar registro à tabela
      event.preventDefault(); // Impede o envio do formulário para não recarregar a página
      
      const username = this.querySelector('input[name="username"]').value;
      const email = this.querySelector('input[name="email"]').value;
      
      // Criar uma nova linha na tabela
      const table = document.getElementById('registrations-table').getElementsByTagName('tbody')[0];
      const newRow = table.insertRow();

      const usernameCell = newRow.insertCell(0);
      const emailCell = newRow.insertCell(1);
      
      usernameCell.textContent = username;
      emailCell.textContent = email;

      // Limpar os campos do formulário
      this.reset();
    }
});