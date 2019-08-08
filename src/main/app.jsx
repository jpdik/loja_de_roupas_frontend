import '../common/template/dependencies'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom';

import React from 'react'
import Chat from '../chat/chat'
import Footer from '../common/template/footer'
import Header from '../common/template/header';
import Dashboard from '../dashboard/dashboard';
import Carrinho from '../carrinho/carrinho';

import { getCart } from '../chat/chatActions'

class App extends React.Component {
    componentWillMount() {
        this.props.getCart();
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.cart.length == 0 || nextProps.cart.length == 0) return;
        else if(this.props.cart.length != nextProps.cart.length) {
            this.props.history.push('/carrinho')
        }
    }

    render() {
        const { cart } = this.props;
        return (
            <div className="site-wrapper-inner">
                <div className="cover-container">
                    <Header />

                    <Switch>
                        <Route path="/carrinho" render={() => <Carrinho cart={cart} />} />
                        <Route component={Dashboard} />
                    </Switch>
                    <Footer nome="@jpdik" />
                </div>
                <Chat />
            </div>
        )
    }
}

const mapStateToProps = state => ({ cart: state.chat.cart })
const mapDispatchToProps = dispatch => bindActionCreators({ getCart }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))