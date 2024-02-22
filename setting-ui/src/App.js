import './App.css';
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
