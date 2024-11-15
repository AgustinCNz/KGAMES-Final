// esto es la base de los jeugos en venta
const juegosParaVenta = [
    {
        id: 1,
        nombre: "Silent Hill 2 Remake",
        descripcion: "Silent Hill 2 Remake es una aventura de terror desarrollada por Bloober Team y publicada por Konami para PS5 y PC. Este remake actualiza los gráficos y la jugabilidad, con una nueva cámara y contenidos adicionales.",
        fecha_lanzamiento: "7/10/2024",
        precio: 59.99,
        descuento: 10,
        imagenes: [
            "/img/juegospopulares/silent0.png",
            "/img/juegospopulares/silent1.png",
            "/img/juegospopulares/silent2.png",
            "/img/juegospopulares/silent3.png",
            "/img/juegospopulares/silent4.png",
            "/img/juegospopulares/silent5.png",
            "/img/juegospopulares/silent6.png"
        ]
    },
    {
        id: 2,
        nombre: "Dragon Ball: Sparking! Zero",
        descripcion: "Dragon Ball: Sparking! Zero es un juego de lucha en 3D que incluye más de 180 personajes. La saga Budokai Tenkaichi regresa 17 años después para PS5, Xbox Series y PC.",
        fecha_lanzamiento: "11/10/2024",
        precio: 49.99,
        descuento: 15,
        imagenes: [
            "/img/juegospopulares/dragonball0.png",
            "/img/juegospopulares/dragonball1.png",
            "/img/juegospopulares/dragonball2.png",
            "/img/juegospopulares/dragonball3.png",
            "/img/juegospopulares/dragonball4.png",
            "/img/juegospopulares/dragonball5.png"
        ]
    },
    {
        id: 3,
        nombre: "Metaphor: ReFantazio",
        descripcion: "Metaphor: ReFantazio es un JRPG de los creadores de Persona, con un sistema de combate único y una historia envolvente. Disponible para PS4, PS5, Xbox Series y PC.",
        fecha_lanzamiento: "11/10/2024",
        precio: 54.99,
        descuento: 20,
        imagenes: [
            "/img/juegospopulares/metaphor0.png",
            "/img/juegospopulares/metaphor1.png",
            "/img/juegospopulares/metaphor2.png",
            "/img/juegospopulares/metaphor3.png",
            "/img/juegospopulares/metaphor4.png",
            "/img/juegospopulares/metaphor5.png",
            "/img/juegospopulares/metaphor6.png"
        ]
    },
    {
        id: 4,
        nombre: "God of War: Ragnarok",
        descripcion: "God of War: Ragnarok, la continuación del exitoso God of War de 2018, presenta una épica aventura de acción con Kratos enfrentándose al apocalipsis nórdico. Disponible para PS4 y PS5.",
        fecha_lanzamiento: "9/11/2022",
        precio: 39.99,
        descuento: 5,
        imagenes: [
            "/img/juegospopulares/godofwar0.png",
            "/img/juegospopulares/godofwar1.png",
            "/img/juegospopulares/godofwar2.png",
            "/img/juegospopulares/godofwar3.png",
            "/img/juegospopulares/godofwar4.png",
            "/img/juegospopulares/godofwar5.png",
            "/img/juegospopulares/godofwar6.png"
        ]
    },
    {
        id: 5,
        nombre: "Call of Duty: Black Ops 6",
        descripcion: "La sexta entrega de la saga Black Ops ofrece una campaña emocionante y multijugador con novedades y modo Zombis. Disponible para PS4, PS5, Xbox One, Xbox Series y PC.",
        fecha_lanzamiento: "25/10/2024",
        precio: 69.99,
        descuento: 25,
        imagenes: [
            "/img/juegospopulares/callofduty0.png",
            "/img/juegospopulares/callofduty1.png",
            "/img/juegospopulares/callofduty2.png",
            "/img/juegospopulares/callofduty3.png",
            "/img/juegospopulares/callofduty4.png",
            "/img/juegospopulares/callofduty5.png",
            "/img/juegospopulares/callofduty6.png"
        ]
    },
    {
        id: 6,
        nombre: "EA Sports FC 25",
        descripcion: "La segunda edición de EA Sports FC ofrece una experiencia de fútbol más realista con nuevos modos de juego, incluyendo Rush y la inclusión del fútbol femenino. Disponible para múltiples plataformas.",
        fecha_lanzamiento: "27/9/2024",
        precio: 59.99,
        descuento: 10,
        imagenes: [
            "/img/juegospopulares/fifa0.png",
            "/img/juegospopulares/fifa1.png",
            "/img/juegospopulares/fifa2.png",
            "/img/juegospopulares/fifa3.png",
            "/img/juegospopulares/fifa4.png",
            "/img/juegospopulares/fifa5.png"
        ]
    },
    {
        id: 7,
        nombre: "Resident Evil 4 Remake",
        descripcion: "El remake del clásico survival horror de 2005, ahora con gráficos y jugabilidad renovados. Acompaña a Leon S. Kennedy en su misión en un pueblo de España. Disponible para PS4, PS5, Xbox One, Xbox Series y PC.",
        fecha_lanzamiento: "24/3/2023",
        precio: 44.99,
        descuento: 15,
        imagenes: [
            "/img/juegospopulares/resident0.png",
            "/img/juegospopulares/resident1.png",
            "/img/juegospopulares/resident2.png",
            "/img/juegospopulares/resident3.png",
            "/img/juegospopulares/resident4.png",
            "/img/juegospopulares/resident5.png"
        ]
    },
    {
        id: 8,
        nombre: "Dragon Age: The Veilguard",
        descripcion: "La cuarta entrega de la saga Dragon Age ofrece una aventura con un enfoque más orientado a la acción, una historia profunda y decisiones significativas. Disponible para PS5, Xbox Series y PC.",
        fecha_lanzamiento: "31/10/2024",
        precio: 59.99,
        descuento: 10,
        imagenes: [
            "/img/juegospopulares/dragonAge0.png",
            "/img/juegospopulares/dragonAge1.png",
            "/img/juegospopulares/dragonAge2.png",
            "/img/juegospopulares/dragonAge3.png",
            "/img/juegospopulares/dragonAge4.png",
            "/img/juegospopulares/dragonAge5.png"
        ]
    },
    {
        id: 9,
        nombre: "Elden Ring",
        descripcion: "El aclamado juego de acción y rol de FromSoftware, con un vasto mundo abierto y narrativa de George R.R. Martin. Disponible para PS4, PS5, Xbox One, Xbox Series y PC.",
        fecha_lanzamiento: "25/2/2022",
        precio: 49.99,
        descuento: 20,
        imagenes: [
            "/img/juegospopulares/Elden0.png",
            "/img/juegospopulares/Elden1.png",
            "/img/juegospopulares/Elden2.png",
            "/img/juegospopulares/Elden3.png",
            "/img/juegospopulares/Elden4.png",
            "/img/juegospopulares/Elden5.png"
        ]
    },
    {
        id: 10,
        nombre: "Alan Wake 2",
        descripcion: "La secuela de la popular aventura de terror de 2010, con dos historias paralelas y una ambientación única. Disponible para PS5, Xbox Series y PC.",
        fecha_lanzamiento: "27/10/2023",
        precio: 59.99,
        descuento: 15,
        imagenes: [
            "/img/juegospopulares/alanwake0.png",
            "/img/juegospopulares/alanwake1.png",
            "/img/juegospopulares/alanwake2.png",
            "/img/juegospopulares/alanwake3.png",
            "/img/juegospopulares/alanwake4.png",
            "/img/juegospopulares/alanwake5.png",
            "/img/juegospopulares/alanwake6.png"
        ]
    }
];
