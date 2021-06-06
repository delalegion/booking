import { useSelector } from 'react-redux';

const grid = (Wrapper) => {
    return (props) => {

        const data = useSelector(state => state.seats);

        const arrayX = [];
        const arrayY = [];
    
        data.forEach((item) => {
            arrayX.push(item.cords.x);
        })
        data.forEach((item) => {
            arrayY.push(item.cords.y);
        })
    
        const maxOfX = Math.max(...arrayX);
        const maxOfY = Math.max(...arrayY);
    
        const gridRow = [];
    
        for(var i=0;i<maxOfY+1;i++) {
            for(var p=0;p<maxOfX+1;p++) {
                const textRow = "s" + p + "" + i;
                gridRow.push(textRow);
            }
        }

        const gridRowArray = gridRow;
        const gridCopy = [...gridRow];

        function chunk(array, chunk) {
            const results = [];
    
            while(array.length) {
                results.push(array.splice(0, chunk));
            }
            return results;
        }
    
        const result = chunk(gridRowArray, 10);

        const fullArray = [];
        
        result.forEach((item) => {
            fullArray.push('"' + item.join(" ") + '"');
        })
    
        const newArray = fullArray.join(" ");

        return (
            <>
                <Wrapper {...props} gridArray={result} gridAll={gridCopy} rows={maxOfX} columns={maxOfY} stringGrid={newArray} />
            </>
        );
    }
}

export default grid;