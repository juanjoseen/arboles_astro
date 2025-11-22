export interface Activity {
  url: string;
  cover: string;
  flatIcon?: string;
  svgIcon?: string;
  title: string;
  description: string;
}

const activities: Activity[] = [
  {
    url: "/climbing",
    cover: "images/activities-1.png",
    flatIcon: "flaticon-tent",
    title: "Camping",
    description: "Duerme bajo las estrellas y conecta con las naturaleza."
  },
  {
    url: "/adventure",
    cover: "images/activities-2.png",
    svgIcon: "images/ninos.svg",
    title: "Actividades escolares",
    description: "Aprendizaje y diversión en un entorno natural y seguro."
  },
  {
    url: "/camping",
    cover: "images/activities-3.png",
    flatIcon: "flaticon-adventurer",
    title: "Senderismo",
    description: "Explora senderos rodeados de árboles, aire puro y aventura."
  },
  {
    url: "/rappel",
    cover: "images/rappel.png",
    svgIcon: "images/rap.svg",
    title: "Rappel",
    description: "Desciende entre la naturaleza con adrenalina y seguridad."
  },
  {
    url: "/arboles",
    cover: "images/arboles_de_navidad.png",
    svgIcon: "images/ARBOL.svg",
    title: "Árboles de navidad",
    description: "Lleva la magia del bosque a tu hogar con nuestros árboles de Navidad, llenos de espíritu navideño."
  }, 
  {
    url: "/pista_mtb",
    cover: "images/pista_mtb.png",
    svgIcon: "images/pista.svg",
    title: "Pista MTB",
    description: "Disfruta la adrenalina en nuestra pista MTB, rodeada de naturaleza y emoción."
  },
  {
    url: "/talleres",
    cover: "images/talleres.png",
    svgIcon: "images/talleres.svg",
    title: "Talleres",
    description: "Aprende, crea y conecta con la naturaleza en nuestros talleres para toda la familia."
  }
]

export default activities;