const knjige = require("../knjige/knjige");

function sveKnjige(){
    return knjige.Knjige;
}
exports.sveKnjige = ()=>sveKnjige();

function addKnjiga(id, naziv, autor){
    knjige.Knjige.push({
        "id": id,
        "naziv": naziv,
        "autor": autor
    });
}
exports.addKnjiga = (id,naziv,autor)=>addKnjiga(id,naziv,autor);

function getKnjiga(id){
    knjige.Knjige.forEach(element => {
        if(element.id == id){
            console.log(element);
        }
    });
}
exports.getKnjiga = (id)=>getKnjiga(id);

function postaviAutora(naziv, autor){
    knjige.Knjige.forEach(element => {
        if(element.naziv == naziv){
            element.autor = autor;
        }
    });
}
exports.postaviAutora = (naziv,autor)=>postaviAutora(naziv,autor);

function deleteKnjiga(id){
    knjige.Knjige.splice(knjige.Knjige.findIndex(element => element.id == id),1);
}
exports.deleteKnjiga = (id)=>deleteKnjiga(id);

function getKnjigaByAutor(autor){
    knjige.Knjige.forEach(element => {
        if(element.autor == autor){
            console.log(element);
        }
    });
}
exports.getKnjigaByAutor = (autor)=>getKnjigaByAutor(autor);