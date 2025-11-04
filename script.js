
const logoNav = document.querySelector('.logo nav.main');
const links = logoNav.querySelectorAll('a');
const sections = document.querySelectorAll('main > section');

const open = document.querySelector('#open');
const modal_container = document.querySelector('#modal_container');
const close = document.querySelector('#close');

console.log('Hallo Selim!');

if (document.documentElement.classList.contains('home') && sections.length > 0) {

	// add highlight on mouse over
	for (const link of links) {
		link.addEventListener('pointerenter', function (e) {

			// remove hightlight from all sections
			for (const section of sections) {
				section.classList.remove('active');
			}

			const label = e.target.dataset.label;
			const target = document.querySelector('section[data-label='+label+']');

			if (target) target.classList.add('active');

			// console.log('Link over', label, target, e.target, this);
		});

		link.addEventListener('pointerleave', function (e) {
			// remove hightlight from all sections
			for (const section of sections) {
				section.classList.remove('active');
			}
		});
	}

	// dynamic AAAAAAAA
	const sina = [...sections].find((element) => element.dataset.label == 'presse');
	if (sina) {
		sina.querySelector('h1').style.textWrap = 'initial';
		var randomLength = Math.floor(Math.random() * (12 - 4 + 1) + 4);
		
		var sinaAddA = setInterval(addA, 150, sina); // dynamically add As

		// static approach
		// const aaa = 'a'.repeat(randomLength);
		// sina.querySelector('h1').innerHTML += aaa;
	}

	function addA (ele) {
		sina.querySelector('h1').innerHTML += 'a';
		randomLength -= 1;
		if (randomLength <= 0) clearInterval(sinaAddA);
	}
}

if (document.documentElement.classList.contains('programm')) {
	
	const linkedElements = document.querySelectorAll('[data-target]');
	
	for (const ele of linkedElements) {
		ele.addEventListener('pointerenter', function (e) {
			const t = document.getElementById(e.target.dataset.target);

			if (t) { t.classList.add('active');	}
		});

		ele.addEventListener('pointerleave', function (e) {
			const t = document.getElementById(e.target.dataset.target);

			if (t) { t.classList.remove('active'); }
		});

		ele.addEventListener('click', function (e) {
			const t = document.getElementById(e.target.closest('details').dataset.target);

			if (t) { t.open = !t.open; }
		});
	}

}

open?.addEventListener('click', () =>{
	modal_container.classList.add('show');
});

close?.addEventListener('click', () => {
	modal_container.classList.remove('show');
});
