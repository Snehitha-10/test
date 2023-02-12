import logo from './logo.svg';
import './App.css';
 import Abc from './second';

// import Abc from './second';

export function Abc1()
{
 return(
  <h1>hi</h1>
 ) ;
}
// function Ab()
// {
//   return (<h1>Timed out</h1>);
// }
function App(prop) {
  //props.name='adf'
  return (
    <div name='i'>
    <h1>welcome to {prop.vlp} Class{prop.name}</h1>
    <button onClick={a}>Click</button>
    <p>hello {prop.name}</p>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   <Abc></Abc>
    //   </header>
    // </div>
    // <img src="https://th.bing.com/th/id/OIP.XCDNOTmrvU_DKioT-1g_uQHaGl?pid=ImgDet&rs=1"></img>
  );
}

export default App;
