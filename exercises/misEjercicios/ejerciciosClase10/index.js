//1- Descripción: Empiezas con una funcion que coje el objeto collection, una id, una prop (como artist o tracks) y un valor. Completa la funcion usando las siguientes reglas para modificar el objeto coleccion:
const collection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

//La función siempre debe retornar el objeto entero
//Si una prop no es tracks y values no es un string vacio, actualiza o crea el nuevo album que entra en la prop al valor correspondiente.
//Si la prop es tracks pero el almbum no tiene tracks, crea un array vacio y añade el valor correspondiente a él.
//Si la prop es tracks y el valor no es un string vacio, añade el valor al final del array de tracks.
//Si el valor es un string vacio, borra la prop del album correspondiente.
function updateRecords(object, id, prop, value) {
  if (value === "") {
    object[id][prop] = null;
  } else if(prop === "tracks"){
    if (object[id]["tracks"] == null) {
      object[id]["tracks"] = [];
    }
    object[id]["tracks"].push(value);
  } else{
    object[id][prop] = value;
  }
  return object;
}

updateRecords(collection, 5439, "artist", "ABBA");

//2- Descripción: Convierte el estamento switch en un objeto llamado tabla. Usa el val para retornar el string correcto y asocialo en la variable result
function phoneticLookup(val) {
  const tabla = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  return tabla[val];
}

phoneticLookup("charlie");

//3- Descripcion: Coger cada string que haya dentro de tracks
const albums = Object.values(collection);

//Version 1
albums.forEach((album) => {
  if (album.tracks != null){
    album.tracks.forEach((track) => console.log(track));
  }
});

//Version 2
albums.forEach(
  (album)=> 
    album.tracks != null && album.tracks.forEach((track) => console.log(track));
)

//Version 3: ternario (mejor no hacerlo asi en este caso)
albums.forEach(
  (album)=> 
    album.tracks != null ? album.tracks.forEach((track) => console.log(track)): void()
)

//4- Mapear un nuevo array que tenga la propiedad artista y el valor sea el titulo del album
//Ejemplo de como tiene que quedar:[{Prince: "1999"}]
const newArray = Object
  .values(collection)
  .map((album) => {
    if(album.artist != null && album.albumTitle != null){
      return {[album.artist]: album.albumTitle}
    }
  })
  //5- Mapear un nuevo array que tenga el nombre de los artistas
  //.map((value) => Object.values(value)[0])
  .filter((value) => value != null) //--> para que no de undefined porque no esta definidos los artistas en algunos, lo hariamos con filter

  //6- Filtrar un artista que empiece por b
  .filter((value) => value.artist.startsWith("B"));

console.log(newArray);