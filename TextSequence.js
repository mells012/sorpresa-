var TextSequence = {
    lines: [],
    currentIndex: 0,
    interval: 2000, // Tiempo entre cada línea en milisegundos
    init: function(lines) {
        this.lines = lines;
        this.currentIndex = 0;

        // Crear contenedor para las líneas
        const container = document.createElement('div');
        container.classList.add('text-sequence');
        document.body.appendChild(container);

        this.showNextLine();
    },
    showNextLine: function() {
        // Verificar si hay más líneas por mostrar
        if (this.currentIndex < this.lines.length) {
            const container = document.querySelector('.text-sequence');
            
            // Crear una nueva línea de texto
            const line = document.createElement('div');
            line.classList.add('text-line');
            line.textContent = this.lines[this.currentIndex];
            container.appendChild(line);

            // Mostrar la línea suavemente
            setTimeout(() => {
                line.style.display = 'block';
                line.style.opacity = 0;
                line.style.transition = 'opacity 1s';
                line.style.opacity = 1;
            }, 100);

            // Configurar el siguiente texto a aparecer
            this.currentIndex++;
            setTimeout(() => this.showNextLine(), this.interval);
        }
    }
};

// Si está en modo depuración, inicializa la secuencia de texto
if (Config.debug) {
    window.onload = function() {
        TextSequence.init([
            "Línea 1 de texto",
            "Línea 2 de texto",
            "Línea 3 de texto",
            "Línea 4 de texto"
        ]);
    };
}
