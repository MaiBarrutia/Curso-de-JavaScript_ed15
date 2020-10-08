const textArea = document.querySelector("#text");
const convertButton = document.querySelector("#convert");
const opinion = document.querySelector("#opinion");

convertButton.onclick = () => {
    const text = textArea.value; //const { value: text } = textArea;

    //convertir vocales en i
    const newText = text.replace(/[aeiou]/gm, "i"); //g -- global m-- multilinea

    opinion.innerHTML = `<b>${newText}</b>`; // sustituir el string vacio por el resultado en negrita
};