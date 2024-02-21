import './App.css';
import Main from './components/Main/Main';
import DocSidebar from './components/DocSidebar/DocSidebar';

function App() {
  return (
     <div className='setting-page'>
      <DocSidebar/>
      <Main/>
     </div>
  );
}

export default App;
