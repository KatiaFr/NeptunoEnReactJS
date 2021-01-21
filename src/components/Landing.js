import React from 'react';

const Landing = () => {
  return (
//<UnCom>
  
<div className="landingcontainer">

  <div className="container" role="main">
      <div className="row">
          <div className="col-md-8">
              <div className="row">
                <article className = "col-md-12">
                <h2 id="subti1">Información sobre el planeta Neptuno</h2>     
                  <p>El Planeta <strong>Neptuno</strong> es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte
                  de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y es el primero que fue descubierto gracias a
                 predicciones matemáticas. Su nombre fue puesto en honor al dios romano del mar —Neptuno—, y es el cuarto planeta en diámetro y el tercero 
                 más grande en masa.<br></br>
                 Su masa es diecisiete veces la de la Tierra y ligeramente mayor que la de su planeta «gemelo» Urano, que tiene quince masas terrestres
                    y no es tan denso. En promedio, Neptuno orbita el Sol a una distancia de 30,1 ua. Su símbolo astronómico es ♆, una versión estilizada
                  del tridente del dios Neptuno. <br></br>
                 Tras el descubrimiento de Urano, se observó que las órbitas de Urano, Saturno y Júpiter no se comportaban tal como predecían las leyes de Kepler
                  y de Newton. Adams y Le Verrier, de forma independiente, calcularon la posición de un hipotético planeta, Neptuno, que finalmente fue encontrado
                  por Galle, el 23 de septiembre de 1846, a menos de un grado de la posición calculada por Le Verrier. Más tarde se advirtió que Galileo ya había
                  observado Neptuno en 1612, pero lo había confundido con una estrella. </p>


               </article> 
               <article className="col-md-8">
                <h3>Neptuno en la Mitología </h3>
                <p>  Neptuno es un dios de la mitología romana, pero proveniente de la mitología griega, hijo de los dioses Saturno y Ops, hermano de 
                    Júpiter y Plutón. 
                   Gobierna todas las aguas y mares y cabalga las olas sobre caballos blancos. Todos los habitantes de las aguas deben
                    obedecerlo y se le conoce como Poseidón en la mitología griega.
                    <br></br>
                 Neptuno eligió el mar como morada y en sus profundidades existe un reino de castillos dorados. Con su poderoso tridente agita las olas, hace brotar
                fuentes y manantiales donde quiera y en causa de su ira provocando los temibles simdos o terremotos.
                <br></br>
                    Representaciones de Neptuno en mosaicos romanos, especialmente los del norte de África, están influidas por las convenciones helenísticas.
                Neptuno probablemente fue asociado con manantiales de agua dulce antes que el mar. Al igual que Poseidón, fue adorado por los romanos también 
                como un dios de caballos, bajo el nombre de Neptuno Ecuestre, patrón de las carreras de caballos.
                <br></br>
                Este dios es un rey inseparable de sus caballos. Por esta y más razones, se le simboliza con un caballo. Neptuno no viste con ropajes suntuosos,
                ya que su aspecto es suficiente para demostrar su poderío.

                   El dios de los mares es un muy peligroso e inestable elemento, con sus emociones puede provocar desde terribles tormentas y tempestades hasta olas 
               tranquilas y pacíficas, por lo que nunca nadie intenta provocarlo sin un importante motivo.
                </p> 
            </article>
          <article className="col-md-4">
                    <img src="./recursosgraficos/Cirta_mosaic.jpg" alt="Obra de arte, pintura Triunfo de Poseidón y Anfítrite" className="img-fluid"/>  Triunfo de Poseidón y Anfítrite, 
                    mostrando a la pareja en procesión en un amplio mosaico en Cirta, África Romana (ca. 315–325 d.C., ahora en el Louvre)
           </article> 


                <article className="col-md-12">

                 <h3 id="subti3">Algunos datos sobre el Sistema Solar</h3>     
                   <p>  En el Sistema Solar hay nueves planetas. En orden de proximidad al Sol son: Mercurio, Venus, Tierra, Marte,
                Júpiter, Saturno, Urano, <ins>Neptuno </ins> y Plutón. 
                <br></br> A los cuatro primeros planetas se los denomina planetas interiores porque están entre el Sol y el cinturón de asteroides,
                   y los planetas exteriores son Júpiter Saturno, Urano, Neptuno y Plutón.
                   <br></br>
                   Un dato que te va a servir: los <b>nombres de planetas</b> son sustantivos propios. O sea, son llamados como nombres propios y <b>llevan mayúscula </b> en su letra capital o primera letra. </p>
                
                   <table className="table">
                   <thead className="thead-dark">
                     <tr>
                        <th>Planetas "interiores" </th>
                        <th>Planetas "exteriores"</th>
                     </tr>
                    </thead>
                      <tbody>
                     <tr>
                        <td>Mercurio</td>
                        <td>Júpiter</td>
                     </tr>
                      <tr>
                        <td>Venus</td>
                        <td>Saturno</td>
                    </tr>
                    <tr>
                         <td>Tierra</td>
                         <td><b>Neptuno</b></td>
                    </tr>
                    <tr>
                         <td>Marte</td>
                         <td>Plutón</td>
                    </tr>
                  </tbody>
                </table>
                        <p> Del mimdo modo, encontramos otras cadenas de asteroides, rocas pequeñas, que también giran, y la mayoría están entre Marte y Júpiter.
                     Además están los cometas que se acercan y se alejan mucho del Sol.
                         </p>
                         <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/neptune-moons-16.gif" alt="Órbitas de las lunas de Neptuno" className="img-fluid" />

             </article>   


    </div>
  </div>

<div className="col-sm-3">
<div className="row">
<section className= "flex-wrap">

    <div className="list-group-item">
                        <h5 className="list-group-item-heading"> Sobre este sitio</h5>
                        <p className="list-group-item-text">   Aquí encontrarás información sobre el <strong>Planeta Neptuno</strong> y un breve apartado sobre la mitología alrededor del mimdo
                        </p>
       </div>
        
           <details>
                        <summary>Otra info</summary>
                        <p>Este sitio fue diseñado con el objetivo cumplir con la Actividad de Maquetado con CSS y Bootstrap, Javascript y React, del curso de 
                            Programación Web Full Stack del ISPC. </p>
            </details>   

            <article className="col-sm">
            <h5>Descubriendo planetas</h5>
                <p>Una guía para que compares y veas la diferencia, en años, sobre cómo se dió el descubrimiento:</p>            
                <table className="table table-dark">
            
                    <thead>
                     <tr>
                        <th>Planeta</th>
                        <th>Fechas de descubrimiento</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr>
                        <td>Neptuno</td>
                        <td>23 de septiembre de 1846</td>
                     </tr>
                      <tr>
                        <td>Urano</td>
                        <td>13 de marzo de 1781</td>
                    </tr>
                    <tr>
                         <td>Júpiter</td>
                         <td>Conocido desde la antigüedad (Antes de Galileo)</td>
                    </tr>
                    <tr>
                         <td>Saturno</td>
                         <td>Conocido desde la antigüedad (Antes de Galileo)</td>
                    </tr>
                  </tbody>
                </table>

                       <br/>
           </article> 
             
           <article className="col-sm">

                       <h4>Más sobre Neptuno</h4>
                    <p>
                      En nuestro artículo "Detalles de Neptuno", encontrarás mucha más - y profunda - información sobre el planeta </p>
                  <a href="./Información sobre neptuno.html" className="btn btn-info" role="button">info astronómica</a>
                     <br></br>
                     </article> 

</section>        

  </div>
  </div>
  

       
</div>
</div>
</div>


  )

}
export default Landing;