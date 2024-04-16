var map = L.map('map').setView([1.615093538347441, -75.60487343235629], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 30,
    attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.control.scale().addTo(map);

const createMarker=({longitude,latitude,name})=>{
    L.marker([longitude,latitude]).addTo(map).bindPopup(name);
}

const createCircle=(longitude,latitude,name)=>{
    let circle=L.circle([longitude,latitude],500,{
        color:'red',
        fillColor:'#f03',
        fillOpacity:0.5
    }).addTo(map);

}

const arrayData=[
    {
        longitude:1.6203414893043444,
        latitude:-75.60424487680427,
        name:'Univerisdad de la amazonia' 
    },
    {
        longitude:1.6152575161257192,
        latitude:-75.61384927680432,
        name:'Alcaldia de Florencia'
    }
]

arrayData.forEach((element)=>{
    createMarker(element);
})

createCircle(1.6152575161257192,-75.61384927680432,'Centro de la ciudad')

const polygon = L.polygon([
    [1.6151725674862907, -75.61370335381578],
    [1.615398946335202, -75.61303032664803],
    [1.6146927840908658, -75.6127890236682],
    [1.614509483396266, -75.61350963560602]
    ]).addTo(map)
    .bindPopup ('Plaza santander');

    const pointA = new L.LatLng(1.6189232477022646, -75.60636844998805);
    const pointB = new L.LatLng(1.6201220965678613, -75.60518826016784);
    const pointC = new L.LatLng(1.6200870238717437, -75.60495222220378);
    const pointD = new L.LatLng(1.6200455743210291, -75.60426324652495);

    const latlngs = [pointA, pointB,pointC,pointD];
    const polyline = L.polyline(
    latlngs, {color: 'red'}
    )
    .addTo(map)
    .bindPopup ('De mi casa a la universidad');


