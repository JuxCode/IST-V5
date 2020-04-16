knjigeFunc = require("./knjigeFunc/knjigeFunc");

console.log("\n\n");
console.log("/*  ---  DODAVANJE NOVE KNJIGE  ---  */\n");
console.log('6,"Test Nova","Test Autor"\n\n');
knjigeFunc.addKnjiga(6,"Test Nova","Test Autor");
console.log(knjigeFunc.sveKnjige());
console.log("\n\n");

console.log("/*  ---  VRACANJE KNJIGE  ---  */\n");
console.log('ID: 2\n\n');
knjigeFunc.getKnjiga(2);
console.log("\n\n");

console.log("/*  ---  PROMENA AUTORA KNJIGE  ---  */\n");
console.log('"Knjiga 1","Autor 1 Test"\n\n');
knjigeFunc.postaviAutora("Knjiga 1","Autor 1 Test");
console.log(knjigeFunc.sveKnjige());
console.log("\n\n");

console.log("/*  ---  BRISANJE KNJIGE IZ LISTE  ---  */\n");
console.log('ID: 4\n\n');
knjigeFunc.deleteKnjiga(4);
console.log(knjigeFunc.sveKnjige());
console.log("\n\n");

console.log("/*  ---  VRACANJE KNJIGE PO AUTORU  ---  */\n");
console.log('Autor: Autor 3\n\n');
knjigeFunc.getKnjigaByAutor("Autor 3");