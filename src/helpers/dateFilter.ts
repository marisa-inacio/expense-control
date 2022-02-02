//lista de funcoes que vão fazer filtros

import { Item } from '../types/item'

//funcao para ver o mes atual
export const getCurrentMonth = () => {
    //pega a data atual
    let now = new Date();
    //padrao 'ano-mes' - como o mes comeca em 0 no javascript acrescentamos 1
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

//funcao que filtra baseado na lista, manda a lista geral com o mes e ele filtra e envia a lista filtrada daquele mês.
//nao esquecer de tipar || depois dos : digo que o retorno será um array de Item, que no caso será a lista para aquele mes

export const FilterListByMonth = (list: Item[], date: string): Item[] => {

let newList: Item[] = [];

let [year, month] = date.split('-')
//outra forma menos rapida
// let dateSplit = date.split('-');
// let year = dateSplit[0];
// let month = dateSplit[1];

for(let i in list) {
    if (
    //se o ano do item e o mes do item baterem com o ano e mes que quero filtrar, se baterem quer dizer que aquela conta especifica é o que quero filtrar
    list[i].date.getFullYear() === parseInt(year) &&
    (list[i].date.getMonth()+1) === parseInt(month)
){
    //gera uma nova lista so com os items do mesmo ano e mes. manda o item para a lista nova
    newList.push(list[i]);
}}
return newList;
} //depois ir a app importar e para dentro do setFilteredList


//função para formatar uma data, recebe um date e retorna um string
export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month= date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${addZeroToDate(year)}`;
}
//funcao para colocar zero à esquerda para usar em cima
// export const assZeroToDate = (n: number): string => {
//     if(n < 10) {
//         return `0${n}`;
//     } else {
//         return `${n}`;
//     }
// }
const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'septembrer', 'october', 'november', 'december']

    //retornar um template de string
    return `${months[parseInt(month) - 1]} ${year}`;
    
}