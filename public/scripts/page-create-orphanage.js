//create map
const map = L.map("map-id").setView([-23.6971634, -46.5566965], 16);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create e add marker
map.on('click', function(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    //remover

    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat,lng], {icon}).addTo(map);

});

//adicionar campo de fotos
function addPhotoField(){
    //pegar container de fotos #images
    const container = document.querySelector('#images');
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload') 
    //realizar o clone da ultima imagem add
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true);
    //verificar se o campo está vazio
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return;
    }
    //limpar o campo antes de adicionar ao container de imagens
    newFieldContainer.children[0].value = "";
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
}
function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload');
    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value = "";
        return;
    }

    span.parentNode.remove();
}
//troca do sim e não
function toggleSelect(event){
    //retirar a classe active dos botões
    document.querySelectorAll('.button-select button').forEach((button) => button.classList.remove('active'));
    //pegar o botão clicado
    const button = event.currentTarget;
    button.classList.add('active');
    //verificar o valor
    const input = document.querySelector('[name = "open_on_weekends"]');

    input.value = button.dataset.value
    //atualizar o input com o valor selecionado

}