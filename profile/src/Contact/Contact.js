import React, { Component } from 'react'
import { Scoped } from 'kremling';
import Styles from './contact.krem.css';
import ContactList from '../Contact-List/ContactList';

class Contact extends Component {

    constructor() {
        super()
    }

    render() {
        const margin = {
            marginTop: '20%',
            marginLeft: '5px',
            marginRight: '5px'
        }

        const contact = this.props.conatcts;
        const list = contact.map((each) => {
            return <ContactList key={each.id} contact={each} />;
        })

        return (
            <Scoped css={Styles}>
                <div className='container-fluid p-0'>
                    <div style={margin}>{list}</div>
                </div>
            </Scoped>
        )
    }
}

export default Contact;
