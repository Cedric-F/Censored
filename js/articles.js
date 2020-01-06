(() => {
	const liste = {
		"1": {
			"titre": "The Gutenberg Galaxy",
			"url": "https://books.google.fr/books/about/The_Gutenberg_Galaxy.html?id=y4C644zHCWgC&redir_esc=y"
		},
		"2": {
			"titre": "How is guaranteed your freedom of speech online?",
			"url": "https://nypost.com/2017/08/19/so-just-how-guaranteed-is-your-freedom-of-speech-online/"
		},
		"3": {
			"titre": "Internet est-il un espace de radicalisation ?",
			"url": "https://journals.openedition.org/terminal/3347"
		},
		"4": {
			"titre": "Les GAFAM créent leur propre «ONU» pour lutter contre le cyberterrorisme",
			"url": "http://www.rfi.fr/ameriques/20190925-gafam-onu-lutter-cyberterrorisme-internet-reseaux-sociaux"
		},
		"5": {
			"titre": "Comment tuer socialement un lanceur d'alerte ?",
			"url": "https://theconversation.com/comment-tuer-socialement-un-lanceur-dalerte-mode-demploi-en-democratie-102556"
		},
		"6": {
			"titre": "«À travers Assange, c'est le journalisme qu'on veut domestiquer.",
			"url": "https://lecourrier.ch/2019/11/07/a-travers-assange-cest-le-journalisme-quon-veut-domestiquer/"
		},
		"7": {
			"titre": "Stratégie: comment assurer sa sécurité sur internet ?",
			"url": "https://www.silicon.fr/avis-expert/cybersecurite-les-peripheriques-des-employes-doivent-etre-au-centre-de-la-strategie"
		},
		"8": {
			"titre": "Comment protéger les enfants sur la «Toile» ?",
			"url": "https://www.lexpress.fr/actualite/societe/protection-des-enfants-sur-internet-trois-questions-sur-les-mesures-annoncees-par-macron_2108426.html"
		},
		"9": {
			"titre": "Que dit la loi sur la cybercensure ?",
			"url": "https://www.lepoint.fr/societe/liberte-d-expression-et-censure-ce-que-dit-la-loi-07-06-2018-2225000_23.php"
		},
		"10": {
			"titre": "Il manque 4 millions de spécialistes en cyber sécurité",
			"url": "https://www.ictjournal.ch/etudes/2019-11-11/il-manque-4-millions-de-specialistes-en-cybersecurite"
		},
		"11": {
			"titre": "Liberté d'expression sur internet: chronique d'une mort annoncée",
			"url": "https://www.contrepoints.org/2019/04/14/341632-liberte-dexpression-sur-internet-chronique-dune-mort-annoncee"
		},
		"12": {
			"titre": "Impôts: quand Bercy chasse les fraudeurs sur les réseaux",
			"url": "https://www.europe1.fr/economie/quand-bercy-chasse-les-fraudeurs-sur-les-reseaux-sociaux-3928997l"
		},
		"13": {
			"titre": "Manifestations en Iran: la censure d'Internet au plus haut",
			"url": "https://www.cnews.fr/monde/2019-11-19/manifestations-en-iran-la-censure-dinternet-au-plus-haut-900617"
		},
		"14": {
			"titre": "Ouganda: on doit désormais payer pour aller sur les réseaux sociaux",
			"url": "https://www.lefigaro.fr/secteur/high-tech/2018/07/04/32001-20180704ARTFIG00095-en-ouganda-on-doit-desormais-payer-pour-aller-sur-les-reseaux-sociaux.php"
		},
		"15": {
			"titre": "Loi Avia: l’assaut de Macron contre la liberté d’expression continue",
			"url": "https://www.contrepoints.org/2019/07/09/348671-loi-avia-lassaut-de-macron-contre-la-liberte-dexpression-continue"
		},
		"16": {
			"titre": "Pourquoi le VPN est devenu indispensable en 2019",
			"url": "https://www.zdnet.fr/actualites/instabilite-politique-et-censure-pourquoi-le-vpn-est-devenu-indispensable-en-2019-39894499.htm"
		},
		"17": {
			"titre": "Cybersécurité : le raté d'AccorHotels",
			"url": "https://www.lesechos.fr/industrie-services/tourisme-transport/une-filiale-daccorhotels-en-proie-a-une-fuite-massive-de-donnees-personnelles-1149460"
		},
		"18": {
			"titre": "Peut-on faire confiance aux Gafa pour réguler les contenus en ligne ?",
			"url": "Peut-on faire confiance aux Gafa pour réguler les contenus en ligne ?"
		},
		"19": {
			"titre": "Surveillance et censure en Corée du Nord",
			"url": "https://www.amnesty.be/veux-agir/agir-ligne/petitions/article/surveillance-et-censure-en-coree-du-nord"
		},
		"20": {
			"titre": "L’application TikTok pratiquait bien une censure en faveur de la Chine",
			"url": "https://siecledigital.fr/2019/09/25/lapplication-tiktok-pratiquait-bien-une-censure-en-faveur-de-la-chine/"
		},
		"21": {
			"titre": "Liberté de la presse et autocensure",
			"url": "https://www.lefigaro.fr/vox/politique/les-attaques-contre-la-liberte-de-la-presse-vont-systematiser-des-comportements-d-autocensure-20190628"
		}
	};

	const sources = document.querySelector('.sources__liste');
	for (let e in liste) {
		const div = document.createElement('div');
		div.setAttribute('class', 'article');
		const titre = document.createElement('span');
		const lien = document.createElement('a');
		titre.innerText = liste[e].titre;
		lien.setAttribute("href", liste[e].url);
		lien.innerText = "Visiter la source";
		div.appendChild(titre);
		div.appendChild(lien);
		sources.appendChild(div);
	}

})();