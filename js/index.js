const afterProject = () => {
	window.scrollTo(0, 0);
	const observerProject = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
				}
			});
		},
		{ threshold: 0.5 },
	);
	const designs = document.querySelectorAll('.designInfos');
	designs.forEach(design => {
		observerProject.observe(design);
	});
};

// Barba.js
const trans = document.querySelector('.transition');
const title = document.querySelector('.transition_title');
const square = document.querySelector(
	'.transition_bg .bg_fig:nth-child(1)',
);
const circle = document.querySelector(
	'.transition_bg .bg_fig:nth-child(2)',
);
const triangle = document.querySelector(
	'.transition_bg .bg_fig:nth-child(3)',
);

const TLAnim = new TimelineMax();

barba.init({
	transitions: [
		{
			leave() {
				return TLAnim.to(trans, { opacity: 1, duration: 0.5 });
			},
			enter() {
				TLAnim.to(trans, {
					opacity: 0,
					duration: 0.5,
					ease: Power2.easeIn,
				});
			},
		},
	],
	views: [
		{
			namespace: 'home',
			afterEnter() {
				window.scrollTo(0, 0);
				Parallax.bind();
				//Initialisation Observer
				const observerHome = new IntersectionObserver(
					entries => {
						entries.forEach(entry => {
							if (entry.isIntersecting) {
								entry.target.classList.add('is-visible');
							}
						});
					},
					{ threshold: 0.33 },
				);

				const infos = document.querySelectorAll('.project_content');
				infos.forEach(info => {
					observerHome.observe(info);
				});
			},
		},
		{
			namespace: 'about',
			afterEnter() {
				window.scrollTo(0, 0);
			},
		},
		{
			namespace: 'fallout',
			afterEnter() {
				afterProject();
			},
		},
		{
			namespace: 'agile',
			afterEnter() {
				afterProject();
			},
		},
	],
});

//Parallax

function offsetTop(element, acc = 0) {
	if (element.offsetParent) {
		return offsetTop(element.offsetParent, acc + element.offsetTop);
	}
	return element.offsetTop + acc;
}

class Parallax {
	constructor(element) {
		this.element = element;
		this.options = this.parseAttribute();
		this.onScroll = this.onScroll.bind(this);
		this.onIntersection = this.onIntersection.bind(this);
		const observer = new IntersectionObserver(this.onIntersection);
		observer.observe(element);
		this.onScroll();
	}

	parseAttribute() {
		const defaultOptions = {
			y: -0.5,
			x: 0,
			offResponsive: false,
		};
		if (this.element.dataset.parallax.startsWith('{')) {
			return {
				...defaultOptions,
				...JSON.parse(this.element.dataset.parallax),
			};
		}
		return {
			...defaultOptions,
			y: parseFloat(this.element.dataset.parallax),
		};
	}

	onIntersection(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				document.addEventListener('scroll', this.onScroll);
				window.addEventListener('resize', this.onScroll);
			} else {
				document.removeEventListener('scroll', this.onScroll);
				window.removeEventListener('resize', this.onScroll);
			}
		});
	}

	onScroll() {
		window.requestAnimationFrame(() => {
			const screenY = window.scrollY + window.innerHeight / 2;
			const eltY =
				offsetTop(this.element) + this.element.offsetHeight / 2;
			const diffY = eltY - screenY;
			const translateY = diffY * -1 * this.options.y;
			const translateX = diffY * -1 * this.options.x;
			if (this.options.y != 0 && this.options.x != 0)
				this.element.style.transform = `translate(${translateX}px,${translateY}px)`;
			else if (this.options.x != 0) {
				if (
					!(this.options.offResponsive && window.innerWidth <= 1080)
				) {
					this.element.style.transform = `translateX(${translateX}px)`;
				}
			} else if (this.options.y != 0)
				this.element.style.transform = `translateY(${translateY}px)`;
		});
	}

	static bind() {
		return document
			.querySelectorAll('[data-parallax]')
			.forEach(elt => {
				return new Parallax(elt);
			});
	}
}
