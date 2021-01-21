import React from 'react';

export default class primercomponente extends React.Component 
/*
En los componentes que heredan de React.Component, el constructor recibe como          
parámetro las propiedades que le envía el componente padre. Es por ello, que la primer              
sentencia que debemos ejecutar es super(props), lo que ejecutará el constructor del           
padre. 
La línea siguiente, estamos enlazando el método con la instancia del objeto. Con esta             
simple línea, ya podemos utilizar this.setState en el método agregar (o cualquier           
referencia a la instancia dentro del método). 
Cada método que deba hacer uso de la instancia (this) debe enlazarse en el constructor              
por medio de la sintaxis 
this.<nombre del método> = this.<nombre del método>.bind(this);
*/




{    
    render()
     {
        const nombre = "Kat";
        const apellido = "Fraga";
        const element = <h2> hola {nombre} {apellido} </h2>
        return element;
    }
}


export default class primercomponente extends React.Component 
{

    render()
     {

        const element = <h2> hola {this.props,name} </h2>
        return element;
    }

}
<div className="app3"> 
<primercomponente name= "juan" />
<primercomponente name= "mari" />
<primercomponente name= "gerar" />
    </div>

    
//oTra forma


let nombres = [
    "Juanca",
    "María",
    "Gerardo",
]
const respuesta =  nombres.map(unItemCualquiera => {
        return <primercomponente name = {unItemCualquiera} />
})
    return ( 
        <div className="app4">
            {respuesta}
        </div>
    );
//


buttonEfecto (){
console.log ("enviado");
    }

    {
    render () {
        return
        <div className="lala">
            {this.props.name}
            <button onClick={this.buttonEfecto}> enviar </button>

        </div>
    }


  //O MEJOR DE ESTA MANERA. 

  constructor(props) {
    super(props);
    this.agregar = this.agregar.bind(this);
} /*
       
no se ejecuta en el mismo contexto que el objeto. 
Para poder acceder a la propiedad this                
dentro del método agregar, debemos previamente “enlazarlo” con la instancia.
*/

agregar() {
    this.setState({name: ''})
}

render() {
    return (
        <div>
           <button onClick={this.agregar}>Agregar</button>
        </div>
    )
}