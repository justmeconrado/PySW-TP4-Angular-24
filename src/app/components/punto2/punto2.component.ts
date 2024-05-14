import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css',
})
export class Punto2Component {
  palabras = [
    'casa',
    'sol',
    'luna',
    'gato',
    'mesa',
    'pato',
    'luz',
    'mar',
    'flor',
    'agua',
    'piel',
    'paz',
    'vida',
    'azul',
    'uva',
    'oso',
    'lago',
    'café',
    'fiel',
    'pelo',
    'león',
  ];
  palabraActual = '';
  opcionPregunta = '';
  iteracion = 0;
  aciertos = 0;
  errores = 0;
  juegoTerminado = false;

  iniciarJuego() {
    this.iteracion = 0;
    this.aciertos = 0;
    this.errores = 0;
    this.juegoTerminado = false;
    this.siguientePalabra();
  }

  siguientePalabra() {
    if (this.iteracion < 8) {
      this.palabraActual = this.palabras[this.iteracion];
      this.opcionPregunta = this.obtenerOpcionAleatoria();
      this.iteracion++;
    } else {
      this.juegoTerminado = true;
    }
  }

  verificarRespuesta(respuestaUsuario: number) {
    const respuestaCorrecta = this.obtenerRespuestaCorrecta();
    if (respuestaUsuario === respuestaCorrecta) {
      this.aciertos++;
    } else {
      this.errores++;
    }
    this.siguientePalabra();
  }

  obtenerOpcionAleatoria(): string {
    const opciones = ['vocales', 'consonantes', 'letras', 'silabas'];
    return opciones[Math.floor(Math.random() * opciones.length)];
  }

  obtenerRespuestaCorrecta(): number | undefined {
    switch (this.opcionPregunta) {
      case 'vocales':
        return this.contarVocales(this.palabraActual);
      case 'consonantes':
        return this.contarConsonantes(this.palabraActual);
      case 'letras':
        return this.palabraActual.length;
      case 'silabas':
        return this.contarSilabas(this.palabraActual);
    }
    return undefined;
  }

  contarVocales(palabra: string): number {
    const vocales = palabra.match(/[aeiou]/gi);
    return vocales ? vocales.length : 0;
  }

  contarConsonantes(palabra: string): number {
    const consonantes = palabra.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    return consonantes ? consonantes.length : 0;
  }

  contarSilabas(palabra: string): number {
    palabra = palabra.toLowerCase(); // Convertir a minúsculas para simplificar

    // Reglas básicas de conteo de sílabas en español
    const regex = /[aeiouáéíóúü]|y(?=[aeiou])/g; // Vocales y 'y' seguida de vocal
    let silabas = palabra.match(regex)?.length || 0; // Contar coincidencias

    // Ajustes para casos especiales
    if (palabra.endsWith('e')) {
      silabas--; // No contar 'e' final no acentuada
    }
    if (palabra.endsWith('n') || palabra.endsWith('s')) {
      silabas--; // No contar 'n' o 's' final si la penúltima sílaba es tónica
    }
    if (palabra.includes('gu') || palabra.includes('qu')) {
      silabas--; // 'gu' y 'qu' forman una sola sílaba
    }

    return silabas;
  }
}
