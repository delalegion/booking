import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import grid from '../../../hoc/grid';

const SeatBox = styled.div`
    padding: 10px; 
    grid-area: ${props => props.grid};
    background-color: white;
    color: ${props => props.reserved ? "white" : "#FA0364"};

    ${props => props.reserved && css`
        background: #C482FA !important;
    `}
    ${props => props.selected && css`
        background: #FA0364 !important;
        color: white;
    `}
    ${props => props.offer && css`
        background: #0FD2FF;
        color: white;
    `}

    font-size: 16px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        background-color: #b9c5d2;
        color: #fff;
        transition: all 0.2s ease;
    }
`;

const Seat = (props) => {

    const dispatch = useDispatch();
    const selected = useSelector(state => state.selected);
    const offer = useSelector(state => state.offer);

    const id = props.about.id.slice(1);

    const newDispatch = (data, reserved, selected) => {
        if (!reserved) {
            dispatch({ type: "selected", data });
        }
        if (selected) {
            dispatch({ type: "unselected", data });
        }
    }

    const ifSelected = selected.includes(props.index);
    const ifOffer = offer.includes(props.about.id);

    return (
        <>
            <SeatBox id={id} grid={props.about.id} offer={ifOffer} selected={ifSelected} reserved={props.about.reserved} key={props.about.id} onClick={() => newDispatch(props.index, props.about.reserved, ifSelected)}>
                {props.about.reserved ? <s>{props.about.id}</s> : <p>{props.about.id}</p>}
            </SeatBox>
        </>
    );
}

export default grid(Seat);