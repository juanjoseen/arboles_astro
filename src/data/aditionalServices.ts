export interface AditionalService {
    name: string;
    description: string;
    price: number;
    image: string;
}

const services: AditionalService[] = [
    {
        name: "Pulsera artesanal",
        description: "Pulsera artesanal, hecha a mano con materiales naturales. Un recurdo sencillo y significativo de la experiencia.",
        price: 150,
        image: "images/pulsera.png",
    },
    {
        name: "Playera",
        description: "Playera con diseño de ardilla, cómoda y resistente, ideal como recuerdo de la visita.",
        price: 150,
        image: "images/playera.png",
    },
    {
        name: "Gorra",
        description: "Gorra con diseño de ardilla, cómoda y ajustable, ideal para protegrte del sol y llevar un recuerdo especial.",
        price: 120,
        image: "images/gorra.png",
    }
];

export default services;