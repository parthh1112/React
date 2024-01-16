/* eslint-disable no-unused-vars */

// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {

//     const [data, setData] = useState({})

//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//             .then((res) =>
//                 res.json()
//             )
//             .then((data) =>
//                 setData(data[currency])
//             )
//         console.log(data);
//         return data
//     }, [currency])
// }



// export default useCurrencyInfo













import { useEffect, useState } from "react"
function useCurrencyInfo(currency) {
    let [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((resData) => resData.json())
            .then((curdata) => setData(curdata[currency]))
    }, [currency]) 
    return data
}
export default useCurrencyInfo;
 