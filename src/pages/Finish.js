import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from "styled-components";

const Box = styled.section`
    padding: 35px;
    display: flex;
    background: #fff;
    flex-direction: column;
    max-width: 550px;
    width: 100%;

    & > div > p {
        padding: 10px;
        background: #C482FA;
        color: white;
        font-size: 1.5em;
        margin-bottom: 0.4em;
        font-weight: 600;
    }
    & > div {
        margin-bottom: 40px;
    }
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Finish = () => {

    const location = useLocation()
    const { selected } = location.state;

    const data = useSelector(state => state.seats);

    const convert = [];

    selected.forEach((seat) => {
        const word = data[seat].id.substring(1);
        convert.push(word);
    })

    return(
        <>
        <Container>
            <Box>
                <h1>Twoja rezerwacja przebiegła pomyślnie! 🙌</h1>
                <h3>Wybrałeś miejsca:</h3>
                <div>
                    {convert.map((seat) => {
                        return <p key={seat}>{"miejsce x" + seat[0] + ", rząd y" + seat[1] + " (id: s" + seat + ")"}</p>
                    })}
                </div>
                <h3>Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.</h3>
            </Box>
        </Container>
        </>
    );
}

export default Finish;