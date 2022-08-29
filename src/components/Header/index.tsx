import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    // começar com on para se referir a uma function
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="financas" />
                <button type="button" onClick={ onOpenNewTransactionModal }>
                    Nova Transação
                </button>

                
            </Content>
        </Container>
    )
}