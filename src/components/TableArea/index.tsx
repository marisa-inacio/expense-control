import * as C from './styles';
import { Item } from '../../types/item';
import { TableItem } from '../TableItem/'

type Props = {
    list: Item[];
}

// criar o item para criar tabela
export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    {/* criar uma prop para passar a largura de cada uma */}
                    <C.TableHeadColumn width={100}>Date</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Category</C.TableHeadColumn>
                    <C.TableHeadColumn >Title</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Value</C.TableHeadColumn>

                </tr>



            </thead>
            <tbody>
                {/* vamos receber a prop da lista. quando recebemos uma prop num compomnente temos que criar um type para ele */}
                {list.map((item,index)=>(
                    //caso nao fosse dinamico
                    // <tr key={index}>
                    //     <td></td>
                    //     <td></td>
                    //     <td>{item.title}</td>
                    //     <td></td>
                    // </tr>
                    <TableItem key={index} item={item}/>
                
               ))}
            </tbody>
        </C.Table>
    )

}