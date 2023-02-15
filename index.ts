const primeiroNome: string = "Renã";
const diaDoMes = '06';
const hojeFezSol: boolean = true;

const dog: Partial<Cachorrro> = {}

type Cachorrro = {
    nome: string
    idade: Date
    raça: string
    grandePorte: boolean
    donos?: string[]
  }
  
  interface Animais {
    tipo: string
    bipede: boolean
    asas: boolean
    região: string
  }