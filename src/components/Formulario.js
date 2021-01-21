import React, { Fragment, useState } from 'react';

//Profe, yo quiero hacer una página principal que en su menú o nav bar dirija a páginas internas, como el ejemplo del formulario de contacto del pdf … y definitivamente no me sale.  Cuando quiero in

const Formulario = () => {
   const [persona, setPersona] = useState({
        nombre: '',
        telefono: '',
        email: ''
    })

    const actualizarDatos = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setPersona({
            ...persona,
            [event.target.nombre] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + persona.nombre + ' ' + persona.email + persona.tel)
    }
     return (
    
        <Fragment>

                 <div className="container">
                 <h2>Contactate con Neptuno</h2>

                 <form className="form-horizontal">
 
                  

    <div className="form-group ">
                    <label className="control-label col-sm-8" htmlFor="name">Nombre y Apellido:</label>
        
                <div className="col-md-3">
                    
                    <input type="text" 
                        name="nombre"
                         className="form-control" 
                         id="nombre" 
                         placeholder="Nombre y Apellido"
                        onChange={actualizarDatos} 
                        autoFocus required />
                </div>
    </div>

    
    <div className="form-group">
            <div className="col-md-3">
                    <label className="control-label col-sm-8" htmlFor="email"  >Email:</label>
                            <input type="email"
                            name="email"
                            className="form-control"
                            id="email" 
                            placeholder="email@ej.com"
                            onChange={actualizarDatos} 
                            autoFocus required/>
                        </div>
    </div>


    <div className="form-group">
            <div className="col-md-3">
                <label htmlFor="tel">Tu Teléfono:</label>

                            <input type="tel"
                            name="telefono" 
                            className="form-control"  
                            id="telefono"  
                            placeholder="343-400000"
                            onChange={actualizarDatos} 
                            autoFocus required />
            
    </div>
    </div>

    <div className="form-group">
            <div className="col-md-4">

                    <label htmlFor="textarea">   Dejá tu mensaje:</label>
                        
                    <textarea className="form-control"
                     id="textarea"rows="3"></textarea>
                    </div>
    </div>
                  <ul className="actions">
                    <button type="submit" onSubmit={enviarDatos} className="btn btn-success">Enviar</button>
                  </ul>
    </form>
</div>

        </Fragment>
    );
}
 
export default Formulario;


//Profe, yo quiero hacer una página principal que en su menú o nav bar dirija a páginas internas, como por el ejemplo que una de esas páginas sea sólo del formulario de contacto del pdf … y definitivamente no me sale.  ¿habrá algún ejemplo recomendable para ver o es algo que veremos más adelante? 
