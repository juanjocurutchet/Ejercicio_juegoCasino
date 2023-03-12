import { JuegoDeCasino } from "./juegoDecasino";

// creo la clase hija llamada Ruleta...
export class Ruleta extends JuegoDeCasino {
    private numeroDeCasillero: number;
  
    constructor(nombre: string, precio: number, numeroDeCasillero: number) {
      super(nombre, precio);
      this.numeroDeCasillero = numeroDeCasillero;
    }

    public getNumeroDeCasillero(): number {
      return this.numeroDeCasillero;
    }
    public setNumeroDeCasillero(numeroDeCasillero:number): void {
      this.numeroDeCasillero = numeroDeCasillero
    }
  
    public girarRuleta(): void {
      console.log(`La bolilla ha caido en el numero: ${this.numeroDeCasillero}`);
    }
  }