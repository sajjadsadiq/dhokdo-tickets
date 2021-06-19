import React, { useEffect, useState } from 'react';
import './TicketsDataLoad.css'
import fakeData from '../../fakeData/TicketsData.json'
import TicketsDataShow from '../TicketsDataShow/TicketsDataShow';


const TicketsDataLoad = () => {
    const [tickets, setTickets] =useState([]);
    useEffect(() => {
        setTickets(fakeData)
    } , [])
    return (
        <div>
            {
                tickets.map(ticket =><TicketsDataShow ticket={ticket}></TicketsDataShow>)
            }
        </div>
    );
};

export default TicketsDataLoad;