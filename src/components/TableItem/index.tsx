import * as C from './styles';
import { Item } from '../../types/item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item
}

//vai ser uma linha da nossa tabela
export const TableItem = ({item}: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            {/* coloca a categoria baseada no item.category */}
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                 €{item.value}   
                </C.Value>
                </C.TableColumn>
            

        </C.TableLine>
    )


}


