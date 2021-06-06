import styled from 'styled-components';
import grid from '../../hoc/grid';

const GridStyled = styled.section`
    display: grid;
    padding: 50px;
    grid-template-columns: repeat(${props => props.rows+1}, 1fr);
    grid-template-rows: repeat(${props => props.columns+1}, 1fr);
    column-gap: 10px;
    row-gap: 15px;
    grid-template-areas: ${props => props.array};
`;

const Layout = (props) => {

    return (
        <>
            <GridStyled rows={props.rows} columns={props.columns} array={props.stringGrid}>{props.children}</GridStyled>
        </>
    );
}

export default grid(Layout);