import { Item } from '../types/item'

//exportar um array com os dados iniciais, nao esquecer em typescritpt tipar os dados. ver pasta types
export const items: Item[] = [
    {date: new Date(2022,0,15), category: 'food', title: 'McDonalds', value: 32.12},
    {date: new Date(2022,0,15), category: 'food', title: 'Burguer King', value: 28},
    {date: new Date(2022,0,15), category: 'rent', title: 'Aluguer Apt', value: 2300},
    {date: new Date(2022,1,15), category: 'salary', title: 'Salario XPTO', value: 4000}
]

// localStorage.setItem('mybook', JSON.stringify(nome do array))
// const result = localStorage.getItem('mybook')
// JSON.parse(result)