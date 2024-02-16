import './App.css';
import Main from './components/Main';
import DocSidebar from './components/DocSidebar';
import Accordion from './components/Accordion';

function App() {
  return (
     <div className='setting-page'>
      <DocSidebar/>
      <Main/>
      {/* <Accordion  text={'General'} subtext={'Choose the Name of the Broadcast'} /> */}
     </div>
  );
}

export default App;
