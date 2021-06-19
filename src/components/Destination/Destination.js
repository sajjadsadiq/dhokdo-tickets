import React from 'react';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import './Destination.css'
// import image from '../../fakeData/image/map.png'
import Map from '../Map/Map';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useEffect } from 'react';

const Destination = (props) => {
    console.log(props);
    document.title ="DhokDo - Your Destination Location";
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {destination} = useParams();

    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [date, setDate] = useState()
    console.log(from, to, date, setLoggedInUser);

    const handelPicBtn = () => {
      const picBtn = loggedInUser.price;
      console.log(picBtn);
    }

    useEffect(()=>{
        
    },[])
    return (
        <div className="App">
            <h1>Enjoy Travel, Welcome Your Destination Location! <strong className="paramsTitle">{destination}</strong></h1>
            <br/> <br/>
            <div className="destination-container">
                <div className="left-pick">
                    <p className="pickTitle">Pick From</p>
                    <input onBlur={event => setFrom(event.target.value) } placeholder="From" type="text"/>
                    <p className="pickTitle">Pick To</p>
                    <input onBlur={event => setTo(event.target.value) } placeholder="To" type="text"/>
                    <p className="pickTitle">Date/Time</p>
                    <input onBlur={event => setDate(event.target.value) } type="date" id="birthday" ></input>
                    <br/>
                    <Button onClick={handelPicBtn} variant="danger" className="pickBtnDesing">Search</Button>
                </div>
                <div className="right-map">
                    {/* <img className="img-map" src={image} alt=""/> */}
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default Destination;