
import style from "../FelizNavidad/FelizNavidad.module.css"
const FelizNavidad = ({ imagen1, imagen2 }) => {


 return (
    <div className={style.container}>
    <h1> 🎄 Feliz Navidad mami  🎅   </h1>   
    <img src={imagen1} alt="Imagen 1" />
    <img src={imagen2} alt="Imagen 2" />
    <p> Te quiero mucho ❤️</p>
  </div>

 );



};

export default FelizNavidad;
