import { JuegoDeCasino } from "./juegoDecasino"
import { Tragamonedas } from "./tragamonedas"
import { Ruleta } from "./ruleta"
import { Casino } from "./casino";

// Creo una instancia de la clase Tragamonedas

const miTragamonedas = new Tragamonedas("Tragamonedas 1", 5, 3);
console.log(`Precio del juego: ${miTragamonedas.getPrecio()}`);
miTragamonedas.juegoElegido();
miTragamonedas.girarRodillos();

// Creo una instancia de la clase Ruleta

const miRuleta = new Ruleta("Ruleta 1", 10, 37);
console.log(`Precio del juego: ${miRuleta.getPrecio()}`);
miRuleta.juegoElegido();
miRuleta.girarRuleta();

// Creo una instancia de la clase Casino

const miCasino = new Casino(miRuleta,miTragamonedas);

miCasino.jugarTragamonedas()
miCasino.jugarRuleta()
