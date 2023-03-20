(function($) {

	"use strict";


})(jQuery);


const btns = document.querySelectorAll('.toggle-forms .btn');
		const forms = document.querySelectorAll('.forms-container .form');

		btns.forEach(btn => {
			btn.addEventListener('click', () => {
				// Remove a classe "active" de todos os botões e formulários
				btns.forEach(btn => btn.classList.remove('active'));
				forms.forEach(form => form.classList.remove('active'));
				// Adiciona a classe "active" ao botão e formulário selecionados
				const formId = btn.getAttribute('data-form');
				const form = document.querySelector(`#${formId}`);
				btn.classList.add('active');
				form.classList.add('active');
			});
		});