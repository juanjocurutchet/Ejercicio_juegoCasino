// creo una clase hija llamada Tragamonedas que hereda de JuegoDeCasino

import { JuegoDeCasino } from "./juegoDecasino";

export class Tragamonedas extends JuegoDeCasino {
    private numeroDeCoincidencias: number;
  
    constructor(nombre: string, precio: number, numeroDeCoincidencias: number) {
      super(nombre, precio);
      this.numeroDeCoincidencias = numeroDeCoincidencias;
    }

    public getNumeroDeCoincidencias(): number {
      return this.numeroDeCoincidencias;
    }
    public setNumeroDeCoincidencias(numeroDeCoincidencias:number): void {
      this.numeroDeCoincidencias = numeroDeCoincidencias
    }
  
    public girarRodillos(): void {
      console.log(`Has logrado ${this.numeroDeCoincidencias} coincidencias`);
    }
  }