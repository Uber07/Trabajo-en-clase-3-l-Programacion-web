import { useState } from "react";
import { usePerfil } from "../context/PerfilContext";

function BotonRollPersonaje(){
    const {actualizarPerfil} = usePerfil();

    const [cargando, setCargando] = useState(false);

    const buscarPersonajeAleatorio = async () => {
        setCargando(true);

        const totalPersonaje = 826;
        const idAleatorio = Math.floor(Math.random()*totalPersonaje) + 1;

        try {

            const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${idAleatorio}`)

            if(!respuesta.ok)
            {
                throw new Error("Error en la petición")
            }

            const datosPersonaje = await respuesta.json();

            actualizarPerfil({
                name: datosPersonaje.name,
                imageUrl: datosPersonaje.image
            })

        }catch(error)
        {
            console.error("Error al consultar la APO", error);
            alert("Error al consultar la API");
        }finally{
            setCargando(false)
        }

    };

    return (
        <button onClick={buscarPersonajeAleatorio} disabled = {cargando}>
            {cargando ? 'Buscando...' : 'Roll personaje'}
        </button>
    )
}

export default BotonRollPersonaje;