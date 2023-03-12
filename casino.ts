import { Ruleta } from "./ruleta";
import { Tragamonedas } from "./tragamonedas";


export class Casino {
    private ruleta: Ruleta;
    private tragamonedas: Tragamonedas;
    constructor(ruleta: Ruleta, tragamonedas: Tragamonedas) {
      this.ruleta = ruleta;
      this.tragamonedas = tragamonedas;
    }


    public jugarRuleta() {
      this.ruleta.girarRuleta();
    }
    public jugarTragamonedas() {
      this.tragamonedas.girarRodillos();
    }
  }