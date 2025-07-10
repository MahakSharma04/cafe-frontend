// export default function Temp(){
//     const handleClick = () => {
//         alert("Button clicked!");
//     };

//     const handleSubmit = (name) =>{
//         alert(`Hello ${name}`);
//     };
//     return (
//         <div>
//         <button onClick={handleClick}>Click</button>
//         <button onClick={() => handleSubmit("John")}>Submit</button>
//         </div>
//     );
// }

import {useState} from 'react';
export default function Temp(){
        const [score, setScore] = useState(0);//variable and function(actual function is Score .set is just to make it more meaningful)
        const updateScore = () =>{
            setScore(score + 1);
        }
        const decrementScore = () =>{
            setScore(score -1);
        }
        return(<div>
        {score}
        <p>
            <button onClick={updateScore}>Update Score</button>
            <button onClick={decrementScore}>Decrement Score</button>
        </p>
        </div>
        );//rerender is not refresh // baki sab components will not rerender(rerender means just to show the updated value of the modified part not the whole components)
}