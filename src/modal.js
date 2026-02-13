import image from "./assets/mountains.jpg";
import {TitleBlock, TextBlock, ImageBlock, ColumnsBlock} from "./classes/blocks.js";

export const modal = [
    new TitleBlock("Конструктор сайтов на JS", {
        tag: "h2",
        styles: {
            background: "#eae5e3d8",
            color: "#1f2937",
            margin: "0 0 16px",
            "font-weight": "700",
            "letter-spacing": "-0.02em",
            "line-height": "1.15",
        },
    }),

    new TextBlock("Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Журчит возвращайся, свой злых имени страна власти, но рекламных предупреждал семь коварных прямо. Переписывается дорогу не вопроса предупредила, родного использовало",
        {
            styles: {
                color: "#6b7280",
                "max-width": "100ch",
                margin: "0 0 24px",
                "font-size": "1rem",
            },
        },
    ),

    new ColumnsBlock (["Колонка №1", "Колонка №2", "Колонка №3", "Колонка №4"], {
            styles: {
                "font-weight": "bold",
                "font-size": "2rem",
            },        
    }),


    new ImageBlock (image, { imgStyles: { "max-width": "62.5rem" }, alt: "test alt text" })
]
