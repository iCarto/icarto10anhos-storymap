var config = {
    style: "mapbox://styles/icarto/ckb15844h1en41ipfru5i86xj",
    accessToken:
        "pk.eyJ1IjoiaWNhcnRvIiwiYSI6ImNrYXhyaGh1eDA2cDcycHBpMnltdzJiZDQifQ.keT9u89NkAeuzD7sg0CYWg",
    showMarkers: true,
    theme: "dark",
    alignment: "left",
    title: "#iCarto10años en un mapa",
    subtitle: "Un pequeño recorrido por nuestros 10 años de historia",
    // byline: 'By a Digital Storyteller',
    footer: "Source: source citations, etc.",
    chapters: [
        {
            id: "la-idea-2009",
            title: "La idea [2009]",
            description:
                "Algo sobre como surgió la idea, quien estaba dentro. ¿Algo rollo equipo A?",
            location: {
                center: [-8.40967, 43.33347],
                zoom: 17,
                pitch: 90.0,
                bearing: 0,
            },
            onChapterEnter: [
                // {
                //     layer: '',
                //     opacity: 0.5
                // }
            ],
            onChapterExit: [
                // {
                //     layer: '',
                //     opacity: 0.5
                // }
            ],
        },
        {
            id: "fundacion-icarto-2010",
            title: "Fundación de iCarto [2010]",
            image: "./images/constitucion.jpg",
            description:
                "iCarto se fundó un soleado 30 de Junio de 2010, en plena crisis económica, con algo de inconsciencia, pero con mucha mucha ilusión. Las ganas superaron todos los miedos y 10 años más tarde aquí seguimos, con todas las ganas y con menos miedos.",
            location: {
                center: [-8.40896, 43.34585],
                zoom: 13,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "camino-santiago-2010",
            title: "Camino de Santiago [2010]",
            description:
                "Trabajamos para la Xunta de Galicia en la publicación de la delimitación oficial del Camino Francés. Un proyecto del que nos sentimos muy orgullosos. Una de las primeras veces de las que tenemos constancia en la que en el DOG se publicó un mapa. Todo un reto.",
            location: {
                center: [-7.39105, 42.60364],
                zoom: 8,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "eiel-corunha-2010",
            title: "EIEL Coruña [2010]",
            description:
                "Primer concurso público que ganamos. La EIEL marcó los principios de iCarto ya que fue un proyecto donde muchas de las personas que fundaron la empresa trabajaron previamente y se formaron en GIS y análisis territorial. Para nosotros fue especial que nada más empezar nuestra aventura pudiésemos liderar completamente la EIEL de Coruña, una de las referentes a nivel nacional.",
            location: {
                center: [-8.65894, 42.9818],
                zoom: 11,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "catastro-mexico-2010",
            title: "Catastro México [2010]",
            description:
                "Primer proyecto internacional fuera del ámbito de la cooperación. Nos contratan como expertos en desarrollo en gvSIG para ayudar a una empresa Mexicana a migrar a software libre una solución de gestión de Catastro.",
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
            description:
                "Nuestra primera IDE. En su momento creamos una IDE con un geoportal pionero para compartir datos de la EIEL. Apostamos por un stack basado en OpenLayers + GeoServer + Postgres/PostGIS que estuvo en producción durante 7 años, sin necesidad de mantenimiento. Hoy día la tecnología del portal ha cambiado, pero sigue manteniendo la misma estructura y organización que diseñamos hace ya 9 años.",
            location: {
                center: [-8.27339, 42.50602],
                zoom: 10,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "sixhiara-2012",
            title: "SIXHIARA [2012]",
            description:
                "Primer proyecto que lideramos como Agente de Cooperación, a través de Cooperación Galega aterrizamos en el norte de Mozambique para fortalecer a la administración local en la gestión del Agua a través de los sistemas de información geográfica. Sería el principio de un gran proyecto que nos llevaría por todo el país.",
            location: {
                center: [40.5514, -12.99335],
                zoom: 12,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "gvsig-2012",
            title: "gvSIG 1.12 [2012]",
            description:
                "Con el apoyo de Cartolab y la Asociación gvSIG lideramos la publicación de la versión 1.12 de gvSIG. La última de la rama 1.x que todavía alguna gente sigue usando en sus proyectos.",
            location: {
                center: [-0.36547, 39.47132],
                zoom: 12,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "vias-obras-lugo-2012",
            title: "Vías y Obras Lugo [2012]",
            description:
                "Nuestros primeros trabajos con Referenciación Lineal y Segmentación Dinámica en PostGIS. Hacemos una aplicación con un frontend en gvSIG para la gestión de vías y obras para la Diputación de Lugo. En un momento donde estas técnicas aún estaban poco desarrolladas, creamos nuestra propia solución y <a href='https://icarto.es/participacion-en-el-foss4g-y-sotm-2013/'>la presentamos</a> con bastante éxito en el <a href='http://2013.foss4g.org'>FOSS4G de 2013</a> en Nottingham",
            location: {
                center: [-7.54349, 43.11201],
                zoom: 9,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "primera-trabajadora-remota-2013",
            title: "Primera trabajadora Remota [2013]",
            description:
                "Mireia se convierte en nuestra primera trabajadora en remoto. A partir de ahí, tendemos hacia una empresa distribuida. Desde entonces hemos ido dando pasos para organizar todos nuestros flujos de trabajo y comunicación pensandolos de forma remota y aún seguimos intentando mejorarlos!",
            location: {
                center: [-89.20435, 13.70954],
                zoom: 12,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "ocfloss-2014",
            title: "OCFLOSS [2014]",
            description:
                "De la mano de Igalia una de las compañías de software más molonas de Galicia y el Mundo trabajamos en la Oficina de Software Libre de la Xunta de Galicia, acompañando la liberación de código y la difusión de iniciativas de Software Libre. Es nuestro primer proyecto no GIS, que nos llega por nuestro expertise en el mundo del software libre.",
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
            description:
                "El Proyecto Fortalecimiento REDD+ y Cooperación Sur-Sur de la Comisión Nacional Forestal (CONAFOR), financiado por el PNUD, desarrolló a través de una consultoría una Plataforma de información geográfica para la gestión territorial interinstitucional, que servirá para planificar y dar seguimiento a los incentivos locales para reducir la deforestación y degradación forestal. Nuestra segunda incursión en México y la primera licitación internacional que ganamos, en colaboración con la Asociación gvSIG.",
            location: {
                center: [-100.74463, 22.12635],
                zoom: 5,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "empresa-2014",
            title: "La empresa para quien la trabaje [2014]",
            description:
                "Un cambio de filosofía trascendental para nosotros. Sólo quienes trabajen en la empresa pueden ser socias.",
            location: {
                center: [-8.40676, 43.34853],
                zoom: 18,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "gira-eeuu-2014",
            title: "Gira por EEUU  [2014, 2015]",
            description:
                "Nuestros primeros proyectos con CARTO para clientes de Estados Unidos. Colaboramos en hacer Treekit, una aplicación para el inventariado de árboles, multi-ciudad. Y en implementar Common Labs Inventory una aplicación web para registrar iniciativas de Ciencia Ciudadana del Wilson Center.",
            location: {
                center: [-99.68994, 39.55488],
                zoom: 5,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "cumplimos-5-2015",
            title: "Y cumplimos 5 [2015]",
            description:
                "Cumplimos nuestros primeros 5 años de vida. Hasta ese momento por iCarto han pasado 12 personas, alcanzamos casi las 50.000 horas de trabajo en 39 proyectos, distribuidos en 9 países… y lo celebramos.",
            location: {
                center: [-8.40676, 43.34853],
                zoom: 18,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "primeras-contrataciones-2017",
            title: "Primeros procesos de contratación [2017]",
            description:
                "Aunque suene extraño, no es hasta 2017 cuando creamos nuestra primera oferta de empleo pública. Hasta ese momento se han ido incorporando a iCarto gente del ámbito de CartoLab o personas con las que ya habíamos colaborado anteriormente. Por primera vez hacemos un proceso de contratación público y alguien de fuera de nuestra órbita' entra en la empresa. Aunque no parezca un hecho remarcable, para nosotros supuso un reto abrirnos paso en un mercado laboral del ámbito tecnológico donde la oferta era y es muy grande. Nuestra apuesta: Nuestra filosofía de empresa.",
            location: {
                center: [-8.40676, 43.34853],
                zoom: 18,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "primer-icartinho-2018",
            title: "El primer iCartiño [2018]",
            description:
                "No era la primera vez que las socias de iCarto hacíamos un retiro espiritual para “hablar de nuestras cosas”. Pero es la primera vez que le ponemos nombre y se convierte en algo fijo en nuestro calendario anual.",
            location: {
                center: [-8.81668, 42.64768],
                zoom: 15,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "ourol-2018",
            title: "Ourol [2018]",
            description:
                "Trabajamos con el Ayuntamiento de Ourol en la elaboración del epígrafe de vías del Inventario de Bienes Municipales. Es nuestro primer inventario de este tipo para lo que desarrollamos una metodología propia de toma de datos y desarrollamos una aplicación web.",
            location: {
                center: [-7.64313, 43.56515],
                zoom: 15,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "segundo-icartino-2019",
            title: "El primer iCartiño de socias y trabajadoras [2019]",
            description:
                "Le damos un pequeño giro al iCartiño. Se convierte en un evento más lúdico para personas socias, trabajadoras y sus familias, un fin de semana de convivencia para compartir espacio fuera del trabajo.",
            location: {
                center: [-8.00979, 42.91361],
                zoom: 16,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "innovacion-aecid-2018",
            title: "Innovación AECID [2018, 2019]",
            description:
                "No era la primera vez que trabajabamos con Ingeniería Sin Fronteras Cataluña pero si la primera que presentábamos un proyecto como socios a la convocatoria de proyectos de innovación de la AECID. Gracias a esta financiación desarrollamos una aplicación móvil y escritorio AIGAR, para la gestión de sistemas de agua rurales.",
            location: {
                center: [-89.31855, 13.50686],
                zoom: 14,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "utentes-2020",
            title: "SIRHA: Utentes [2020]",
            description:
                "Con el apoyo de la DWA holandesa (https://dutchwaterauthorities.com/) el SIRHA (Sistema de Información del Recurso Hídrico para ARAs) es implementado en el ARA Centro y el ARA Centro-Norte. Con ello todas las ARAs de Mozambique cuentan con el mismo sistema integral para la gestión de licencias de uso de agua. Lo que empezamos como un proyecto pequeño en el norte del país en 2012 se convierte en todo un sistema de gestión a nivel nacional.",
            location: {
                center: [35.87036, -19.09327],
                zoom: 6,
                pitch: 90.0,
                bearing: 0,
            },
        },
        {
            id: "elias-socio-2020",
            title: "Primera persona socia fuera de la órbita de iCarto [2020]",
            description:
                "Elías es la primera persona socia de iCarto de fuera de nuestro círculo cercano. Hasta este momento las personas que habían entrado como socias o habían pertenecido a CartoLab o habían colaborado con iCarto y tenían vínculos personales con alguna de las socias. Elías es la primera persona que llega a iCarto a través de una oferta de empleo, sin ningún contacto previo con la empresa, y que después de un tiempo como trabajador pasa a ser socio de la misma.",
            location: {
                center: [-7.58582, 42.45986],
                zoom: 15,
                pitch: 90.0,
                bearing: 0,
            },
        },
    ],
};
