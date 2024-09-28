document.getElementById('form-inscripcion').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const equipo = document.getElementById('nombre-equipo').value;
    const jugador = document.getElementById('jugador-nombre').value;
    const grado = document.getElementById('grado').value;


    alert(`¡Jugador ${jugador} del equipo ${equipo} (Grado: ${grado}) inscrito con éxito!`);


    this.reset();
});


function cargarPosiciones() {
    const tablaPosiciones = document.getElementById('tabla-posiciones');

    const posiciones = [
        { equipo: 'Los Halcones', puntos: 12, partidos: 5, diferenciaGoles: 10 },
        { equipo: 'Los Tigres', puntos: 10, partidos: 5, diferenciaGoles: 8 },
        { equipo: 'Las Águilas', puntos: 9, partidos: 5, diferenciaGoles: 5 },
        { equipo: 'Los Leones', puntos: 7, partidos: 5, diferenciaGoles: 3 }
    ];

    let tablaHTML = `
        <table>
            <thead>
                <tr>
                    <th>Equipo</th>
                    <th>Puntos</th>
                    <th>Partidos Jugados</th>
                    <th>Diferencia de Goles</th>
                </tr>
            </thead>
            <tbody>
    `;

    posiciones.forEach(posicion => {
        tablaHTML += `
            <tr>
                <td>${posicion.equipo}</td>
                <td>${posicion.puntos}</td>
                <td>${posicion.partidos}</td>
                <td>${posicion.diferenciaGoles}</td>
            </tr>
        `;
    });

    tablaHTML += '</tbody></table>';
    tablaPosiciones.innerHTML = tablaHTML;
}

window.addEventListener('DOMContentLoaded', cargarPosiciones);

function cargarEstadisticas() {
    const estadisticasJugadores = document.getElementById('estadisticas-jugadores');

    const estadisticas = [
        { nombre: 'Juan Pérez', goles: 5, tarjetasAmarillas: 2, tarjetasRojas: 0 },
        { nombre: 'Carlos Díaz', goles: 3, tarjetasAmarillas: 1, tarjetasRojas: 0 },
        { nombre: 'Miguel López', goles: 7, tarjetasAmarillas: 0, tarjetasRojas: 1 }
    ];

    let estadisticasHTML = '<ul>';
s
    estadisticas.forEach(jugador => {
        estadisticasHTML += `
            <li>${jugador.nombre}: ${jugador.goles} goles, ${jugador.tarjetasAmarillas} TA, ${jugador.tarjetasRojas} TR</li>
        `;
    });

    estadisticasHTML += '</ul>';
    estadisticasJugadores.innerHTML = estadisticasHTML;
}

window.addEventListener('DOMContentLoaded', cargarEstadisticas);
