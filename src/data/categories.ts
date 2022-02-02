import { Category } from '../types/category'

//aqui não é um array é um objeto com 3 itens
export const categories: Category = {
    food: { title: 'Food', color: 'RoyalBlue', expense: true},
    rent: {title: 'Rent', color:'Orange', expense: true},
    salary: {title: 'Salary', color:'YellowGreen', expense: false},
    otherIncomes: {title: 'Other Income', color:'DarkOliveGreen', expense: false},
    otherExpenses: {title: 'Other Expenses', color:'IndianRed', expense: true},
}

