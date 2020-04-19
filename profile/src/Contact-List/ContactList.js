import React, { Component, Fragment } from 'react'
import { Scoped } from 'kremling';
import Styles from './contact-list.krem.css'
import config from '../config';

class ContactList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Scoped css={Styles}>
                <Fragment>
                    <ul>
                        <li className='green'>
                            <div className='d-flex'>
                                <a className='logo-width'>
                                    <img src={config.baseURL+this.props.contact.type} width='15' height='15'></img>
                                </a>
                                <a className='content-width'>{this.props.contact.content}</a>
                            </div>
                        </li>
                    </ul>
                </Fragment>
            </Scoped>
        )
    }
}

export default ContactList
