import './App.css';
import Banner from './components/Banner/Banner';
// import Navbar from './components/Navbar/Navbar'

function App() {
  const onClick = () =>{
    console.log('press exit button');
  }
  return (
     <div className='setting-page'>
      {/* <Navbar templateName='Campaign Name'/> */}
      <Banner onClick={onClick}/>
     </div>
  );
}

export default App;
