//custom hook has to start with "use"
//custom hook funciona como um a função comum
//ou seja serve para reutilizar uma lógica
//porém agora é possivel usar os hook do react dentro dessa função

import { useState, useEffect } from 'react';

const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(forwards){
                setCounter((prevCounter) => prevCounter + 1);
            }else{
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter
};

export default useCounter;
