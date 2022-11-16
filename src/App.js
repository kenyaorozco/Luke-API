import './App.css';
import {Routes, Route} from 'react-router-dom'
import Person from './components/Person';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <Form />
      <Routes>
        <Route path="/:type/:id" element={<Person />}/>
      </Routes>
    </div>
  );
}

export default App;
