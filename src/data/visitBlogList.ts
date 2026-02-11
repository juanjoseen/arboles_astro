export interface VisitBlogItem {
    title: string;
    description: string;
    image: string;
}

const visitBlogList: VisitBlogItem[] = [
    {
        title: "¿Cómo hacer composta?",
        description: "Para hacer composta, alterna capas de materiales orgánicos (restos de cocina) y materiales secos (hojas, cartón) con tierra en un contenedor con...",
        image: "/images/composta.png",
    },
    {
        title: "Origen del árbol de navidad",
        description: "El árbol de Navidad tiene orígenes en tradiciones paganas europoeas que se fusionaron con el cristianismo en Alemania medieval, donde se usaban arboles... ",
        image: "/images/arbol_de_navidad.png",
    },
    {
        title: "3 datos de las ardillas",
        description: "Las ardillas tienen dientes que crecen constantemente, por lo que deben roer para limarselos. Utlizan sus colas para el equilibrio y como paracaidas...",
        image: "/images/ardillas.png",
    },
];

export default visitBlogList;