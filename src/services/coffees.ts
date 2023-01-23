import CoffeeTraditionalExpress from '../assets/coffees/coffeeTraditionalExpress.png'
import CoffeeAmericanExpress from '../assets/coffees/coffeeAmericanExpress.png'
import CoffeExpressCremoso from '../assets/coffees/coffeeExpressCremoso.png'
import CoffeExpressGelado from '../assets/coffees/CoffeExpressGelado.png'
import CoffeeWithMilk from '../assets/coffees/CoffeeWithMilk.png'
import CoffeeLate from '../assets/coffees/CoffeeLate.png'
import Capuccino from '../assets/coffees/Capuccino.png'
import Macchiato from '../assets/coffees/Macchiato.png'
import Mocaccino from '../assets/coffees/Mocaccino.png'
import HotChocolate from '../assets/coffees/HotChocolate.png'
import Cubano from '../assets/coffees/Cubano.png'
import Havaiano from '../assets/coffees/Havaiano.png'
import Arabe from '../assets/coffees/Arabe.png'
import Irlandes from '../assets/coffees/Irlandes.png'

interface ListProductsType {
  id: number
  label: string
}
export interface ListProductsAttributes {
  id: number
  title: string
  description: string
  price: number
  amountTotal: number
  QTD: number
  type: ListProductsType[]
  thumb: string
}

export const ListProducts: ListProductsAttributes[] = [
  {
    id: 1,
    type: [{ id: 1, label: 'TRADICIONAL' }],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    QTD: 0,
    amountTotal: 0,
    thumb: CoffeeTraditionalExpress,
  },
  {
    id: 2,
    type: [{ id: 1, label: 'TRADICIONAL' }],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    QTD: 0,
    amountTotal: 0,
    thumb: CoffeeAmericanExpress,
  },
  {
    id: 3,
    type: [{ id: 1, label: 'TRADICIONAL' }],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    QTD: 0,
    amountTotal: 0,
    thumb: CoffeExpressCremoso,
  },
  {
    id: 4,
    type: [
      { id: 1, label: 'TRADICIONAL' },
      { id: 2, label: 'GELADO' },
    ],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    QTD: 0,
    amountTotal: 0,
    thumb: CoffeExpressGelado,
  },
  {
    id: 5,
    type: [
      { id: 1, label: 'TRADICIONAL' },
      { id: 3, label: 'COM LEITE' },
    ],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    QTD: 0,
    amountTotal: 0,
    thumb: CoffeeWithMilk,
  },
  {
    id: 6,
    type: [
      { id: 1, label: 'TRADICIONAL' },
      { id: 3, label: 'COM LEITE' },
    ],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    QTD: 0,
    amountTotal: 0,
    thumb: CoffeeLate,
  },
  {
    id: 7,
    type: [
      { id: 1, label: 'TRADICIONAL' },
      { id: 3, label: 'COM LEITE' },
    ],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    QTD: 0,
    amountTotal: 0,
    thumb: Capuccino,
  },
  {
    id: 8,
    type: [
      { id: 1, label: 'TRADICIONAL' },
      { id: 3, label: 'COM LEITE' },
    ],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    QTD: 0,
    amountTotal: 0,
    thumb: Macchiato,
  },
  {
    id: 9,
    type: [
      { id: 1, label: 'TRADICIONAL' },
      { id: 3, label: 'COM LEITE' },
    ],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    QTD: 0,
    amountTotal: 0,
    thumb: Mocaccino,
  },
  {
    id: 10,
    type: [
      { id: 4, label: 'ESPECIAL' },
      { id: 3, label: 'COM LEITE' },
    ],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    QTD: 0,
    amountTotal: 0,
    thumb: HotChocolate,
  },
  {
    id: 11,
    type: [
      { id: 4, label: 'ESPECIAL' },
      { id: 5, label: 'ALCOÓLICO' },
      { id: 2, label: 'GELADO' },
    ],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    QTD: 0,
    amountTotal: 0,
    thumb: Cubano,
  },
  {
    id: 12,
    type: [{ id: 4, label: 'ESPECIAL' }],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    QTD: 0,
    amountTotal: 0,
    thumb: Havaiano,
  },
  {
    id: 13,
    type: [{ id: 4, label: 'ESPECIAL' }],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    QTD: 0,
    amountTotal: 0,
    thumb: Arabe,
  },
  {
    id: 14,
    type: [
      { id: 4, label: 'ESPECIAL' },
      { id: 5, label: 'ALCOÓLICO' },
    ],

    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    QTD: 0,
    amountTotal: 0,
    thumb: Irlandes,
  },
]
