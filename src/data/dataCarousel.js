import { dadosCard } from "./dataCard"

export const numbCarousel = [
    {
        id: 0,
        className: "carousel-item active",
        secClassName: "active",
        current: "true",
        label: "Slide 1",
        dados: {
            id: [dadosCard[0].id, dadosCard[1].id, dadosCard[2].id],
            imag: [dadosCard[0].imag, dadosCard[1].imag, dadosCard[2].imag],
            titulo: [dadosCard[0].titulo, dadosCard[1].titulo, dadosCard[2].titulo],
            descricao: [dadosCard[0].descricao, dadosCard[1].descricao, dadosCard[2].descricao],
        }
    },
    {
        id: 1,
        className: "carousel-item",
        current: "false",
        label: "Slide 2",
        dados: {
            id: [dadosCard[3].id, dadosCard[4].id, dadosCard[5].id],
            imag: [dadosCard[3].imag, dadosCard[4].imag, dadosCard[5].imag],
            titulo: [dadosCard[3].titulo, dadosCard[4].titulo, dadosCard[5].titulo],
            descricao: [dadosCard[3].descricao, dadosCard[4].descricao, dadosCard[5].descricao],
        }
    },
    {
        id: 2,
        className: "carousel-item",
        current: "false",
        label: "Slide 3",
        dados: {
            id: [dadosCard[6].id, dadosCard[7].id, dadosCard[8].id],
            imag: [dadosCard[6].imag, dadosCard[7].imag, dadosCard[8].imag],
            titulo: [dadosCard[6].titulo, dadosCard[7].titulo, dadosCard[8].titulo],
            descricao: [dadosCard[6].descricao, dadosCard[7].descricao, dadosCard[8].descricao],
        }
    },
    {
        id: 3,
        className: "carousel-item",
        current: "false",
        label: "Slide 4",
        dados: {
            id: [dadosCard[9].id, dadosCard[10].id, dadosCard[11].id],
            imag: [dadosCard[9].imag, dadosCard[10].imag, dadosCard[11].imag],
            titulo: [dadosCard[9].titulo, dadosCard[10].titulo, dadosCard[11].titulo],
            descricao: [dadosCard[9].descricao, dadosCard[10].descricao, dadosCard[11].descricao],
        }
    }
]