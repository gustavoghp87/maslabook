// Meta: toma el arreglo "words" de palabras buscadas, las desprende de acentos y diéresis, las pasa a minúsculas, y genera el array "coleccion" que contiene todas las combinaciones posibles de acentos ortográficos

module.exports = crearColeccion = words => {

    console.log("Función crearColeccion", words);

    let coleccion = [];

    if (words.length < 8) {
      words.forEach(element => {
        let palabra = [];
        let una = element.toLowerCase();
        if (una.indexOf('á')!=-1) {
          let posi = una.indexOf('á');
          una = una.substring(0, posi) + "a" + una.substring(posi+1, una.length);
        }
        if (una.indexOf('é')!=-1) {
          let posi = una.indexOf('é');
          una = una.substring(0, posi) + "e" + una.substring(posi+1, una.length);
        }
        if (una.indexOf('í')!=-1) {
          let posi = una.indexOf('í');
          una = una.substring(0, posi) + "i" + una.substring(posi+1, una.length);
        }
        if (una.indexOf('ó')!=-1) {
          let posi = una.indexOf('ó');
          una = una.substring(0, posi) + "o" + una.substring(posi+1, una.length);
        }
        if (una.indexOf('ú')!=-1) {
          let posi = una.indexOf('ú');
          una = una.substring(0, posi) + "u" + una.substring(posi+1, una.length);
        }
        if (una.indexOf('ü')!=-1) {
          let posi = una.indexOf('ü');
          una = una.substring(0, posi) + "u" + una.substring(posi+1, una.length);
        }
        palabra.push({ 'post': new RegExp( una, 'i') });
        ///////////////////////////////////////////////////////////////////////////////

        if (una.indexOf('a') != -1) {
          //dos = una.replace("a", "á");
          let letras = [];
          for (i=0; i<una.length; i++) {
            if (una[i]=="a") {
              letras.push(i)
            }
          }
          if (letras.length > 0) {
            letras.forEach(element => {
              dos = una.substring(0, element) + "á" + una.substring(element+1, una.length);
              //console.log("DOS", dos);
              palabra.push({ 'post': new RegExp( dos, 'i') });
            });
          }
        }

        if (una.indexOf('e') != -1) {
          //dos = una.replace("a", "á");
          let letras = [];
          for (i=0; i<una.length; i++) {
            if (una[i]=="e") {
              letras.push(i)
            }
          }
          if (letras.length > 0) {
            letras.forEach(element => {
              dos = una.substring(0, element) + "é" + una.substring(element+1, una.length);
              //console.log("DOS", dos);
              palabra.push({ 'post': new RegExp( dos, 'i') });
            });
          }
        }

        if (una.indexOf('i') != -1) {
          //dos = una.replace("a", "á");
          let letras = [];
          for (i=0; i<una.length; i++) {
            if (una[i]=="i") {
              letras.push(i)
            }
          }
          if (letras.length > 0) {
            letras.forEach(element => {
              dos = una.substring(0, element) + "í" + una.substring(element+1, una.length);
              //console.log("DOS", dos);
              palabra.push({ 'post': new RegExp( dos, 'i') });    
            });
          }
        }

        if (una.indexOf('o') != -1) {
          //dos = una.replace("a", "á");
          let letras = [];
          for (i=0; i<una.length; i++) {
            if (una[i]=="o") {
              letras.push(i)
            }
          }
          if (letras.length > 0) {
            letras.forEach(element => {
              dos = una.substring(0, element) + "ó" + una.substring(element+1, una.length);
              //console.log("DOS", dos);
              palabra.push({ 'post': new RegExp( dos, 'i') });    
            });
          }
        }

        if (una.indexOf('u') != -1) {
          //dos = una.replace("a", "á");
          let letras = [];
          for (i=0; i<una.length; i++) {
            if (una[i]=="u") {
              letras.push(i)
            }
          }
          if (letras.length > 0) {
            letras.forEach(element => {
              dos = una.substring(0, element) + "ú" + una.substring(element+1, una.length);
              //console.log("DOS", dos);
              palabra.push({ 'post': new RegExp( dos, 'i') });    
            });
          }
        }

        if (una.indexOf('u') != -1) {
          //dos = una.replace("a", "á");
          let letras = [];
          for (i=0; i<una.length; i++) {
            if (una[i]=="u") {
              letras.push(i)
            }
          }
          if (letras.length > 0) {
            letras.forEach(element => {
              dos = una.substring(0, element) + "ü" + una.substring(element+1, una.length);
              //console.log("DOS", dos);
              palabra.push({ 'post': new RegExp( dos, 'i') });    
            });
          }
        }

        coleccion.push(palabra);
      });

      console.log("COLECCION:", coleccion)


      // queryWords.push({
      //   'post'   :   new RegExp( words[i], 'i')
      // })

      //queryWords.push({ 'post': new RegExp( "mandarina", 'i')});
      //queryWords.push({ 'post': new RegExp( "central", 'i') });
    }


//  ORIGINAL
    // if (words.length < 30) {
    //   for (i=0; i<words.length; i++) {
    //     queryWords.push({
    //       'post'   :   new RegExp( words[i], 'i')
    //     })
    //   }
    //   console.log(queryWords)
    // }
    
    else {
      coleccion = [ {'post': new RegExp ("idiota", "i")} ]
    }
    
    if (coleccion[0]==undefined) {
      coleccion[0] = [{ 'post': new RegExp( "", 'i') }]
    }
    if (coleccion[1]==undefined) {
      coleccion[1] = [{ 'post': new RegExp( "", 'i') }]
    }
    if (coleccion[2]==undefined) {
      coleccion[2] = [{ 'post': new RegExp( "", 'i') }]
    }
    if (coleccion[3]==undefined) {
      coleccion[3] = [{ 'post': new RegExp( "", 'i') }]
    }
    if (coleccion[4]==undefined) {
      coleccion[4] = [{ 'post': new RegExp( "", 'i') }]
    }
    if (coleccion[5]==undefined) {
      coleccion[5] = [{ 'post': new RegExp( "", 'i') }]
    }
    if (coleccion[6]==undefined) {
      coleccion[6] = [{ 'post': new RegExp( "", 'i') }]
    }

    return coleccion;
};