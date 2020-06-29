var config = {
    style: "mapbox://styles/icarto/ckb150abi0rj31ipbw4sfa6oy",
    accessToken:
        "pk.eyJ1IjoiaWNhcnRvIiwiYSI6ImNrYXhyaGh1eDA2cDcycHBpMnltdzJiZDQifQ.keT9u89NkAeuzD7sg0CYWg",
    showMarkers: false,
    theme: "dark",
    alignment: "left",
    logo: "./images/logo.png",
    title: "Un pequeño recorrido por nuestra historia #iCarto10años",
    //subtitle: "Un pequeño recorrido por nuestros 10 años de historia",
    // byline: 'By a Digital Storyteller',
    footer: "<a href=\"https://icarto.es\">iCarto</a> - <a href=\"https://twitter.com/hashtag/iCarto10a%C3%B1os?src=hash&f=live\">#iCarto10años</a> - "
    + "<a href=\"https://www.youtube.com/playlist?list=PLRcNgXUv_UCzKnQkZv-fPb_1CIlONw6Kz\">#conociendoiCartians</a>",
    chapters: [
        {
            id: "la-idea-2009",
            title: "La idea [2009]",
            image: "./images/the-c-team.png",
            description:
                "En el año 2009 un grupo de amigos del laboratorio de Cartografía de la UDC, que formaban un equipo, tuvieron la idea de montar una empresa. "
                + "Hoy, 10 años más tarde algunos todavía continúan. Si tiene algún problema que necesite una solución con tecnología \"Geo\" y se los encuentra, quizás puedan ayudarle.",
            location: {
                center: [-8.41461, 43.33328],
                zoom: 15.52,
                pitch: 0.0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'caminos-udc-etiqueta',
                    opacity: 1.0
                }
            ],
            onChapterExit: [
                {
                    layer: 'caminos-udc-etiqueta',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "fundacion-icarto-2010",
            title: "Fundación de iCarto [2010]",
            image: "./images/constitucion.jpg",
            description:
                "iCarto se fundó un soleado 30 de Junio de 2010, en plena crisis económica, con algo de inconsciencia, pero con mucha mucha ilusión. "
                + "Las ganas superaron todos los miedos y 10 años más tarde aquí seguimos, con todas las ganas y con menos miedos.",
            location: {
                center: [-8.40896, 43.34585],
                zoom: 14,
                pitch: 60.0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'icarto',
                    opacity: 1.0
                }
            ],
            onChapterExit: [
                {
                    layer: 'icarto',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "camino-santiago-2010",
            title: "Camino de Santiago [2010]",
            image: "./images/camino-santiago.png",
            description:
                "Los proyectos relacionados con el Camino de Santiago marcaron los inicios de iCarto. Trabajamos para la Xunta de Galicia en la publicación de la delimitación oficial del Camino Francés. "
                + "Un proyecto del que nos sentimos muy orgullosos. Una de las primeras veces de las que tenemos constancia en la que en el DOG se publicó un mapa. Todo un reto.",
            location: {
                center: [-7.43504, 42.77857],
                zoom: 9,
                pitch: 60.0,
                bearing: -84,
            },
            onChapterEnter: [
                {
                    layer: 'trazado-camino',
                    opacity: 1.0
                }
            ],
            onChapterExit: [
                {
                    layer: 'trazado-camino',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "eiel-corunha-2010",
            title: "EIEL Coruña [2010]",
            image: "./images/eiel-corunha.png",
            description:
                "Primer concurso público que ganamos. La EIEL fue otro de los proyectos con un gran vínculo en iCarto, ya que fue un proyecto donde muchas de las personas que fundaron la empresa trabajaron previamente "
                + "y se formaron en GIS y análisis territorial. Para nosotros fue especial que nada más empezar nuestra aventura pudiésemos liderar completamente la "
                + "<a href=\"https://webeiel.dacoruna.gal/es/\">EIEL de Coruña</a>, una de las referentes a nivel nacional.",
            location: {
                center: [-8.65894, 42.9818],
                zoom: 8,
                pitch: 0.0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'provincia-corunha',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'provincia-corunha',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "catastro-mexico-2011",
            title: "Catastro México [2011]",
            image: "./images/catastro.png",
            description:
                "En el año 2011 llegó nuestro primer proyecto internacional fuera del ámbito de la cooperación. Nos contratan como expertos en desarrollo en gvSIG "
                + "para ayudar a una empresa Mexicana a migrar a software libre una solución de gestión de Catastro. Trabajamos intensamente con ellos, incluyendo 15 días en sus oficinas de Mexico D.F., "
                + "diseñando la solución, ayundándoles a implementarla y capacitando a su equipo para seguir mejorándola.",
            location: {
                center: [-99.07848, 19.41965],
                zoom: 11,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "idepo-2011",
            title: "IDEPO [2011]",
            image: "./images/idepo.png",
            description:
                "Nuestra primera IDE. En su momento creamos una IDE con un geoportal pionero para compartir datos de la EIEL. "
                + "Apostamos por un stack basado en OpenLayers + GeoServer + Postgres/PostGIS que estuvo en producción durante 7 años, sin necesidad de mantenimiento. "
                + "Hoy día la tecnología del portal ha cambiado, pero <a href=\"https://ide.depo.gal/\">sigue manteniendo la misma estructura y organización</a> que diseñamos hace ya 9 años.",
            location: {
                center: [-8.27339, 42.50602],
                zoom: 8,
                pitch: 0.0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'provincia-pontevedra',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'provincia-pontevedra',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "sixhiara-2012",
            title: "SIXHIARA [2012]",
            // image: "./images/sixhiara2012.jpg",
            video: "https://www.youtube.com/embed/nejmhFhbKkE",
            description:
                "Primer proyecto que lideramos como Agente de Cooperación. A través de <a href=\"https://cooperacion.xunta.gal\">Cooperación Galega</a> aterrizamos en el norte de Mozambique para fortalecer a la administración "
                + "local en la gestión del Agua, mediante el uso de los sistemas de información geográfica. Sería el principio de un gran proyecto <a href=\"https://icarto.es/proyecto-sixhiara/\">(SIXHIARA)</a> "
                + "que nos llevaría por todo el país.",
            location: {
                center: [35.75320, -18.91574],
                zoom: 4.7,
                pitch: 0.0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'aras-aryvv1',
                    opacity: 1.0
                },
                {
                    layer: 'aras-norte',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'aras-norte',
                    opacity: 0.0
                },
                {
                    layer: 'aras-aryvv1',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "gvsig-2012",
            title: "gvSIG 1.12 [2012]",
            image: "./images/gvsig.png",
            description:
                "Con el apoyo de Cartolab y la Asociación gvSIG <a href=\"https://icarto.es/publicado-gvsig-desktop-1-12/\">lideramos la publicación de la versión 1.12 de gvSIG</a>. La última de la rama 1.x que todavía "
                + "alguna gente sigue usando en sus proyectos. La apuesta por este proyecto de software libre fue clave en nuestros inicios, contribuímos todo lo que pudimos al núcleo del proyecto, lo que nos generó "
                + "bastante reconocimiento entre la comunidad, la posibilidad de formar parte del Comité de Dirección Técnica y tener una herramienta base muy potente sobre la que hacer desarrollos a medida "
                + "para nuestros clientes, aplicando aquello de \"Connect on your similarities. Profit from your differences\".",
            location: {
                center: [-0.36547, 39.47132],
                zoom: 12,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "vias-obras-lugo-2012",
            title: "VIAL [2012]",
            image: "./images/vial.png",
            description:
                "Nuestros primeros trabajos con Referenciación Lineal y Segmentación Dinámica en PostGIS. Hacemos una aplicación (VIAL) con un frontend en gvSIG para la gestión de vías y obras para la Diputación de Lugo. "
                + "En un momento donde estas técnicas aún estaban poco desarrolladas, creamos nuestra propia solución y <a href='https://icarto.es/participacion-en-el-foss4g-y-sotm-2013/'>la presentamos</a> con "
                + "bastante éxito en el <a href='http://2013.foss4g.org'>FOSS4G de 2013</a> en Nottingham",
            location: {
                center: [-7.53701, 43.01161],
                zoom: 8,
                pitch: 0.0,
                bearing: 0.0,
            },
            onChapterEnter: [
                {
                    layer: 'vias-lugo-4iurs2',
                    opacity: 0.5
                },
                {
                    layer: 'lugo-7x8om1',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'vias-lugo-4iurs2',
                    opacity: 0.0
                },
                {
                    layer: 'lugo-7x8om1',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "primera-trabajadora-remota-2013",
            title: "Primera trabajadora Remota [2013]",
            image: "./images/mireia.png",
            description:
                "Mireia se convierte en nuestra primera trabajadora en remoto, desde El Salvador. A partir de ahí, tendemos hacia una empresa distribuida. Desde entonces hemos ido dando pasos para organizar "
                + "todos nuestros flujos de trabajo y comunicación pensándolos de forma remota. ¡Y aún seguimos intentando mejorarlos!",
            location: {
                center: [-48.65670, 34.32514],
                zoom: 3.22,
                pitch: 0.0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'corunha-salvador-108pbj',
                    opacity: 1.0
                }
            ],
            onChapterExit: [
                {
                    layer: 'corunha-salvador-108pbj',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "ocfloss-2014",
            title: "OCFLOSS [2014]",
            image: "./images/mancomun.jpg",
            description:
                "De la mano de <a href=\"https://www.igalia.com/\">Igalia</a> una de las compañías de software más molonas de Galicia y el Mundo trabajamos en la Oficina de Software Libre de la Xunta de Galicia, "
                + "acompañando la liberación de código y la difusión de iniciativas de Software Libre. Es nuestro primer proyecto no GIS, que nos llega por nuestro expertise en el mundo del software libre, "
                + "y en él hacemos cosas diferentes, como generar contenido multimedia, o producir un podcast!",
            location: {
                center: [-8.53998, 42.8771],
                zoom: 12,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "sigeco-2014",
            title: "Sigeco [2014]",
            video: "https://player.vimeo.com/video/131046534",
            description:
                "Dos años después de nuestra primera visita volvimos a México. Esta vez a través de una licitación internacional en colaboración con la Asociación gvSIG y financiada por el PNUD, a través del "
                + " proyecto Fortalecimiento REDD+. En este proyecto desarrollamos la <a href=\"https://icarto.es/plataforma-sigeco/\">plataforma SIGECO</a>, que sirve a la Comisión Nacional Forestal (CONAFOR) "
                + "para planificar y dar seguimiento a los incentivos locales para reducir la deforestación y degradación forestal.",
            location: {
                center: [-108.10281, 21.58766],
                zoom: 4.20,
                pitch: 0.0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'estados-redd',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'estados-redd',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "empresa-2014",
            title: "La empresa para los socios trabajadores [2014]",
            video: "https://www.youtube.com/embed/fsaufCu7fLs",
            description:
                "Un cambio de filosofía trascendental para nosotros. Sólo quienes trabajen en la empresa pueden ser socias.",
            location: {
                center: [-8.40676, 43.34853],
                zoom: 18,
                pitch: 90.0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'icarto',
                    opacity: 1.0
                }
            ],
            onChapterExit: [
                {
                    layer: 'icarto',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "gira-eeuu-2014",
            title: "Gira por EEUU  [2014, 2015]",
            image: "./images/commons-lab.png",
            description:
                "Nuestros primeros proyectos con <a href=\"https://carto.com/\">CARTO</a> para clientes de Estados Unidos. Colaboramos en hacer Treekit, una aplicación para el inventariado de árboles, multi-ciudad. "
                + "Y en implementar Common Labs Inventory una aplicación web para registrar iniciativas de Ciencia Ciudadana del Wilson Center.",
            location: {
                center: [-76.93000, 38.96187],
                zoom: 7.69,
                pitch: 60.0,
                bearing: 47.74,
            },
        },
        {
            id: "cumplimos-5-2015",
            title: "Y cumplimos 5 años [2015]",
            image: "./images/5anhos.jpg",
            description:
                "Cumplimos nuestros primeros 5 años de vida. Hasta ese momento por iCarto han pasado 12 personas, alcanzamos casi las 50.000 horas de trabajo en 39 proyectos, distribuidos en 9 países… y lo celebramos.",
            location: {
                center: [-8.40676, 43.34853],
                zoom: 18,
                pitch: 60.0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'icarto',
                    opacity: 1.0
                }
            ],
            onChapterExit: [
                {
                    layer: 'icarto',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "primeras-contrataciones-2016",
            title: "Primeros procesos de contratación [2016]",
            // image: "./images/contratacion.png",
            video: "https://www.youtube.com/embed/Z1OyIK3mLOc",
            description:
                "Aunque suene extraño, no es hasta 2016 cuando creamos nuestra primera oferta de empleo pública. Hasta ese momento se han ido incorporando a iCarto gente del ámbito de CartoLab o personas "
                + "con las que ya habíamos colaborado anteriormente. Por primera vez hacemos un proceso de contratación público y alguien de fuera de nuestra \"órbita\" entra en la empresa. Aunque no parezca "
                + "un hecho remarcable, para nosotros supuso un reto abrirnos paso en un mercado laboral del ámbito tecnológico donde la oferta era y es muy grande. Nuestra apuesta: Nuestra filosofía de empresa.",
            location: {
                center: [-8.40676, 43.34853],
                zoom: 18,
                pitch: 90.0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'icarto',
                    opacity: 1.0
                }
            ],
            onChapterExit: [
                {
                    layer: 'icarto',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "primer-icartinho-2018",
            title: "El primer iCartiño [2018]",
            image: "./images/primer-icartinho.jpg",
            description:
                "No era la primera vez que las socias de iCarto hacíamos un retiro espiritual para \“hablar de nuestras cosas\”. Pero es la primera vez que le ponemos nombre y se convierte en algo fijo en nuestro "
                + "calendario anual.",
            location: {
                center: [-8.82082, 42.64824],
                zoom: 11.73,
                pitch: 60.0,
                bearing: -84.80,
            },
        },
        {
            id: "ourol-2018",
            title: "Ourol [2018]",
            image: "./images/ourol.png",
            description:
                "Trabajamos con el Ayuntamiento de Ourol en la elaboración del epígrafe de vías del Inventario de Bienes Municipales. Es nuestro primer inventario de este tipo para lo que desarrollamos una metodología "
                + "propia de toma de datos y desarrollamos una aplicación web.",
            location: {
                center: [-7.67877, 43.56701],
                zoom: 11,
                pitch: 60.0,
                bearing: -24.00,
            },
            onChapterEnter: [
                {
                    layer: 'ourol-5oc3r3',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'ourol-5oc3r3',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "segundo-icartino-2019",
            title: "El primer iCartiño de socias y trabajadoras [2019]",
            image: "./images/nuevo-icartinho.jpg",
            description:
                "Le damos un pequeño giro al iCartiño. Se convierte en un evento más lúdico para personas socias, trabajadoras y sus familias, un fin de semana de convivencia para compartir espacio fuera del trabajo.",
            location: {
                center: [-8.00856, 42.93324],
                zoom: 9.16,
                pitch: 60.0,
                bearing: -29.60,
            },
        },
        {
            id: "innovacion-aecid-2018",
            title: "Innovación AECID [2019]",
            image: "./images/aigar.png",
            description:
                "No era la primera vez que trabajabamos con Ingeniería Sin Fronteras Cataluña pero si la primera que presentábamos un proyecto como socios a la convocatoria de proyectos de innovación de la AECID. "
                + "Gracias a esta financiación desarrollamos una plataforma para la gestión de sistemas de agua rurales (<a href=\"https://icarto.es/aigar/\">AIGAR</a>), formada por una aplicación Web/Escritorio "
                + "y una aplicación móvil para las lecturas.",
            location: {
                center: [-89.32239, 13.49293],
                zoom: 7.37,
                pitch: 0.0,
                bearing: 0,
            },
        },
        {
            id: "utentes-2020",
            title: "SIRHA: Utentes [2020]",
            // image: "./images/sirha.jpg",
            video: "https://www.youtube.com/embed/6hJqcLLuF7k",
            description:
                "Con el apoyo de la <a href=\"https://dutchwaterauthorities.com/\">DWA holandesa</a> el SIRHA (Sistema de Información del Recurso Hídrico para ARAs) es implementado en el ARA Centro y el ARA Centro-Norte. "
                + "Con ello todas las ARAs de Mozambique cuentan con el mismo sistema integral para la gestión de licencias de uso de agua. Lo que empezamos como un proyecto pequeño en el norte del país en 2012 "
                + "se convierte así en todo un sistema de gestión a nivel nacional.",
            location: {
                center: [35.75320, -18.91574],
                zoom: 4.7,
                pitch: 0.0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'aras-aryvv1',
                    opacity: 1.0
                },
                {
                    layer: 'aras-7xyvw8',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'aras-aryvv1',
                    opacity: 0.0
                },
                {
                    layer: 'aras-7xyvw8',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "elias-socio-2020",
            title: "Primera persona socia fuera de la órbita de iCarto [2020]",
            video: "https://www.youtube.com/embed/Txwjj1j59hg",
            description:
                "Elías es la primera persona socia de iCarto de fuera de nuestro círculo cercano. Hasta este momento las personas que habían entrado como socias o habían pertenecido a CartoLab o habían colaborado con iCarto y tenían vínculos personales con alguna de las socias. Elías es la primera persona que llega a iCarto a través de una oferta de empleo, sin ningún contacto previo con la empresa, y que después de un tiempo como trabajador pasa a ser socio de la misma.",
            location: {
                center: [-7.59926, 42.44083],
                zoom: 12.76,
                pitch: 60.0,
                bearing: -101.60,
            },
        },
        {
            id: "audasa-2020",
            title: "SIGA, nuestro proyecto franquicia [2010 - 2020]",
            image: "./images/siga.jpg",
            description:
                "Al <a href=\"https://icarto.es/sistema-siga/\">proyecto SIGA</a> lo llamamos nuestro proyecto franquicia porque nos ha acompañado todos estos años, desde la fundación de iCarto, y todavía continúa vivo. "
                + "Junto a nuestro cliente AUDASA hemos ido diseñando "
                + "y perfeccionando un completo sistema de gestión para una autopista, tomando como eje fundamental la información geográfica. Un proyecto lleno de retos que comenzó con un GIS de escritorio "
                + "personalizado y que hoy cuenta además con dos bases de datos geográficas en localizaciones físicas diferentes que se sincronizan entre sí, 2 geoservers, o una aplicación de gestión de expedientes "
                + "y gestión documental de creación propia.",
            location: {
                center: [-8.42062, 42.99572],
                zoom: 7.45,
                pitch: 0.0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'autopistas-8lq2gl',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'autopistas-8lq2gl',
                    opacity: 0.0
                }
            ],
        },
        {
            id: "despedida-2020",
            title: "#iCarto10años [2020]",
            image: "./images/logo.png",
            description:
                "Y cumplimos 10 años... los aniversarios son puntos congelados de una línea temporal, que sirven para evaluar el antes y el después. Mirando hacia atrás nos sentimos afortunadas por los trabajos realizados "
                + "y por todas las personas que se han cruzado en nuestro camino, socias, trabajadoras, clientes y colaboradoras. Mirando al futuro no podemos estar más que ansiosas y optimistas por ver lo que nos "
                + "deparará. Por muchos otros 10 años de iCarto. GRACIAS!!",
            location: {
                center: [-8.40676, 43.34853],
                zoom: 18,
                pitch: 60.0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'icarto',
                    opacity: 1.0
                }
            ],
            onChapterExit: [
                {
                    layer: 'icarto',
                    opacity: 0.0
                }
            ],
        },
    ],
};
