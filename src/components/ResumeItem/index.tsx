import * as C from './styles';

type Props = {
    title: string;
    value: number;
    color?: string;
}


export const ResumeItem = ({title, value, color}: Props) => {
    return(
        <C.Container>
            <C.Title>{title}</C.Title>
            {/* uma prop para colocar a cor no  infoArea*/}
            <C.Info color={color}>€ {value}</C.Info>
        </C.Container>
    )
}
