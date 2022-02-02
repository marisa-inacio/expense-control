import {useState, useEffect} from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { Category } from './types/category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, FilterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

const App = () => {
  const [list, setList] = useState(items);
  //como o items esta tipado o useState ja fica tipado, mas se fosse necessario poderiamos tipar como esta abaixo
  //const [list, setList] = useState<Item[]>(items);
  //guardar a lista filtrada aqui tipamos, no casso é um array de item
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  //currentMonth fica com o mes atual
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

    //monitora determinadas circunstancias e sempre que alguma coisa modificar ele atualiza a funcao que vamos criar
    // aqui o useeffect tem uma funcao e o segundo parametro é um array que vai monitorar duas variaveis. alteracao mes ou mudar algo no list  funcao corre
  useEffect(() => {
  setFilteredList( FilterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  //monitora a filteredList, sempre que alterar, recalcula a despesa e receita
  //so sabemos se e receita ou despesa baseado na categoria
  useEffect(() =>{
    //quando tiver a modificacao, ficam a 0 para mostrar as info da pagina que esta a mostrar
    let incomeCount = 0;
    let expenseCount= 0;

    //ver na lista filtrada
    for(let i in filteredList) {
      //se a categora for um expense, true
      if(categories[filteredList[i].category].expense) {
        // soma ao expense, que, value ja é um numero
        expenseCount += filteredList[i].value;
      } else{
        //Senao soma as receitas
        incomeCount += filteredList[i].value;
      }
    }
    //mando o meu income para o set
    setIncome(incomeCount);
    setExpense(expenseCount);


  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  //funcao que recebe um item e adiciona na lista
  const handleAddItem = (item: Item) => {
    //copia do array
    let newList = [...list];
    //na copia adiciono o item
    newList.push(item);
    //atualizo com a copia
    setList(newList);
  }

  return (
    <C.Container>
        <C.Header>
          <C.HeaderText>Expenses Control</C.HeaderText>
        </C.Header>
      <C.Body>
        {/* Area de informacoes */}
        {/* mando o state porque quando mudar o mes muda aqui e renderiza esta area e fica sempre atualizado */}
        {/* ir mandar a props ao index em infoarea */}
        <InfoArea 
        currentMonth={currentMonth}
        // mais uma props para trocar o mes, quando clica. criar a funcao e ir ao indez do infoArea
        onMonthChange={handleMonthChange}

        //calcular aqui e enviar como prop para a infoArea nao deixar responsabildades da lista atual em componentes
        income={income}
        expense={expense}
        />

        {/* Area de inserção da categoria*/}
        {/* vem ja o item pronto a ser colocado aqui */}
        <InputArea onAdd={handleAddItem} />

        {/* tabela de items */}
        {/* mostra a lista filtrada */}
        <TableArea list={filteredList} />


      </C.Body>

    </C.Container>
  )
}

export default App;

