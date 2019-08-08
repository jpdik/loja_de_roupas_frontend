import React, { Component } from 'react'

class Carrinho extends Component {

    renderCart() {
        const list = this.props.cart || [];

        return list.map((item, index) => (
            <tr key={index}>
                <td className="col-md-2">
                    <img className="card-img-top" src={item.imgUrl} height="200" />
                </td>
                <td className="col-md-4 vertical-center">{item.name}</td>
                <td className="col-md-3">1</td>
                <td className="col-md-3">R$ {item.value}.00</td>
            </tr>
        ))
    }

    render() {
        return (
            <div className="container">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th className="text-center">Imagem</th>
                                <th className="text-center">Nome</th>
                                <th className="text-center">Quantidade</th>
                                <th className="text-center">Preço por unidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderCart()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default Carrinho