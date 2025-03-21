// Desarrolla una clase en JavaScript llamada CarritoCompra que
// represente un carrito de compras. La clase debe tener los siguientes métodos:

// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

// Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra
// funciona correctamente en diferentes escenarios.

class CarritoCompra {
  constructor() {
    this.carrito = [];
    this.total = 0;
  }

  agregarProducto(producto) {
    this.carrito.push(producto);
  }

  calcularTotal() {
    this.total = 0;
    for (let item of this.carrito) {
      this.total += item.price;
    }
    return this.total;
  }

  aplicarDescuento(porcentaje) {
    const descuento = this.total * porcentaje;
    return this.total - descuento;
  }
};
module.exports = CarritoCompra;
