import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getMessages, sendMessage } from './chatActions'

class ChatList extends Component {

    constructor(props) {
        super(props)

        this.renderMessages = this.renderMessages.bind(this)
    }

    componentWillMount() {
        this.props.getMessages();
    }

    renderMessages() {
        const list = this.props.messages.filter(item => item.message.length > 0) || [];

        if (list.length > 0) {
            return list.map((item, index) => (
                <li key={index} className={`message ${item.base} appeared`}>
                    <div className="avatar"></div>
                    <div className="text_wrapper">
                        <div className="text">
                            {item.message}

                            {
                                item.type == 'option' ?
                                (
                                    <ul>
                                        {
                                            item.options.map((option,index) => (
                                                <li key={index} className="option-link" onClick={() => this.props.sendMessage(option.value.input.text)}>{option.label}</li>
                                            ))
                                        }
                                    </ul>
                                ) : ''
                            }
                        </div>
                    </div>
                </li>
            ))
        }
        else {
            return (
                <li>

                </li>
            )
        }

    }

    render() {
        const messages = this.renderMessages()
        return (
            <ul className="messages">
                {messages}
            </ul>
        )
    }

    componentDidUpdate() {
        $('.messages').animate({ scrollTop: $('.messages').prop('scrollHeight') }, 300);
    }
}

const mapStateToProps = state => ({ messages: state.chat.messages })
const mapDispatchToProps = dispatch => bindActionCreators({ getMessages, sendMessage }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ChatList)