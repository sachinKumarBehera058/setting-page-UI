import './App.css';
import Main from './components/Main/Main';
import DocSidebar from './components/DocSidebar/DocSidebar';
import TemplateContainer from './components/TemplateContainer/TemplateContainer';

function App() {
  return (
     <div className='setting-page'>
      <DocSidebar/>
      <TemplateContainer/>
     </div>
  );
}

export default App;
