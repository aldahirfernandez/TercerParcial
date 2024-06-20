import "./CardExercises.css"
import NameEjer from "./NameExercises";
import Ejercicio from "../../src/assets/Ejercicio.png"
import Flecha from "../../src/assets/Flecha.png"
function CardExercises(){
    return(
        <>
        <div className="ContenedorTarjeta">
            <img className="ImagenEjer" src={Ejercicio} alt="" />

            <div className="ContenedorDes">
                <NameEjer/>
            </div>

            <img className="ImgFlecha" src={Flecha}alt="" />
        </div>
        </>

    )
}
export default CardExercises;