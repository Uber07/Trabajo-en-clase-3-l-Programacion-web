function Buton({count, onClic})
{
    return(
        <button onClick={onClic}>hiciste click {count} veces.</button>
    )
}

export default Buton;