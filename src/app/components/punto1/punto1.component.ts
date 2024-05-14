import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css',
  providers: [CurrencyPipe],
})
export class Punto1Component {

  productos = [
    {
      nombre: 'Notebook Asus ZenBook 14',
      descripcion:
        'Procesador Intel Core i7, 16GB RAM, SSD 512GB, Pantalla Full HD 14 pulgadas',
      img: '../../../assets/img/Notebook Asus ZenBook 14.png',
      precio: 1750000,
    },
    {
      nombre: 'Monitor LG UltraWide 34',
      descripcion:
        'Resolución 3440x1440, Tecnología IPS, Frecuencia de actualización 75Hz, HDR10',
      img: '../../../assets/img/Monitor LG UltraWide 34.png',
      precio: 950000,
    },
    {
      nombre: 'Smartphone Samsung Galaxy S22',
      descripcion:
        'Pantalla Dynamic AMOLED 2X de 6.6", Procesador Exynos 2200, Cámara principal de 108MP, 8GB RAM',
      img: '../../../assets/img/Smartphone Samsung Galaxy S22.png',
      precio: 2400000,
    },
    {
      nombre: 'TV Samsung QLED 65"',
      descripcion:
        'Resolución 4K, Quantum HDR, Procesador Quantum 8K, Tecnología Ambient Mode+',
      img: '../../../assets/img/TV Samsung QLED 65.png',
      precio: 3800000,
    },
    {
      nombre: 'Cámara Sony Alpha 7 IV',
      descripcion:
        'Sensor Exmor RS de 33MP, Enfoque automático híbrido, Grabación de video 4K a 120fps, Estabilización de imagen de 5 ejes',
      img: '../../../assets/img/Cámara Sony Alpha 7 IV.png',
      precio: 5500000,
    },
    {
      nombre: 'Consola Sony PlayStation 5',
      descripcion:
        'Procesador AMD Ryzen Zen 2 de 8 núcleos, Gráficos AMD RDNA 2, SSD de 825GB, Soporte para Ray Tracing',
      img: '../../../assets/img/Consola Sony PlayStation 5.png',
      precio: 1800000,
    },
  ];

  formatearPrecio(precio: number): string {
    return precio.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
    });
  }

  carrito: any[] = []; // Array para el carrito

  agregarAlCarrito(producto: any) {
    // Verificar si el producto ya está en el carrito
    const productoEnCarrito = this.carrito.find(
      (item) => item.nombre === producto.nombre
    );

    if (!productoEnCarrito) {
      this.carrito.push(producto);
    } else {
      alert('Este producto ya está en el carrito.');
    }
  }

  calcularTotal(): number {
    return this.carrito.reduce((total, producto) => total + producto.precio, 0);
  }
}
