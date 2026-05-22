import { createContext, useState, useContext } from "react";

const PerfilContext = createContext(null);

export function PerfilProvider({children})
{
    const [perfil, setPerfil] = useState({
        name:'Rick Sanchez',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nOv6iXMCzggA9At1R7PrVdhGjMS3sAStkw&s',
        imageSize: 90
    });
    
    const actualizarPerfil = (nuevosDatos) => {
        setPerfil((prevPerfil) => ({
            ...prevPerfil,
            ...nuevosDatos
        }));
    };

    return(
        <PerfilContext.Provider value= {{perfil, actualizarPerfil}}>
            {children}
        </PerfilContext.Provider>
    );
}

export function usePerfil()
{
    const context = useContext(PerfilContext);
    if(!context){
        throw new Error('UsePerfil debe ser usado dentro de PerfilProvider')
    }
    return context;
}