import { useState } from 'react'


function useCustomHook() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState( 10);

    const handleClick = () => {
        setCount(count + 1)
    }
    const handleClick2 = () => {
        setCount2(count2 - 1)
    }


    return {
        count,
        count2,
        handleClick,
        handleClick2

    }
}

export default useCustomHook;