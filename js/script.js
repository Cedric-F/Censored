(() => {
	let order = [0, 1, 2];

	const logo = document.querySelector('#logo');

	const sliders = document.querySelector('.carousel__btns');
	const terms = document.querySelectorAll('.carousel__terme');
	const defs = document.querySelectorAll('.carousel__definition');

	const dossiers = document.querySelectorAll('.dossier');

	const burger = document.querySelector('.burger');
	const nav = document.querySelector('nav');
	const lien_dossier = document.querySelector('#dossiers');
	const synthese = document.querySelector('#synthese');
	let open = true;

	dossiers.forEach(e => e.addEventListener('pointerup', e => {
		let target = event.target;
        while (!target.getAttribute("ref")) {
          target = target.parentElement;
        }
          window.location.href = `${target.getAttribute('ref')}.html`;
	}));

	logo.addEventListener('pointerup', (e) => {
		window.location.href="index.html";
	})

	burger.addEventListener('pointerdown', (e) => {
		open = !open;
		burger.setAttribute('class', `burger ${open ? '' : 'close' }`);

		nav.setAttribute('class', `${open ? 'hide' : 'show'}`);

		lien_dossier && lien_dossier.setAttribute('class', `${!open ? 'offset' : ''}`)
		synthese && synthese.setAttribute('class', `${!open ? 'offset' : ''}`)
	})

	sliders && sliders.addEventListener('pointerup', (e) => {
		console.log(e.detail);
		if (!e.target.dataset.order) return false;
		const next = e.target.dataset.order;

		document.querySelector('.btn.active').setAttribute('class', 'btn');
		e.target.setAttribute('class', 'btn active');

		terms.forEach((e, i) => e.setAttribute('class', `carousel__terme ${i == next ? '' : 'hide'}`));
		defs.forEach((e, i) => e.setAttribute('class', `carousel__definition ${i == next ? '' : 'hide'}`));

		terms[next].setAttribute('class', 'carousel__terme');
		defs[next].setAttribute('class', 'carousel__definition');
	});
})();
