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
    const fechaInput = document.getElementById('anioNacimiento').value;

    if (!fechaInput) {
        mostrarResultado("Por favor ingresa tu fecha de nacimiento.");
        return;
    }

    const anio = new Date(fechaInput).getFullYear();

      // Easter egg para años absurdamente antiguos
    if (anio === 1431) {
        const mensaje = `😲 ¿Naciste en el año ${anio}? ¡Alucar! ¿Eres tu? 🧛‍♂️`;
        mostrarResultado(mensaje);
        document.body.style.backgroundColor = "#8B0000";

        // Después de 2 segundos, limpiar mensaje y restaurar fondo
        setTimeout(() => {
            document.getElementById('resultado').innerHTML = "";
            document.body.style.backgroundColor = "";
        }, 2000);

        return;
    }


    const hoy = new Date();
    const edad = hoy.getFullYear() - anio;

    mostrarResultado(`Tu edad es: ${edad} años`);
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
    // Limpiar valores de inputs
    document.querySelectorAll('input').forEach(input => input.value = '');

    // Ocultar todos los formularios
    document.querySelectorAll('.formulario').forEach(f => f.style.display = 'none');

    // Limpiar contenedores y resultados
    document.getElementById('comprasContainer').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('reiniciar').style.display = 'none';

    // Reiniciar el menú a la opción por defecto (vacía o "selecciona una opción")
    document.getElementById('menu').value = "";
}
