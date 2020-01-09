(() => {

	const synthese = document.querySelector('#synthese');
	const input = document.querySelector('textarea');
	if (input) {
		const size = document.querySelector('#size');
		input.addEventListener('input', (e) => {
			const current = e.target.value.length, max = e.target.getAttribute('maxlength');
			size.innerText = `${current}/${max}`;
			if (current > 0 && current <= max) {
				size.setAttribute('class', 'valid');
			} else {
				size.setAttribute('class', '');
			}
		});
		input.value = "";
		document.querySelectorAll('input').forEach(e => {
			if (e.getAttribute('type') != "submit") e.value = ""});
	}

	if (synthese) {
		const tip = document.createElement('div');
		tip.setAttribute('class', 'tip');
		if (window.scrollY >= window.scrollMaxY - 120) {
			tip.setAttribute('class', 'tip bottom');
		}
		const top = document.createElement('i');
		top.setAttribute('class', 'fas fa-arrow-circle-up');
		top.addEventListener('pointerup', e => {
			window.scrollTo(0, 0);
		});
		tip.appendChild(top);
		document.querySelector('main').appendChild(tip);
		document.addEventListener('scroll', e => {
			tip.setAttribute('class', `tip ${window.scrollY > window.screen.availHeight / 4 ? 'stick' : ''}`);
			if (window.scrollY >= window.scrollMaxY - 120) {
				tip.setAttribute('class', 'tip bottom');
			}
		})
	}

	let order = [0, 1, 2];

	const logo = document.querySelector('#logo');

	const sliders = document.querySelector('.carousel__btns');
	const terms = document.querySelectorAll('.carousel__terme');
	const defs = document.querySelectorAll('.carousel__definition');

	const dossiers = document.querySelectorAll('.dossier');

	const burger = document.querySelector('.burger');
	const nav = document.querySelector('nav');
	let open = true;

	const section = document.querySelector('main').firstElementChild;

	dossiers.forEach(e => e.addEventListener('click', e => {
		let target = event.target;
        while (!target.getAttribute("ref")) {
          target = target.parentElement;
        }
          window.location.href = `${target.getAttribute('ref')}.html`;
	}));

	logo.addEventListener('click', (e) => {
		window.location.href="index.html";
	})

	burger.addEventListener('click', (e) => {
		open = !open;
		burger.setAttribute('class', `burger ${open ? '' : 'close' }`);

		nav.setAttribute('class', `${open ? 'hide' : 'show'}`);

		section && section.setAttribute('class', `${!open ? 'offset' : ''}`)
	});

	sliders && sliders.addEventListener('click', (e) => {
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

	const form = document.querySelector('form');

	form && form.addEventListener('submit', e => {
		e.preventDefault();

		if ([...document.querySelectorAll('input', 'textarea')].filter(e => !e.value).length) return false;

		const modal = document.createElement('div');
		const cross = document.createElement('i');
		const msg = document.createElement('p');
		cross.setAttribute('class', 'fas fa-times');
		cross.addEventListener('click', (e) => {
			modal.style.display = 'none';
		});
		msg.innerText = "Merci !";
		modal.appendChild(document.createElement('div'));
		modal.firstChild.appendChild(cross);
		modal.firstChild.appendChild(msg);
		modal.setAttribute('class', 'modal');

		document.querySelector('body').appendChild(modal);

	});

})();
