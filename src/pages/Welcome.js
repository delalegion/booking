import styled from 'styled-components';
import { Button, InputNumber, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;
const Main = styled.main`
    display: flex;
    padding: 50px;
    background: white;
    width: 100%;
    max-width: 600px;
    flex-direction: column;
`;
const InputSeats = styled.div`
    display: flex;
    margin-top: 20px;
    font-size: 1.4em;
    align-items: center;
    margin-bottom: 20px;

    & > div {
        margin-left: 15px;
        background: #E8EDF3;
        border: 0px;
        padding: 7px;

        &:focus {
            background: #C482FA;
            color: white;
        }
    }
`
const CheckboxStyled = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;  

const Welcome = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "clear" })
    }, [dispatch])

    const choose = () => {
        const seats = document.querySelector("#input-seats").value;
        const checkbox = document.querySelector("#input-check").checked;

        dispatch({ type: "user-seats", data: seats });
        dispatch({ type: "user-checkbox", data: checkbox });
    }

    return (
        <>
        <Container>
            <Main>
                <h1>Witaj w aplikacji do rezerwacji miejsc 👋</h1>
                <InputSeats>Liczba miejsc: <InputNumber size="large" min={1} max={100000} defaultValue={1} id="input-seats" /></InputSeats>
                <CheckboxStyled>
                    <Checkbox id="input-check">Czy miejsca mają być obok siebie?</Checkbox>
                </CheckboxStyled>
                <a href="/home">
                    <Button type="primary" onClick={() => choose()}>Wybierz miejsca</Button>
                </a>
            </Main>
        </Container>
        </>
    )
}

export default Welcome;