export interface VisitPack {
    title: string;
    description: string;
    price: number;
    image: string;
    url: string;
}

const visitPacks: VisitPack[] = [
    {
        title: "Paquete Sor Juana Inés",
        description: "Visita al múseo Sor Juan Inés de la Cruz, múseo internacional de los volcanes, taller de plantas medicinales...",
        price: 350,
        image: "/images/paquete_sor_juana.svg",
        url: ""
    },
    {
        title: "Paquete Don Goyo",
        description: "Taller de volcán con arcilla, Aviario, Plática de educación ambiental, Un vuelo en tirolesa...",
        price: 450,
        image: "/images/paquete_don_goyo.svg",
        url: ""
    },
    {
        title: "Paquete Escolar",
        description: "Plática por el vivero forestal, plática sobre capacitación de agua, plática sobre la basura, pláticas ecológicas...",
        price: 350,
        image: "/images/paquete_escolar.svg",
        url: ""
    }
]

export default visitPacks;