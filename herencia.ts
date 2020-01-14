class Empleado
{
    nombre : string
    edad : number
    calcularSueldo()
    {}
}

class Cocinero extends Empleado
{
    //sobreescritura: modificas un método del padre
    calcularSueldo()
    {
        return 2500
    }
}

class Mesero extends Empleado
{
    calcularSueldo()
    {
        return 1200
    }
}

class Llamador extends Empleado
{
    calcularSueldo()
    {
        return 1000
    }
}

//funciones

let imprimirSueldo = (empleado : Empleado) =>{
    console.log(`El sueldo es :${empleado.calcularSueldo()}`)
    //empleado puede comportarse de distintas maneras <-- polimorfismo, un mensaje puede ser enviado por distintos objetos

}


let mainHerencia = () => {
    let mozo = new Mesero()
    let cocinero = new Cocinero()
    let llamador = new Llamador()
    imprimirSueldo(mozo)
    //console.log(`El sueldo del mozo es :${mozo.calcularSueldo()}`)
    //console.log(`El sueldo del cocinera es :${cocinero.calcularSueldo()}`)
    //console.log(`El sueldo del llamador es :${llamador.calcularSueldo()}`)
}

mainHerencia()