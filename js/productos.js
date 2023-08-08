let texto ="Hola. Estás en la sección de Productos."
const hablar = (texto)=> speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

hablar(texto)

const productos = [];

// Función para crear un nuevo producto
function crearProducto() {
    const codigo = prompt('Ingrese el código del producto:');
    const descripcion = prompt('Ingrese la descripción del producto:');
    const capacidad = prompt('Ingrese la capacidad del producto:');
    const precio = prompt("Ingrese el precio del producto: ");
    const stock = parseInt(prompt('Ingrese el stock del producto:'));
    const precioIva = parseFloat(21*precio/100);
   
    // Crear un objeto con los datos ingresados
    const producto = {
        codigo: codigo,
        descripcion: descripcion,
        capacidad: capacidad,
        precio: precio,
        stock: stock,
        precioIva: precioIva
        }
        NuevoStock = function(prodVendidos){
            if(producto.stock > prodVendidos && typeof(prodVendidos===Number) && producto.stock>0 )
            return stock = stock - parseInt(prodVendidos)
            console.log(stock)
    };
    

    // Agregar el objeto al array
    productos.push(producto); 
    console.log('Producto creado:', producto);
    console.log("Precio IVA incluido: "+ "$ " + (parseFloat(producto.precioIva) + parseFloat(producto.precio)))

}
// Llamar a la función para crear un nuevo producto

crearProducto();

// Mostrar la lista de productos
console.table('Lista de productos:', productos);