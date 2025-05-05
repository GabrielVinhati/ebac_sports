import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[] // Certifique-se de incluir 'favoritos' aqui
  favoritar: (produto: ProdutoType) => void
  adicionarAoCarrinho: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ produtos, favoritos, favoritar, adicionarAoCarrinho }: Props) => {
  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={favoritos.some((f) => f.id === produto.id)} // Verificando se o produto está nos favoritos
          aoComprar={() => adicionarAoCarrinho(produto)}
          favoritar={() => favoritar(produto)}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
