import Seats from '../components/Seats/Seats';
import { useDispatch, useSelector } from 'react-redux';
import grid from '../hoc/grid';
import { useEffect } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = styled.section`
    display: flex;
    padding: 20px;
    width: 100%;
    justify-content: center;
`
const FooterButton = styled(Button)`
    padding: 30px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 210px;
    justify-content: center;
    font-size: 1.5em;
    font-weight: 600;
    margin-left: 50px;
`
const Legend = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;

    & > div {
        padding: 10px;
        background: #fff;
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
    & > .box-free {
        background: #fff;
    }
    & > .box-reserved {
        background: #C482FA;
    }
    & > .box-selected {
        background: #FA0364;
    }
    & > .box-offer {
        background: #0FD2FF;
    }
`

const Home = (props) => {

    const dispatch = useDispatch();

    const data = useSelector(state => state.seats);
    let selected = useSelector(state => state.selected);
    const userSeats = useSelector(state => state.userSeats);
    const userCheckbox = useSelector(state => state.userCheckbox);

    /** Reservation */
    const changeReserved = () => {
        selected.forEach((index) => {
            data[index].reserved = true;
            dispatch({ type: "clear" });
        })
    }

    const index = [];
    const indexNum = [];
    const rows = [];
    let offer = [];

    for (let i=0;i<data.length;i++) {
        index.push(data[i].id);
    }
    props.gridAll.forEach((seat) => {
        indexNum.push(index.indexOf(seat));
    })
    for (let i=0;i<indexNum.length;i++) {
        rows.push(data[indexNum[i]]);
    }
    rows.forEach((seat) => {
        if (seat !== undefined) {
            if (offer.length < userSeats) {
                if (userCheckbox === "true") {
                    if (seat.reserved === false) {
                        offer.push(seat.id);
                    } else { offer = []; }
                } 
                if (userCheckbox === "false") {
                    if (seat.reserved === false) {
                        offer.push(seat.id);
                    }
                }
            }
        }
    })

    useEffect(() => {
        if (offer.length > 0) {
            dispatch({ type: "offer", data: offer })
        }
    })

    return (
        <>
            <Seats data={data} />
            <Footer>
                <Legend><div className="box-free"></div> Wolne miejsce</Legend>
                <Legend><div className="box-reserved"></div> Miejsce zarezerwowane</Legend>
                <Legend><div className="box-selected"></div> Twój wybór</Legend>
                <Legend><div className="box-offer"></div> Propozycja rezerwacji</Legend>
                <Link to={{
                    pathname: "/finish",
                        state: {
                        selected: selected,
                    },
                }}>
                    <FooterButton type="primary" onClick={() => changeReserved()}>Rezerwuj</FooterButton>
                </Link>
            </Footer>
        </>
    )
}

export default grid(Home);