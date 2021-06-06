import Seat from './Seat/Seat';
import Layout from '../Layout/Layout';
import React from 'react';

const Seats = (props) => {

    return (
        <>
            <Layout>
                {props.data.map((item, index) => {
                    return <Seat key={item.id} about={item} index={index} />
                })}
            </Layout>
        
        </>
    );
}

export default Seats;