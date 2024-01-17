-- SQLBook: Code

DROP TABLE IF EXISTS Salon;
DROP TABLE IF EXISTS Event;
DROP TABLE IF EXISTS `Order`;


CREATE TABLE
    Salon (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(80) NOT NULL,
        email  VARCHAR(80) NOT NULL,
        hashed_password VARCHAR(50) NOT NULL DEFAULT 'beauty',
        address VARCHAR(250),
        phone_number VARCHAR(80) NOT NULL,
        point INT NOT NULL DEFAULT 0,
        is_subscription BOOLEAN NOT NULL DEFAULT 0
    );


CREATE TABLE
    Event (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(80) NOT NULL,
        surname VARCHAR(255) NOT NULL,
        description  TEXT NOT NULL,
        program TEXT NOT NULL,
        image VARCHAR(255) NOT NULL,
        value INT NOT NULL
    );

CREATE TABLE
    `Order` (
        salon_id INT,
        event_id INT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
        CONSTRAINT fk_order_salon_id FOREIGN KEY (salon_id) REFERENCES salon (id) ON DELETE CASCADE,
        CONSTRAINT fk_order_event_id FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE,
        PRIMARY KEY (salon_id, event_id)
    );




-- Insert into DB
INSERT INTO Salon (name, email, hashed_password, address, phone_number, point, is_subscription)
VALUES
    ('Le Charme Beauty', 'charme_beauty@mail.com', 'hashed_charme_password', '123 Rue Principale, Paris, France', '+33 1 23 45 67 89', 22000, 1),
    ('Belle Vue Salon', 'belle_vue@mail.com', 'hashed_bellevue_password', '456 Avenue des Roses, Lyon, France', '+33 4 56 78 90 12', 15000, 0),
    ('Éclat Glamour', 'eclat_glamour@mail.com', 'hashed_eclat_password', '789 Rue de la Mode, Milan, Italy', '+39 02 3456 7890', 60500, 1),
    ('Lumière du Style', 'lumiere_style@mail.com', 'hashed_lumiere_password', '321 Boulevard Élégance, Madrid, Spain', '+34 91 234 5678', 35000, 0);

INSERT INTO Event (name,surname, description, program, image, value) 
VALUES 
(
    'INITIAL',
    'COFFRET - CADEAU & PROMOTION',
    'Plongez dans l/univers de la beauté ultime avec nos coffrets cadeaux L/Oréal, une célébration de l/élégance intemporelle et de l/innovation contemporaine. Chaque coffret est une invitation à l/expérience sensorielle, capturant l/essence même du raffinement et de la confiance en soi.',
    '✨ Une Sélection Exquise : Nos coffrets regorgent des produits les plus emblématiques de L/Oréal, soigneusement sélectionnés pour offrir une expérience complète de beauté. Des formules luxueuses aux couleurs éblouissantes, chaque produit incarne l/excellence et l/attention portée aux détails.

    🌺 Soins Exceptionnels : Offrez vous une pause bien-être avec nos produits de soins innovants. Des rituels hydratants aux formules régénérantes, nos coffrets sont conçus pour sublimer la peau et raviver l/éclat naturel.

    💄 Élégance Personnalisée : Chaque coffret est une œuvre d/art en soi, orné d/un design sophistiqué qui séduit dès le premier regard. Choisissez parmi une gamme variée de thèmes pour personnaliser votre cadeau et le rendre encore plus mémorable.',
    '/images/coffret-cadeaux.jpg', 
    10000
),
(
    'PRIVILÉGE',
    'FORMATION INDIVIDUELLE',
    'Découvrez une expérience unique où la beauté rencontre l/expertise avec notre Événement Privilège L/Oréal. En tant que client privilégié, plongez au cœur de l/exclusivité en bénéficiant d/une formation individuelle dispensée par l/un de nos talentueux conseillers L/Oréal.',
    '👩‍🎓 Formation Personnalisée : Notre équipe d/experts, véritables passionnés de la beauté, est prête à vous guider à travers une formation sur mesure. Que vous souhaitiez perfectionner votre routine de soins, maîtriser les dernières tendances maquillage, ou obtenir des conseils personnalisés, nous nous adaptons à vos besoins spécifiques.

    🌈 Exploration des Produits : Plongez dans l/univers captivant de L/Oréal en explorant nos produits emblématiques. Apprenez à choisir les nuances qui rehaussent votre beauté naturelle et découvrez les secrets des formulations innovantes qui font la renommée de la marque.

    💄 Techniques de Maquillage Avancées : Développez vos compétences en maquillage avec des techniques avancées enseignées par nos conseillers expérimentés. Que vous soyez novice ou expert, découvrez des astuces pour sublimer vos traits et créer des looks époustouflants.

    📅 Réservez Votre Place : Cet événement exclusif est une opportunité rare d/approfondir vos connaissances et de perfectionner vos compétences. Réservez votre place dès maintenant pour une session de formation individuelle, et laissez-vous guider par nos experts pour révéler votre beauté unique.',
    '/images/formation.jpg', 
    20000
),
(
    'PRESTIGE',
    'DECOUVERTE LABORATOIRE',
    'Bienvenue à la "Découverte des Coulisses de l/Innovation L/Oréal", une opportunité exclusive de plonger dans l/univers fascinant de la recherche et de l/innovation dans le domaine de la beauté. Nous sommes ravis de vous convier à une visite immersive de l/un de nos prestigieux Centres de Recherche et d/Innovation, où la science et la créativité se rencontrent pour façonner l/avenir de la beauté.', 
    '🔍 Exploration des Laboratoires : Participez à une expérience immersive en explorant nos laboratoires de pointe. Découvrez les technologies de pointe utilisées dans le développement de nos produits révolutionnaires et apprenez comment la recherche L/Oréal redéfinit les normes de l/industrie.

    👩‍🔬 Rencontres avec les Chercheurs : Échangez avec nos chercheurs passionnés qui dédient leur expertise à repousser les limites de l/innovation. Posez vos questions, découvrez les coulisses des découvertes scientifiques et comprenez le processus de création des produits de demain.

    🌱 Focus sur la Durabilité : Découvrez notre engagement envers la durabilité et la responsabilité environnementale. Explorez les initiatives de recherche visant à créer des produits de beauté plus durables et respectueux de l/environnement.

    🔬 Séminaire sur les Dernières Innovations : Assistez à un séminaire exclusif présentant les dernières avancées technologiques et les innovations récentes de L/Oréal. De nouvelles formules révolutionnaires aux approches avant-gardistes en matière de beauté, plongez dans le futur de la cosmétique. 
    📸 Souvenirs Personnalisés : Repartez avec des souvenirs personnalisés de votre visite, y compris des échantillons exclusifs des produits en cours de développement. Vivez une expérience mémorable au cœur de l/innovation L/Oréal.

    📆 Réservez Votre Place pour la Découverte des Coulisses de l/Innovation : Les places pour cette expérience immersive sont limitées. Réservez dès maintenant pour explorer les coulisses de l/innovation L/Oréal et découvrez comment nous façonnons l/avenir de la beauté.',
    '/images/laboratoire.jpg' , 
    30000
),
(
    'ELITE',
    'VENTE PRIVÉES',
    'Nous sommes ravis de vous annoncer une occasion unique de vivre la magie de L/Oréal sans quitter le confort de votre salon. Laissez-nous venir à votre rencontre pour un moment exceptionnel de partage, de présentations et de conseils en produits capillaires.', 
    '🌟 L/Oréal s/invite chez Vous : Une Expérience Beauté Exclusive dans le Confort de Votre Salon ! 🌟

    Nous sommes ravis de vous annoncer une occasion unique de vivre la magie de L/Oréal sans quitter le confort de votre foyer. Laissez-nous venir à votre rencontre pour un moment exceptionnel de partage, de présentations et de conseils en produits capillaires.

    🚗 Service à Domicile : Oubliez les déplacements et les contraintes logistiques. Notre équipe de spécialistes se déplace directement dans votre salon, apportant avec elle l/expertise de L/Oréal en matière de soins capillaires.

    👩‍🔬 Présentations Personnalisées : Profitez d/une présentation privée de nos produits capillaires les plus innovants. Découvrez les secrets des formules avancées conçues pour nourrir, revitaliser et sublimer vos cheveux, le tout adapté aux besoins spécifiques de vos clients.

    💆‍♀️ Conseils Sur-Mesure : Nos experts capillaires seront à votre disposition pour des conseils personnalisés. Que vous cherchiez à donner de la vitalité à vos cheveux, à expérimenter de nouveaux styles ou simplement à optimiser votre routine capillaire, nous sommes là pour vous guider.

    🎁 Cadeaux Exclusifs : En tant qu/hôte de cet événement privilégié, recevez des cadeaux exclusifs et des échantillons gratuits. Découvrez les petites attentions qui font de L/Oréal une référence en matière de soins capillaires de qualité.

    📆 Réservez Votre Rendez-vous : Cette expérience unique est disponible sur rendez-vous, alors réservez dès maintenant votre créneau pour une visite personnalisée de l/univers L/Oréal directement chez vous. Offrez-vous le luxe de la beauté à domicile !',
    '/images/vente-privee.jpg', 
    40000
),
(
    'PLATINE',
    'ÉVENEMENT VIP',
    'Nous avons le plaisir de vous convier à notre événement exclusif Platinum VIP L/Oréal, une expérience réservée à nos clients les plus distingués. Rejoignez-nous pour une soirée exceptionnelle dédiée à la beauté, au luxe et à l/élégance.', 
    '👑 Statut Platinum VIP : En tant que client VIP L/Oréal Platinum, vous êtes au cœur de notre attention. Profitez d/un traitement exclusif et de privilèges réservés aux amateurs de beauté qui recherchent l/excellence.

    🌐 Découverte des Nouveautés : Soyez parmi les premiers à découvrir nos dernières innovations en matière de soins de la peau, de maquillage et de produits capillaires. Plongez dans l/univers du luxe avec des collections réservées aux initiés.

    💄 Ateliers Beauté Prestigieux : Participez à des ateliers exclusifs dirigés par nos experts en beauté. Apprenez les techniques de maquillage des podiums, découvrez les secrets des coiffures tendance et recevez des conseils personnalisés pour sublimer votre beauté naturelle.

    🛍️ Shopping Privé : Profitez d/une expérience shopping privée dans notre espace dédié. Explorez notre gamme de produits haut de gamme, bénéficiez de conseils sur mesure et repartez avec des cadeaux exclusifs réservés à nos VIP.

    🥂 Cocktail VIP : Terminez cette journée mémorable par un cocktail VIP dans un cadre raffiné. Rencontrez d/autres passionnés de beauté, échangez des astuces et laissez-vous choyer par notre équipe dédiée.

    🎁 Cadeaux Prestigieux : En tant que VIP, recevez des cadeaux de prestige et des échantillons de nos produits les plus prisés. Chaque détail est pensé pour vous offrir une expérience unique et inoubliable.

    📆 Réservez Votre Place : Le nombre de places pour cet événement exclusif est limité. Réservez dès maintenant votre place pour une journée placée sous le signe du luxe, de la beauté et de l/élégance.',
    '/images/eventVIP.jpg', 
    50000
),
(
    'ULTIME', 
    'VOYAGES SEMINAIRE',
    'L/Oréal vous invite à une expérience inédite, alliant le raffinement du voyage à la découverte des tendances beauté mondiales. Joignez-vous à nous pour un séminaire exclusif qui transcendera les frontières de la beauté.', 
    '🌆 Destinations Iconiques : Partez à la conquête de destinations emblématiques soigneusement sélectionnées pour leur charme et leur inspiration. Des métropoles cosmopolites aux retraites exotiques, chaque lieu a été choisi pour stimuler votre créativité et élargir votre perspective.

    🌐 Rencontres avec des Experts Locaux : Plongez dans la richesse culturelle de chaque destination en rencontrant des experts locaux en beauté. Découvrez les secrets de soins traditionnels, apprenez des techniques de maquillage uniques et échangez avec des passionnés de beauté du monde entier.

    👩‍🏫 Séminaires de Pointe : Profitez de séminaires exclusifs animés par des experts de L/Oréal, dédiés à l/exploration des dernières tendances beauté et des innovations révolutionnaires. Élargissez vos connaissances et perfectionnez vos compétences dans un environnement stimulant.

    🛍️ Shopping VIP : Explorez les boutiques de marques de renommée mondiale, bénéficiez d/un shopping VIP avec des réductions exclusives réservées aux participants du séminaire. Repartez avec des produits de luxe et des éditions limitées pour enrichir votre collection de beauté.

    🍽️ Expériences Gastronomiques : Découvrez la cuisine locale dans des restaurants étoilés, partagez des repas gastronomiques avec vos pairs et créez des souvenirs inoubliables autour de la table.

    🥂 Soirées Élégantes : Terminez chaque journée en beauté avec des soirées élégantes organisées dans des lieux prestigieux. Célébrez le succès, échangez des idées et profitez d/un networking exclusif avec des professionnels de la beauté du monde entier.

    📆 Réservez Votre Place au Séminaire Mondial L/Oréal : Les places pour cette expérience exceptionnelle sont limitées. Réservez votre participation dès maintenant pour vivre un séminaire qui transcendera les frontières de la beauté et vous laissera des souvenirs impérissables.',
    '/images/seminaire.jpg' , 
    60000);