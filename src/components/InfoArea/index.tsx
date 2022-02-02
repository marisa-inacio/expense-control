import * as C from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense}: Props) => {

    //pegar o mes e diminuir 1
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        //ano mes e dia para definir o tipo de data o dia é irrelevante
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        //define o mes e pega o mes e diminui um - assim entende que se for janeiro ao diminuir vem para dezembro 
        currentDate.setMonth(currentDate.getMonth() - 1);
        //manda o mes para ser mudado no App atraves da prop
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        //ano mes e dia para definir o tipo de data o dia é irrelevante
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        //define o mes e pega o mes e diminui um - assim entende que se for janeiro ao diminuir vem para dezembro 
        currentDate.setMonth(currentDate.getMonth() + 1);
         //manda o mes para ser mudado no App atraves da prop
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
        
    }



        return(
            <C.Container>
                <C.MonthArea>
                    <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                    {/* exibir o mes e o ano atual */}
                    <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                    <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
                </C.MonthArea>

                <C.ResumeArea>
                    {/* por props para o ResumeItem */}
                    {/* as variaveis tem que receber os valores das listas filtradas */}
                    <ResumeItem title="Incomes" value={income}/>
                    <ResumeItem title="Expenses" value={expense}/>
                    <ResumeItem 
                    title="Balance" 
                    value={income - expense}
                    color={(income-expense) < 0 ? 'red' : 'green'}/>
                </C.ResumeArea>
            </C.Container>
        )
}