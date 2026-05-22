function MisDatos() {

    const productos = [
        {nombre: "TV", id: 1, precio: 200000 },
        {nombre: "Disco", id: 2, precio: 500000 },
        {nombre: "loquesea", id: 3, precio: 100000 } 
    ];

    const listaProductos = productos.map(producto =>
        <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
        </li>
    );

    return (
        <ul>
            {listaProductos}
        </ul>
    );
}

export default MisDatos;