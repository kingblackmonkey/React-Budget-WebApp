import totalize from './totalize'

const totalizeBudget = (income, expenses)=>{
    income = totalize(income);
    expenses = totalize(expenses);
    return (income - expenses) / 100 ;
}

export default totalizeBudget