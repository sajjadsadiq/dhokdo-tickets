import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
// import bg from '../../fakeData/image/bg.jpg'

import './TicketsDataShow.css'

const TicketsDataShow = (props) => {
    const { title, btn, price, tickteType} = props.ticket;
    console.log(props.ticket.title);
    return (
            <div className="box-main-container">
            <div className="box-container">
                <h2>{title}</h2>
                <Button className="btn-desing" variant="danger"><a href={`/destination/${tickteType}`}><FontAwesomeIcon icon={faShoppingCart} /> {btn}</a></Button>
                <hr/>
                <h4><FontAwesomeIcon icon={faDollarSign} /> {price}</h4>
            </div>
        </div> 
    );
};

export default TicketsDataShow;