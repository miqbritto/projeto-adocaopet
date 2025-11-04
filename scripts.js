document.addEventListener('DOMContentLoaded', function() {
    // 1. Selecionar Elementos Chave
    const petModal = document.getElementById('petModal');
    
    // Botões para Abrir
    const openNewPetBtn = document.getElementById('openNewPetModal');
    const openEditBtns = document.querySelectorAll('.open-edit-modal'); // Seleciona todos os botões de edição
    
    // Botões para Fechar
    const closeBtn = document.getElementById('closeModalButton');
    const cancelBtn = document.getElementById('cancelModalButton');


    // 2. Função para Abrir o Modal
    function openModal() {
        petModal.classList.add('active'); // Adiciona a classe 'active' que exibe o modal
    }

    // 3. Função para Fechar o Modal
    function closeModal() {
        petModal.classList.remove('active'); // Remove a classe 'active'
    }


    // 4. Atribuir Eventos aos Botões de ABRIR
    
    // Abrir pelo botão 'Novo Pet'
    if (openNewPetBtn) {
        openNewPetBtn.addEventListener('click', function() {
            // Aqui você pode adicionar lógica para limpar o formulário, se for um novo pet
            // document.getElementById('petForm').reset(); 
            document.querySelector('.form-header h2').textContent = "Cadastrar Novo Pet";
            openModal();
        });
    }

    // Abrir por todos os botões 'Editar'
    openEditBtns.forEach(button => {
        button.addEventListener('click', function() {
            const petId = this.getAttribute('data-pet-id');
            // O backend usaria 'petId' para carregar os dados do pet no formulário
            document.querySelector('.form-header h2').textContent = `Editar Pet (ID: ${petId})`;
            openModal();
        });
    });


    // 5. Atribuir Eventos aos Botões de FECHAR

    // Fechar pelo 'X' no cabeçalho
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Fechar pelo botão 'Cancelar'
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeModal);
    }
    
    // 6. Fechar ao Clicar Fora do Modal (no fundo escuro)
    window.addEventListener('click', function(event) {
        if (event.target === petModal) {
            closeModal();
        }
    });

});