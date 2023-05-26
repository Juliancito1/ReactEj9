function validarNombreMascota(mascota)
{
    const patron = /^[A-Z][a-zA-Z\s]{0,19}$/
    if(patron.test(mascota)){
        return true
    }
    return false;
}

function validarNombreDuenio(nombre)
{
    const patron = /^[A-Z][a-zA-Z\s]{0,19}$/
    if(patron.test(nombre))
    {
        return true
    }
    return false;
}

function validarFecha(fecha)
{   
    const patron = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    if(patron.test(fecha))
    {
        return true
    }
    return false;
}

function validarHora(hora)
{
    const patron = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if(patron.test(hora))
    {
        return true
    }
    return false;
}

function validarSintomas(sintomas)
{
    const patron = /^[A-Z][a-zA-Z\s;,.]{0,200}$/
    if(patron.test(sintomas)){
        return true
    }
    return false;
}

export function validaciones(mascota,nombre,fecha,hora,sintomas)
{
    let resumen = ''
    if(!validarNombreMascota(mascota)){
        resumen += 'Debe ingresar el nombre de la mascota con la primera letra mayúscula \n'
    }
    if(!validarNombreDuenio(nombre))
    {
        resumen +='Debe ingresar el nombre de la dueño con la primera letra mayúscula \n'
    }
    if(!validarFecha(fecha))
    {
        resumen += 'Debe ingresar la fecha en formato dia/mes/año separado por las barras laterales \n'
    }
    if(!validarHora(hora))
    {
        resumen += 'Debe ingresar la hora en formato hh:mm separado por dos puntos \n'
    }
    if(!validarSintomas(sintomas))
    {
        resumen += 'Al describir los sintomas debe ingresar la primera letra mayúscula'
    }
    if(resumen.length !== 0)
    {
        return resumen;
    }
    else{
        return "";
    }
}
