// Esperar a que el DOM y el CSS estén completamente cargados.
window.addEventListener("load", () => {
});

// Comentarios por cada situación de la historia.
alert("¡Bienvenido a la historia!");
alert("Has logrado sobrevivir al impacto inicial del apagón global. La ciudad es un caos. El grupo tiene pocas provisiones, sin saber qué ocurrió realmente.");
alert("Todo indica que si no logran encontrar suministros, se convertirán en una estadística más.");
alert("Hay rumores de una salida segura a través del sistema subterráneo de metro. Pero antes, debes resistir en la superficie el tiempo suficiente para prepararte.");

// Variables pre-definidas para mantener las estadísticas del usuario.
let vida = 5;
let miembros = 5;
let mochila = [];

alert("Buscar comida...");
alert("El hambre aprieta y la sed comienza a nublar el juicio del grupo. Es momento de actuar con rapidez, pero también con cautela. ¿Dónde buscar recursos vitales?");

// Variable para las decisiones del jugador.
let decision;

// Bucle para hacer que sí o sí el usuario decida entre alguna de sus opciones.
while (true) {
    decision = prompt("¿Qué quieres hacer, sobreviviente?\n \nOpción A: Ir al supermercado abandonado.\n \nOpción B: Robar una mochila a un sobreviviente.");

    // Si no cancela la ventana emergente del prompt, le dará un aviso y se le volverá a preguntar.
    if (decision === null) {
        alert("¡No puedes quedarte sin decidir! La inacción es peligrosa...");
        continue;
    }
    // En dado caso de que elija una de las opciones, se le dará un aviso con lo que pasó y obtuvo.
    decision = decision.toLowerCase();

    if (decision === "a") {
        alert("¡Han encontrado comida y agua!");
        mochila.push("Comida", " Agua");
        alert("Riesgo de saqueador, has perdido una vida...");
        vida--;
        break;
    } else if (decision === "b") {
        alert("¡Han conseguido una linterna!");
        mochila.push("Linterna");
        alert("Por la represalia, han perdido un miembro del equipo...");
        miembros--;
        break;
    // En dado caso de que no escoja una opción válida, también se le dará un aviso.
    } else {
        alert("¡Tienes que escoger una decisión válida!");
        continue;
    }
}

// Al final de la interacción, se le mostrará sus estadistícas y continuará a la siguiente fase.
alert(`Estas son tus estadísticas: \n\n Vidas: ${vida} \n\n  Miembros: ${miembros} \n\n  Mochila: ${mochila}`);

alert("Lugar de refugio...")
alert("Con algo de alimento en la mochila, el grupo necesita un lugar seguro donde recuperarse y planear el siguiente movimiento.")
alert("La ciudad no perdona a quienes se quedan mucho tiempo al descubierto.")

let decisiontwo;

while (true) {

    decisiontwo = prompt("¿Qué quieres hacer, sobreviviente?\n \nOpción A: Esconderse en una farmacia.\n \nOpción B:  Ir a una estación de buses. \n \nOpción C: Refugiarse en una tienda de campaña abandonada.");

    if (decisiontwo === null) {
        alert("¡No puedes quedarte sin decidir! La inacción es peligrosa...");
        continue;
    }

    decisiontwo = decisiontwo.toLowerCase();

    if (decisiontwo === "a"){
        alert("¡Han encontrado un botiquín!");
        alert("Es hora de descansar...");
        mochila.push("Botiquín");
        vida++;
        break;
    }

    else if (decisiontwo === "b"){
        alert("Habían escombros, uno se lastima.");
        alert("Has perdido una vida...");
        vida--;
        break;
    }

    else if (decisiontwo === "c"){
        alert("¡Han encontrado una batería portatil!");
        alert("Hay signos de radioactividad, pierdes una vida...");
        mochila.push("Batería");
        vida--;
        break;
    }

    else {
        alert("¡Tienes que escoger una decisión válida!");
        continue;
    }
}


alert(`Estas son tus estadísticas: \n\n Vidas: ${vida} \n\n  Miembros: ${miembros} \n\n  Mochila: ${mochila}`);

alert("Ayudar o ignorar...");
alert("Mientras avanzan, escuchan gritos de auxilio desde un callejón. Ayudar podría ser un acto heroico... o un riesgo innecesario.");

let decisionthree;

while (true) {
    decisionthree = prompt("¿Qué quieres hacer, sobreviviente?\n \nOpción A: Ayudar a una familia atrapada.\n \nOpción B: Ignorar y seguir avanzando. \n \nOpción C: Distraer a los enemigos y liberar a la familia. \n \n Opción D: Robar los recursos de la familia sin ser vistos.");

    if (decisionthree === null) {
        alert("¡No puedes quedarte sin decidir! La inacción es peligrosa...");
        continue;
    }

    decisionthree = decisionthree.toLowerCase();

    if (decisionthree === "a"){
        alert("¡Han ayudado a la familia!");
        alert("Has ganado un miembro para tu equipo, te regala un mapa.");
        mochila.push("Mapa");
        miembros++;
        break;
    }

    else if (decisionthree === "b"){
        alert("Nada sucede.");
        alert("Has perdido un miembro...");
        miembros--;
        break;
    }

    else if (decisionthree === "c"){
        alert("¡Logras salvar a la familia a distancia!");
        alert("¡Han conseguido una linterna!");
        alert("Pierdes una vida...");
        mochila.push("Linterna");
        vida--;
        break;
    }

    else if (decisionthree === "d"){
        alert("Atacan a la familia.");
        alert("¡Han conseguido comida!");
        alert("Pierdes dos miembros por la represalia...");
        mochila.push("Comida");
        miembros-=2;
        break;
    }

    else {
        alert("¡Tienes que escoger una decisión válida!");
        continue;
    }
}

alert(`Estas son tus estadísticas: \n\n Vidas: ${vida} \n\n  Miembros: ${miembros} \n\n  Mochila: ${mochila}`);

alert("Señal de humo...");
alert("Desde lo alto de un edificio, una columna de humo se eleva a lo lejos.");
alert("¿Es una señal de auxilio o una trampa mortal? La decisión podría marcar la diferencia.");

let decisionfour;

while (true) {
    decisionfour = prompt("¿Qué quieres hacer, sobreviviente?\n \nOpción A: Investigar la señal.\n \nOpción B: Evitar la zona.");

    if (decisionfour === null) {
        alert("¡No puedes quedarte sin decidir! La inacción es peligrosa...");
        continue;
    }

    decisionfour = decisionfour.toLowerCase();

    if (decisionfour === "a"){
        alert("Investigan la señal...")
        alert("¡Han encontrado gasolina y una llave!");
        mochila.push("Gasolina", " Llave");
        break;
    }

    else if (decisionfour === "b"){
        alert("Nada sucede.");
        alert("Quizás era una oportunidad para obtener objetos.");
        break;
    }

    else {
        alert("¡Tienes que escoger una decisión válida!");
        continue;
    }

}

alert(`Estas son tus estadísticas: \n\n Vidas: ${vida} \n\n Miembros: ${miembros} \n\n Mochila: ${mochila}`);

alert("Exploración alta o baja...");
alert("El grupo necesita información. Las rutas están colapsadas, y moverse sin saber puede ser letal. ¿Mejor buscar una vista panorámica o seguir entre las sombras?");

let decisionfive;

while (true) {
    decisionfive = prompt("¿Qué quieres hacer, sobreviviente?\n \nOpción A: Subir a un edificio a observar.\n \nOpción B: Moverse por callejones \n \nOpción C: Usar una alcantarilla conectada al metro.");

    if (decisionfive === null) {
        alert("¡No puedes quedarte sin decidir! La inacción es peligrosa...");
        continue;
    }

    decisionfive = decisionfive.toLowerCase();

    if (decisionfive === "a"){
        alert("Suben al edificio para observar...")
        alert("¡Han encontrado un dron con información!");
        mochila.push("Intel");
        break;
    }

    else if (decisionfive === "b"){
        alert("Se mueven por los callejones...");
        alert("¡Cuidado, animales salvajes!.");
        alert("Han perdido una vida...");
        vida--;
        break;
    }

    else if (decisionfive === "c"){
        alert("Entran a la alcantarilla...");
        alert("¡Encuentran una tarjeta de acceso!.");
        mochila.push("Tarjeta");
        break;
    }

    else {
        alert("¡Tienes que escoger una decisión válida!");
        continue;
    }

}

alert(`Estas son tus estadísticas: \n\n Vidas: ${vida} \n\n Miembros: ${miembros} \n\n Mochila: ${mochila}`);

alert("Medio de transporte...");
alert("La noche se acerca...");
alert("Para avanzar rápido deben decidir: improvisar un medio de transporte o confiar en sus propias fuerzas. El tiempo es limitado.");

let decisionsix;

while (true) {
    decisionsix = prompt("¿Qué quieres hacer, sobreviviente?\n \nOpción A: Reparar una bicleta.\n \nOpción B: Ir a pie.");

    
    if (decisionsix === null) {
        alert("¡No puedes quedarte sin decidir! La inacción es peligrosa...");
        continue;
    }

    decisionsix = decisionsix.toLowerCase();

    if (decisionsix === "a"){
        alert("Reparan la bicileta...")
        alert("¡Avanzan rápido!");
        alert("¡Encuentran una mochila con recursos, medicinas y baterias!");
        mochila.push("Medicina", " Batería");
        break;
    }

    else if (decisionsix === "b"){
        alert("Caminan...");
        alert("Caminan demasiado... Están cansados...");
        alert("Han perdido una vida...");
        vida--;
        break;
    }

    else {
        alert("¡Tienes que escoger una decisión válida!");
        continue;
    }
}

alert(`Estas son tus estadísticas: \n\n Vidas: ${vida} \n\n Miembros: ${miembros} \n\n Mochila: ${mochila}`);

alert("A pesar de los riesgos, tu grupo ha logrado reunir recursos vitales.")
alert("En medio del silencio de la ciudad, encuentran una compuerta metálica marcada con un símbolo de evacuación.")
alert("El mapa encontrado coincide con un acceso a los túneles del metro.")
alert("La verdadera prueba está por comenzar bajo tierra, donde la oscuridad y los restos del colapso pondrán a prueba su determinación.")

// Una vez terminada la situación, si el jugador cumple con todas las condiciones, podrá desbloquear el final bueno o el final malo.
if (vida >= 3 && mochila.length >= 2 && mochila.includes("Mapa")) {
    alert("Lograron escapar de la ciudad, son unos verdaderos sobrevivientes!");
} else {
    alert("No han logrado reunir los recursos suficientes, quedaron atrapados...");
}
