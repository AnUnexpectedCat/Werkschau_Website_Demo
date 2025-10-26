
const logoNav = document.querySelector('.logo nav.main');
const links = logoNav.querySelectorAll('a');
const sections = document.querySelectorAll('main > section');

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
