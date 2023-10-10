const preguntasPowerRangers = [
    {
      pregunta: "¿Cuál es el nombre del villano principal en la primera temporada de los Power Rangers?",
      opciones: ["Lord Voldemort", "Rita Repulsa", "Megatron", "Thanos"],
      respuesta: "Rita Repulsa"
    },
    {
      pregunta: "¿Cuál es el nombre del mentor de los Power Rangers en la primera temporada?",
      opciones: ["Maestro Splinter", "Zordon", "Obi-Wan Kenobi", "Dumbledore"],
      respuesta: "Zordon"
    },
    {
      pregunta: "¿Qué colores representan a los Power Rangers en la primera temporada?",
      opciones: ["Rojo, verde, azul, amarillo, rosa", "Negro, blanco, plateado, dorado, naranja", "Rojo, verde, azul, negro, rosa", "Amarillo, blanco, morado, verde, rojo"],
      respuesta: "Rojo, verde, azul, amarillo, rosa"
    },
    {
      pregunta: "¿Cuál es el nombre del robot gigante que los Power Rangers controlan?",
      opciones: ["Iron Man", "Megazord", "Voltron", "Optimus Prime"],
      respuesta: "Megazord"
    },
    {
      pregunta: "¿Dónde se encuentra la base de operaciones de los Power Rangers?",
      opciones: ["En un castillo en las montañas", "En una cueva secreta bajo la ciudad", "En una estación espacial", "En el fondo del océano"],
      respuesta: "En una cueva secreta bajo la ciudad"
    },
    {
      pregunta: "¿Quién es el Ranger verde en la primera temporada?",
      opciones: ["Jason", "Billy", "Tommy", "Kimberly"],
      respuesta: "Tommy"
    },
    {
      pregunta: "¿Cuál es el nombre del enemigo principal que los Power Rangers enfrentan en la primera temporada?",
      opciones: ["Lord Zedd", "Goldar", "Scorpina", "Finster"],
      respuesta: "Lord Zedd"
    },
    {
      pregunta: "¿Qué objeto mágico les da poderes a los Power Rangers?",
      opciones: ["La Espada del Destino", "El Anillo del Poder", "El Morpher", "La Varita Mágica"],
      respuesta: "El Morpher"
    },
    {
      pregunta: "¿Cómo se llama el robot gigante que forma parte de los Zords?",
      opciones: ["Todas correctas", "Triceratops", "Sabertooth Tiger", "Pterodáctilo"],
      respuesta: "Todas correctas"
    },
    {
      pregunta: "¿Cuál es el grito de batalla que los Power Rangers utilizan para convocar a los Zords?",
      opciones: ["¡Hasta la vista, baby!", "¡Por el poder del cosmos!", "¡Forma de Megazord!", "¡A metamorfosearse!"],
      respuesta: "¡A metamorfosearse!"
    }
   
  ];
let currentQuestion = 0;
        let score = 0;

        const questionText = document.getElementById("question-text");
        const optionsContainer = document.getElementById("options-container");
        const resultText = document.getElementById("result");

        function showQuestion() {
            const pregunta = preguntasPowerRangers[currentQuestion];
            questionText.textContent = pregunta.pregunta;

            optionsContainer.innerHTML = "";

            pregunta.opciones.forEach((opcion, index) => {
                const button = document.createElement("button");
                button.textContent = opcion;
                button.addEventListener("click", () => checkAnswer(opcion, index));
                optionsContainer.appendChild(button);
            });
        }

        function checkAnswer(userAnswer, selectedIndex) {
            const pregunta = preguntasPowerRangers[currentQuestion];
            if (userAnswer === pregunta.respuesta) {
                score++;
                resultText.textContent = "¡Respuesta correcta!";
            } else {
                resultText.textContent = `Respuesta incorrecta. La respuesta correcta es: ${pregunta.respuesta}`;
            }

            currentQuestion++;

            if (currentQuestion < preguntasPowerRangers.length) {
                setTimeout(() => {
                    showQuestion();
                    resultText.textContent = "";
                }, 1000); // Mostrar la próxima pregunta después de 1 segundo
            } else {
                endGame();
            }
        }

        function endGame() {
            resultText.textContent = `Juego terminado. Puntuación final: ${score}/${preguntasPowerRangers.length}`;
            optionsContainer.innerHTML = ""; // Limpiar las opciones
        }

        showQuestion();