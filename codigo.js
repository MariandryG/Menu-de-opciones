const formularios = document.getElementById('contenedor')
function mostrarFormulario() {
    //Ocultar formularios
    document.querySelectorAll('.formulario').forEach(f => f.style.display = 'none');

    //Limpiar resultados anteriores
    document.getElementById('resultado').innerText = '';
    document.getElementById('reiniciar').style.display = 'none';

    //Mostrar formulario seleccionado
    const opcion = document.getElementById('menu').value;
    if (opcion) {
        document.getElementById('formulario' + opcion).style.display = 'block';
        }
    }


function resolverCuadratica(){
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const discriminante = b * b - 4 *a * c;

    let resultado = "";

    if (discriminante > 0) {
            let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
            let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

            // Ordenar las soluciones
            if (x1 > x2) [x1, x2] = [x2, x1];

            resultado = `Soluciones reales: x₁ = ${x1}, x₂ = ${x2}`;
        } else if (discriminante === 0) {
            const x = -b / (2 * a);
            resultado = `Una solución real: x = ${x}`;
        } else {
            resultado = "No tiene soluciones reales.";
        }

    mostrarResultado(resultado);
}



function calcularEdad() {
    const anio = parseInt(document.getElementById('anioNacimiento').value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - anio;
    mostrarResultado(`Tu edad es: ${edad} años`);
    }

    function pedirCompras() {
    const cantidad = parseInt(document.getElementById('cantidadCompras').value);
    const contenedor = document.getElementById('comprasContainer');
    contenedor.innerHTML = ''; // Limpiar compras previas

    for (let i = 0; i < cantidad; i++) {
        contenedor.innerHTML += `<input type="number" min="0" step="0.01" placeholder="Compra ${i + 1}" class="compra"><br>`;
    }

    contenedor.innerHTML += `<button onclick="calcularPromedio()">Calcular Promedio</button>`;
}

function calcularPromedio() {
    const compras = document.querySelectorAll('.compra');
    let suma = 0;
    let vacios = false;

    compras.forEach(c => {
        if (c.value === "") {
            vacios = true;
        } else {
            suma += parseFloat(c.value);
        }
    });

    if (vacios) {
        mostrarResultado("Por favor, completa todos los campos de compra.");
        return;
    }

    const promedio = suma / compras.length;
    mostrarResultado(`💰 Total de compras: $${suma.toFixed(2)}<br>📊 Promedio por compra: $${promedio.toFixed(2)}`);
}

function mostrarResultado(texto) {
    document.getElementById('resultado').innerHTML = texto;
    document.getElementById('reiniciar').style.display = 'inline-block';
}

function reiniciar() {
    document.getElementById('cantidadCompras').value = "";
    document.getElementById('comprasContainer').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('reiniciar').style.display = 'none';
}

