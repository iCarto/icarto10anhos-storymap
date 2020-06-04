var config = {
    style: 'mapbox://styles/icarto/ckb15844h1en41ipfru5i86xj',
    accessToken: 'pk.eyJ1IjoiaWNhcnRvIiwiYSI6ImNrYXhyaGh1eDA2cDcycHBpMnltdzJiZDQifQ.keT9u89NkAeuzD7sg0CYWg',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: '#iCarto10años en un mapa',
    subtitle: 'Un pequeño recorrido por nuestros 10 años de historia',
    // byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Fundación de iCarto [2010]',
            image: './images/constitucion.jpg',
            description: 'iCarto se fundó un soleado 30 de Junio de 2010, en plena crisis económica, con algo de inconsciencia, pero con mucha mucha ilusión. Las ganas superaron todos los miedos y 10 años más tarde aquí seguimos, con todas las ganas y con menos miedos.',
            location: {
                center: [-8.40896, 43.34585],
                zoom: 13,
                pitch: 90.0,
                bearing: 0
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
            ]
        },
        {
            id: 'other-identifier',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
