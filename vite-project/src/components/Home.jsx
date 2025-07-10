import "./Home.css"
export default function Home({name, age}){
    let id = 234246767
    return (
      <>
      <h1 style={{backgroundColor:"orange"}}>Hello {name}.You are {age} years old</h1>
      <h2 className="App-Home-Header">Your student ID is {id}</h2>
      <p>This is a paragraph</p>
      </>
    );
  }