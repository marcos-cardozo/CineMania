const CarritoCompra = require("../index");
const mockCarritoCompra = jest.fn(CarritoCompra);

// Verificar que los productos se agreguen al carrito correctamente
// Verificar que CarritoCompra calcule correctamente el total de la compra
// Verificar que se aplique correctamente el descuento al total de la compra

describe("Prueba de que 'CarritoCompra' haga todo correctamente", () => {
    it("Verificar que los productos se agreguen al carrito correctamente", ()=>{
        const carritoCompra = new mockCarritoCompra();
        carritoCompra.agregarProducto({});
        expect(carritoCompra.carrito.length).toEqual(1);
    });
    it("Verificar que CarritoCompra calcule correctamente el total de la compra", ()=>{
        const carritoCompra = new mockCarritoCompra();
        carritoCompra.agregarProducto({price: 10});
        carritoCompra.agregarProducto({price: 20});
        expect(carritoCompra.calcularTotal()).toEqual(30);
    });
    it("Verificar que se aplique correctamente el descuento al total de la compra", ()=>{
        const carritoCompra = new mockCarritoCompra();
        carritoCompra.agregarProducto({price: 1000})
        carritoCompra.calcularTotal();
        expect(carritoCompra.aplicarDescuento(0.10)).toEqual(900);
    });
});
