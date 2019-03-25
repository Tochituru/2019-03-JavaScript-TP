//separo los elementos para que sean elementos en un array:

var agregarArray = [
    '12/02/2019; Hedy; [Monitor GPRS 3000, HDD Toyiva]; Centro',
    '24/02/2019; Sheryl; [Motherboard ASUS 1500, HDD Wezter Dishital]; Caballito',
    '01/02/2019; Ada; [Motherboard MZI, RAM Quinston Fury]; Centro',
    '11/02/2019; Grace; [Monitor ASC 543, RAM Quinston]; Caballito',
    '15/02/2019; Ada; [Motherboard ASUS 1200, RAM Quinston Fury]; Centro',
    '12/02/2019; Hedy; [Motherboard ASUS 1500, HDD Toyiva]; Caballito',
    '21/02/2019; Grace; [Motherboard MZI, RAM Quinston]; Centro',
    '08/02/2019; Sheryl; [Monitor ASC 543, HDD Wezter Dishital]; Centro',
    '16/02/2019; Sheryl; [Monitor GPRS 3000, RAM Quinston Fury]; Centro',
    '27/02/2019; Hedy; [Motherboard ASUS 1200, HDD Toyiva]; Caballito',
    '22/02/2019; Grace; [Monitor ASC 543, HDD Wezter Dishital]; Centro',
    '05/02/2019; Ada; [Motherboard ASUS 1500, RAM Quinston]; Centro',
    '01/02/2019; Grace; [Motherboard MZI, HDD Wezter Dishital]; Centro',
    '07/02/2019; Sheryl; [Monitor GPRS 3000, RAM Quinston]; Caballito',
    '14/02/2019; Ada; [Motherboard ASUS 1200, HDD Toyiva]; Centro',
];


var separador = ';';
var cadenaArray = [];
function separarElementos(cadena, separador) {
    cadenaArray = cadena.split(separador);
    return cadenaArray;
};

//los pusheo en un array nuevo;

arrayenArray = [];

for (let i = 0; i < agregarArray.length; i++) {
    separarElementos(agregarArray[i], separador);
    arrayenArray.push(cadenaArray);
}

console.log(arrayenArray);

//ahora quiero que cada elemento del array [i][0-3] se agregue a un objeto


function Venta(fecha, nombreVendedora, componentes, sucursal) {
    this.fecha = fecha;
    this.nombreVendedora = nombreVendedora;
    this.componentes = componentes;
    this.sucursal = sucursal;
}

for (let i = 0; i < arrayenArray.length; i++) {
    var objeto = new Venta(arrayenArray[i][0], arrayenArray[i][1], arrayenArray[i][2], arrayenArray[i][3]);
    local.ventas.push(objeto)
}

console.log("local.ventas", local.ventas)

//cambiar string fecha a fecha: new Date;
console.log(local.ventas[5].fecha)
//0123456789
//14/02/2019
//local.ventas[5].fecha = new Date(local.ventas[5].fecha[], month, day)



//cambiar componente a un array


//arrayenArray[0][1]

