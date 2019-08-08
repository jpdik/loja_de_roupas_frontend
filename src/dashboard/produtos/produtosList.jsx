import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { obterProdutos } from './produtosActions'

import { sendMessage } from '../../chat/chatActions';

class ProdutosList extends React.Component{

    componentWillMount(){
        this.props.obterProdutos()
    }

    renderCards(){
        const { sendMessage } = this.props;

        const list = this.props.list || []
        return list.map(produto => (
            <div key={produto._id} className="col-6 col-sm-4 col-md-3 p2">
                <div className="card">
                    <img className="card-img-top" src={produto.imgUrl} />
                    <h4 className="card-title text-center">{produto.name}</h4>
                    <p className="card-text text-center">R$ {produto.value}.00</p>
                    <button type="button" className="btn btn-dark" onClick={() => sendMessage(`Comprar ${produto.name}`)}>Adicionar ao carrinho</button>
                </div>
            </div>
        ))
    }

    render(){
        return(
            <div className="row">
                {this.renderCards()}
            </div>
        )
    }

}

const mapStateToProps = state => ({ list: state.produtos.list })
const mapDispatchToProps = dispatch => 
bindActionCreators({obterProdutos, sendMessage }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProdutosList)