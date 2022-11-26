const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".section");

//Parrafo
parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    console.log(`Estoy arrastrando el parrafo: ${parrafo.innerText}`);
    parrafo.classList.add("dragging");
    event.dataTransfer.setData("id", parrafo.id);
  });

  parrafo.addEventListener("dragend", () => {
    //console.log(`He terminado de arrastrar`);
    parrafo.classList.remove("dragging");
  });
});

//Section
secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault(); //hay que añadirle para que pueda funcionar el "drop"
    event.dataTransfer.dropEffect = "copy";
    //console.log("Drag Over");
  });

  seccion.addEventListener("drop", (event) => {
    console.log("Drop");
    const id_parrafo = event.dataTransfer.getData("id");
    console.log(`Parrafo id: ${id_parrafo}`);
    const parrafo = document.getElementById(id_parrafo);
    if (secciones[0].getAttribute("class").includes("rubbish")) {
      parrafo.remove();
    } else {
      seccion.appendChild(parrafo);
    }
  });
});
