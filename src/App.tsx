import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './store/services/produtosApi'
import { adicionarAoCarrinho, favoritar } from './store/reducers/carrinhoSlice'
import { RootState } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()

  const { data: produtos = [], isLoading } = useGetProdutosQuery()
  const carrinho = useSelector((state: RootState) => state.carrinho.carrinho)
  const favoritos = useSelector((state: RootState) => state.carrinho.favoritos)

  function handleAdicionarAoCarrinho(produto: Produto) {
    if (carrinho.find((p: Produto) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      dispatch(adicionarAoCarrinho(produto))
    }
  }

  function handleFavoritar(produto: Produto) {
    dispatch(favoritar(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        {isLoading ? (
          <p>Carregando produtos...</p>
        ) : (
          <Produtos
            produtos={produtos}
            favoritos={favoritos} // Passando favoritos corretamente
            favoritar={handleFavoritar}
            adicionarAoCarrinho={handleAdicionarAoCarrinho}
          />
        )}
      </div>
    </>
  )
}

export default App
