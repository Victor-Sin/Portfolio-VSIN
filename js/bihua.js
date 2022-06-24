const urlAsset = '../assets/Bihua/';
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';
/*
Pour les différentes BD, je suis partie du principe qu'on le récupéra sous format JSON depuis une BD et 
que l'affichage se fera de manière dynamique par rapport au nombre d'éléments et propriétés.
Les dates n'étant pas sous format de l'objet DATE, je considère que ces derniers ont été envoyé au bon format depuis
la requête en Back.
*/
const data = [
	{
		file: '23ffd57304ebb40069b937270f31f6ce.jpg',
		name: '10 ANS DE LA GOUTTIÈRE',
		price: 19.99,
		date: null,
		productList: true,
		favorite: false,
		program: false,
	},
	{
		file: '2ef0df1dd294e2c438984fe9c43871ba.jpg',
		name: 'Après le bain...',
		price: 19.99,
		date: null,
		productList: true,
		favorite: false,
		program: false,
	},
	{
		file: '38fbb78874b86eecd3871b547b83037c.jpg',
		name: 'La danse',
		price: 19.99,
		date: null,
		productList: true,
		favorite: false,
		program: false,
	},
	{
		file: 'd4f57e0676aa126eeb8e214853c615a2.jpg',
		name: 'Bandit',
		price: 19.99,
		date: null,
		productList: true,
		favorite: false,
		program: false,
	},
	{
		file: '8ae50e76fb38f5dd7c0525fd8d9a609a.jpg',
		name: 'Couché du soleil',
		price: 19.99,
		date: null,
		productList: true,
		favorite: false,
		program: false,
	},
	{
		file: '1fe46f1ed29011ddf7696b3db952b913.png',
		name: 'Black hammer',
		price: 19.99,
		date: null,
		productList: false,
		favorite: true,
		program: false,
	},
	{
		file: 'aaf6be5ed38c94b46808ea2393eaf5eb.png',
		name: "Priscilla et les enfants d'abord !",
		price: 19.99,
		date: '01/01/2022',
		productList: false,
		favorite: false,
		program: true,
	},
];

//Filtre normalement fait dans le back
// const products = data
// 	.filter(product => product.productList)
// 	.reverse();
// products.forEach(product => {
// 	document
// 		.querySelector('.swiper-wrapper')
// 		.insertAdjacentHTML(
// 			'afterBegin',
// 			"<li class='swiper-slide'><a href='#' class='product_preview'><img src='" +
// 				urlAsset +
// 				product.file +
// 				"' alt='" +
// 				product.name +
// 				"' class='preview_img'></a><div class='product_preview'><cite>" +
// 				product.name +
// 				'</cite><p>' +
// 				product.price +
// 				'</p></div></li>',
// 		);
// });

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'vertical',
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
