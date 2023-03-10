// Creo la clase JuegoDeCasino

export class JuegoDeCasino {
    private nombreJuego: string;
    private precio: number;
  
    constructor(nombreJuego: string, precio: number) {
      this.nombreJuego = nombreJuego;
      this.precio = precio;
    }
  
    public juegoElegido(): void {
      console.log(`Estás jugando al juego ${this.nombreJuego}`);
    }
  
    public getPrecio(): number {
      return this.precio;
    }
  }
  
    
  
  
  
  