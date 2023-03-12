// Creo la clase JuegoDeCasino

export class JuegoDeCasino {
    private nombreJuego: string;
    private precio: number;
  
    constructor(nombreJuego: string, precio: number) {
      this.nombreJuego = nombreJuego;
      this.precio = precio;
    }
    public getPrecio(): number {
      return this.precio;
    }
    public setPrecio(precio:number): void {
      this.precio = precio
    }

    public getNombreDelJuego(): string {
      return this.nombreJuego;
    }
    public setNombreDelJuego(nombreJuego:string): void {
      this.nombreJuego = nombreJuego
    }

  
    public juegoElegido(): void {
      console.log(`Estás jugando al juego ${this.nombreJuego}`);
    }
  
  }
  
    
  
  
  
  