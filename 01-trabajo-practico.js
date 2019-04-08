// Ro, te deje a lo largo del codigo algunas observaciones a tu TP. 
// Son detalles, como mejorar los nombres de algunas variables o eliminar los comentarios, 
//     que te serviran al momento de hacer un challenge para alguna empresa. 
// En general tu codigo esta muy bien, y se nota el esfuerzo y la comprension de los conceptos. 
// Felicitaciones!


//Objetos originales
console.log('OBJETOS ORIGINALES');

var local = {
    vendedoras: ['Ada', 'Grace', 'Hedy', 'Sheryl'],

    ventas: [
        { fecha: new Date(2019, 1, 4), nombreVendedora: 'Grace', componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] },
        { fecha: new Date(2019, 0, 1), nombreVendedora: 'Ada', componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] },
        { fecha: new Date(2019, 0, 2), nombreVendedora: 'Grace', componentes: ['Monitor ASC 543', 'Motherboard MZI'] },
        { fecha: new Date(2019, 0, 10), nombreVendedora: 'Ada', componentes: ['Monitor ASC 543', 'Motherboard ASUS 1200'] },
        { fecha: new Date(2019, 0, 12), nombreVendedora: 'Grace', componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1200'] }
    ],

    precios: [
        { componente: 'Monitor GPRS 3000', precio: 200 },
        { componente: 'Motherboard ASUS 1500', precio: 120 },
        { componente: 'Monitor ASC 543', precio: 250 },
        { componente: 'Motherboard ASUS 1200', precio: 100 },
        { componente: 'Motherboard MZI', precio: 30 },
        { componente: 'HDD Toyiva', precio: 90 },
        { componente: 'HDD Wezter Dishital', precio: 75 },
        { componente: 'RAM Quinston', precio: 110 },
        { componente: 'RAM Quinston Fury', precio: 230 }
    ]
};

//Consigna 1:
console.log('CONSIGNA 1');
//precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.
console.log('1.A: Precio de una máquina completa.');

function precioMaquina(componentes) {
    var suma = 0;
    for (var i = 0; i < componentes.length; i++) {
        for (j = 0; j < local.precios.length; j++) {
            if (componentes[i] === local.precios[j].componente) {
                suma += local.precios[j].precio;
            }

        }
    }
    return suma;
}
console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])); // 320 ($200 del monitor + $120 del motherboard)

//Consigna 1.B: cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.
console.log('1.B: Cuántas veces se vendió un componente *que yo defina*.');

function cantidadVentasComponente(componente) {
    var ventasPorComponente = 0;
    for (i = 0; i < local.ventas.length; i++) {
        for (j = 0; j < local.ventas[i].componentes.length; j++) {
            if (componente === local.ventas[i].componentes[j]) {
                ventasPorComponente += 1;
            }
        }
    }
    return ventasPorComponente;
}
console.log(cantidadVentasComponente('Monitor ASC 543')); // 2

//Consigna 1.C: vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.
console.log('1.C: El importe total de la vendedora que más vendió.')

function vendedoraDelMes(mes, anio) {
    var arrayVendedoras = [];
    for (let i = 0; i < local.vendedoras.length; i++) {
        var ventasVendedoraDelMes = {
            nombre: local.vendedoras[i],
            ventas: 0,
        }
        for (let j = 0; j < local.ventas.length; j++) {
            if (local.ventas[j].fecha.getMonth() + 1 == mes && local.ventas[j].fecha.getFullYear() == anio) {
                if (local.vendedoras[i] === local.ventas[j].nombreVendedora) {
                    if (ventasVendedoraDelMes.nombre === local.ventas[j].nombreVendedora) {
                        ventasVendedoraDelMes.ventas = ventasVendedoraDelMes.ventas + precioMaquina(local.ventas[j].componentes)
                    }
                }
            }
        }
        arrayVendedoras.push(ventasVendedoraDelMes);
    }
    var valorMaximo = 0;
    var posicion = 0;
    for (let k = 0; k < arrayVendedoras.length; k++) {
        if (valorMaximo < arrayVendedoras[k].ventas) {
            valorMaximo = arrayVendedoras[k].ventas
            posicion = k
        }

    }
    return arrayVendedoras[posicion].nombre
}

// Una manera aun mas breve (y mas abstracta) es esta:
// function vendedoraDelMes(mes, anio) {
//   var ventasVendedoras = {};

//   for (var i = 0; i < local.ventas.length; i++) {
//     if (local.ventas[i].fecha.getMonth() + 1 === mes && local.ventas[i].fecha.getFullYear() === anio) {
//       var vendedora = ventas[i].nombreVendedora;
//       if (!ventasVendedoras[vendedora]) {
//         ventasVendedoras[vendedora] = 0;
//       }

//       ventasVendedoras[vendedora] += precioMaquina( local.ventas[i].componentes );
//     }
//   }

//   var max = vendedoras[0];

//   for (var i = 0; i < vendedoras.length; i++) {
//     if (max && ventasVendedoras[vendedoras[i]] > ventasVendedoras[max]) {
//       max = vendedoras[i];
//     }
//   }

//   return max;
// }
console.log(vendedoraDelMes(1, 2019));
// 'Ada' (vendio por $670, una máquina de $320 y otra de $350)

//Consigna 1.D: ventasMes(mes, anio): Obtener las ventas de un mes.
console.log('1.D: Obtener las ventas de un mes');

function ventasMes(mes, anio) {
    //!!! Necesito recorreer el array ventas
    //Necesito que filtre por mes y año
    //DEntro del array ventas, necesito que me haga el total de $ de componente por venta
    var ventasMes = 0;
    for (let i = 0; i < local.ventas.length; i++) {
        //Necesitas que una variable con I cambie, por eso dentro del for
        
        // esto es un detalle, pero si fuera por ej un challenge para una empresa
        // seria importante borrar todos los comentarios y console.log
        
        var mesVenta = local.ventas[i].fecha.getMonth() + 1;
        var anioVentas = local.ventas[i].fecha.getFullYear();
        if (mes == mesVenta && anio == anioVentas) {
            // a menos que queramos comparar strings con numeros, 
            // es buena practica acostumbrarse a usar el triple signo ===
            // nos da mayor control sobre los datos
            ventasMes = ventasMes + precioMaquina(local.ventas[i].componentes)
            // o mas brevemente, podriamos decir:
//             ventasMes+= precioMaquina(local.ventas[i].componentes)
        }
    }
    return ventasMes
}
console.log(ventasMes(1, 2019));

//Consigna 1.E: ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
console.log('1.E: Obtener las ventas totales de una vendedora')
//Un for each recorre a cada vendedora
//Un for recorre a ventas
//un precioMaquina define el precio
//Se suma a un objeto con el total ventas

function ventasVendedora(vendedoraIngresada) {
    var ventasTotalesVendedoras = [];
    local.vendedoras.forEach(function (vendedora) { // buen uso de forEach!
        var ventasTotales = {
            nombre: '',
            ventas: 0,
        }
        for (let i = 0; i < local.ventas.length; i++) {
            if (vendedora === local.ventas[i].nombreVendedora) {
                ventasTotales.nombre = vendedora;
                ventasTotales.ventas += precioMaquina(local.ventas[i].componentes)
            }
        } ventasTotalesVendedoras.push(ventasTotales)
    })
    for (let j = 0; j < ventasTotalesVendedoras.length; j++) {
        if (vendedoraIngresada = ventasTotalesVendedoras[j].nombre) {
            var totalVentasPorVendedora = ventasTotalesVendedoras[j].ventas
        }
    }
    return totalVentasPorVendedora
}
console.log(ventasVendedora('Grace'));

//Consigna 1.F: componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
console.log('1.F: Componente con más ventas históricamente');

function componenteMasVendido(componente) {
    var arrayComponente = [];
    for (let i = 0; i < local.ventas[i].componentes.length; i++) {
        var componenteVendido = {
            nombre: local.ventas[i].componentes[i],
            cantidadDeVentas: 0,
        }
        if (local.ventas[i].componentes[i] === componenteVendido.nombre) {
            componenteVendido.nombre = local.ventas[i].componentes[i];
            componenteVendido.cantidadDeVentas = cantidadVentasComponente(componente)
        };
        arrayComponente.push(componenteVendido)
    }
    var componenteConMasVentas = 0;
    var letraFinal = 0;
    // en general vamos a preferir nombres de variables descriptivos
    // para que quien lea nuestro codigo sepa a que nos referimos
    // es un detalle, pero suma mucha legibilidad a tu codigo

    for (let j = 0; j < arrayComponente.length; j++) {
        if (componenteConMasVentas < arrayComponente[j].cantidadDeVentas) {
            componenteConMasVentas = arrayComponente[j].cantidadVentas
            letraFinal = j
        }
    }
    return arrayComponente[letraFinal].nombre
}
console.log(componenteMasVendido()); // Monitor GPRS 3000

//Consigna 1.G: huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.
console.log('1.G: Determinar si hubo mentas en un mes')

function huboVentas(mes, anio) {
    var ventasSi = true;
    var mes;
    var anio;
    for (let i = 0; i < local.ventas.length; i++) {
        if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
            ventasSi = true;
            break
        } else {
            ventasSi = false;
        }
    }
    return ventasSi
}

// si inicializamos "ventasSi" en false, nos ahorramos el codigo del "Else". 


console.log(huboVentas(3, 2019)); // false

//CONSIGNA 2
console.log('CONSIGNA 2');
//Consigna 2.A: En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original).
console.log('2.A: Agregar la propiedad "Sucursal" con valor "Centro"');

local.ventas.forEach(venta => {
    venta.sucursal = 'Centro';
});
console.log(local.ventas);

//Consigna 2.B: Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']
console.log('2.B: Agregar la propiedad Sucursales con valores Centro y Caballito');

local.sucursales = ['Centro', 'Caballito'];
console.log(local.sucursales);

//Consigna 2.C: Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón: fecha, nombreVendedora, componentes, sucursal
console.log('2.C: Cargar info en array ventas');

function nuevasVentas(fecha, nombreVendedora, componentes, sucursal) {
    local.ventas.push({ fecha, nombreVendedora, componentes, sucursal })
    return local.ventas
}

nuevasVentas(new Date(2019, 1, 12), 'Hedy', ['Monitor GPRS 3000', 'HDD Toyiva'], 'Centro');
nuevasVentas(new Date(2019, 1, 24), 'Sheryl', ['Motherboard ASUS 1500', 'HDD Wezter Dishital'], 'Caballito');
nuevasVentas(new Date(2019, 1, 01), 'Ada', ['Motherboard MZI', 'RAM Quinston Fury'], 'Centro');
nuevasVentas(new Date(2019, 1, 11), 'Grace', ['Monitor ASC 543', 'RAM Quinston'], 'Caballito');
nuevasVentas(new Date(2019, 1, 15), 'Ada', ['Motherboard ASUS 1200', 'RAM Quinston Fury'], 'Centro');
nuevasVentas(new Date(2019, 1, 12), 'Hedy', ['Motherboard ASUS 1500', 'HDD Toyiva'], 'Caballito');
nuevasVentas(new Date(2019, 1, 21), 'Grace', ['Motherboard MZI', 'RAM Quinston'], 'Centro');
nuevasVentas(new Date(2019, 1, 08), 'Sheryl', ['Monitor ASC 543', 'HDD Wezter Dishital'], 'Centro');
nuevasVentas(new Date(2019, 1, 16), 'Sheryl', ['Monitor GPRS 3000', 'RAM Quinston Fury'], 'Centro');
nuevasVentas(new Date(2019, 1, 27), 'Hedy', ['Motherboard ASUS 1200', 'HDD Toyiva'], 'Caballito');
nuevasVentas(new Date(2019, 1, 22), 'Grace', ['Monitor ASC 543', 'HDD Wezter Dishital'], 'Centro');
nuevasVentas(new Date(2019, 1, 05), 'Ada', ['Motherboard ASUS 1500', 'RAM Quinston'], 'Centro');
nuevasVentas(new Date(2019, 1, 01), 'Grace', ['Motherboard MZI', 'HDD Wezter Dishital'], 'Centro');
nuevasVentas(new Date(2019, 02, 07), 'Sheryl', ['Monitor GPRS 3000', 'RAM Quinston'], 'Caballito');
nuevasVentas(new Date(2019, 02, 14), 'Ada', ['Motherboard ASUS 1200', 'HDD Toyiva'], 'Centro');
console.log(local.ventas);

//Consigna 2.D: Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
console.log('2.D: todas las ventas por sucursal')

function ventasSucursal(sucursal) {
    var ventasPorSucursal = 0;
    for (let i = 0; i < local.ventas.length; i++) {
        if (local.ventas[i].sucursal === sucursal) {
            ventasPorSucursal += precioMaquina(local.ventas[i].componentes);
        }
    }
    return 'La sucursal ' + sucursal + ' vendió ' + ventasPorSucursal
}
console.log(ventasSucursal('Centro')); // 4195

//Consigna 2.E: Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?
console.log('2.E: ¿cómo podemos reutilizar código y podamos repetir?')
console.log('//IDK :/ No comparten tanto en común, pero imagino que habrá una forma de usar placeholders (?)')

// // Podemos hacer una funcion que trabaje indistintamente con el nombre de la vendedora o de la sucursal, asi:
// function ventas(nombre) {
//     var total = 0;
//     for (var i = 0; i < local.ventas.length; i++) {
//         if (local.ventas[i].sucursal === nombre || local.ventas[i].nombreVendedora === nombre) {
//             total += precioMaquina(local.ventas[i].componentes);
//         }
//     }
//     return total;
// }


//Consigna 2.F: Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
console.log('2.F: Qué sucursal vendió más en plata en determinado mes')

function sucursalDelMes(mes, anio) {
    var arrayVentasMes = [];
    for (let i = 0; i < local.sucursales.length; i++) {
        var ventasCadaSucursal = {
            sucursal: local.sucursales[i],
            ventas: 0,
        };
        for (let j = 0; j < local.ventas.length; j++) {
            if (local.ventas[j].fecha.getMonth() + 1 == mes && local.ventas[j].fecha.getFullYear() == anio) {
                if (local.sucursales[i] === local.ventas[j].sucursal) {
                    ventasCadaSucursal.ventas += precioMaquina(local.ventas[j].componentes);
                }
            }
        } arrayVentasMes.push(ventasCadaSucursal);
    }
    var valorMaximo = 0;
    var ubicacion = 0;
    for (let k = 0; k < arrayVentasMes.length; k++) {
        if (valorMaximo < arrayVentasMes[k].ventas) {
            valorMaximo = arrayVentasMes[k].ventas;
            ubicacion = k
        }
    }
    return 'La sucursal ' + arrayVentasMes[ubicacion].sucursal + ' es la que más vendió: ' + arrayVentasMes[ubicacion].ventas
}

// Bien. Se puede modificar, para abreviarla, de la misma manera que vendedoraDelMes

console.log(sucursalDelMes(1, 2019)); // 'Centro'

//CONSIGNA 3
console.log('Consigna 3')

//Consigna 3.A: renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año
console.log('3.A: Lista ordenada del importe total por mes y año')

//necesito una función que imprima el resultado de todos los meses y años
//después los ordene

var monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

function renderPorMes() {
    arrayMeses = []
    for (let i = 0; i < monthNames.length; i++) {
        var mesYAnio = {
            mes: '',
            anio: 0,
            venta: 0,
        }
        for (let j = 0; j < local.ventas.length; j++) {
            var mesVariable = 0;
            if (local.ventas[j].fecha.getMonth() == mesVariable) {
                mesYAnio.mes = monthNames[i];
                mesYAnio.anio = local.ventas[i].fecha.getFullYear();
                mesYAnio.venta = ventasMes((mesVariable +1), 2019);
                
            } mesVariable++
        }
        arrayMeses.push(mesYAnio);
        var informeFinal = console.log('Total de', mesYAnio.mes, mesYAnio.anio + ':',mesYAnio.venta)
    }
    return informeFinal
}


console.log(renderPorMes());

// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210


