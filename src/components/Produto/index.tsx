import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { adicionarNoCarrinho } from '../../store/reducers/carrinho'
import { adicionarNosFavoritos } from '../../store/reducers/favorito'
import { useState } from 'react'

export type PropsFav = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: PropsFav) => {
  const dispatch = useDispatch()

  const [estaFavoritado, setEstaFavoritado] = useState(false)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => {
          dispatch(adicionarNosFavoritos(produto))
          setEstaFavoritado(!estaFavoritado)
        }}
        type="button"
      >
        {estaFavoritado
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(adicionarNoCarrinho(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
