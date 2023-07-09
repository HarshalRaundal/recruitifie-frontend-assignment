import './App.css';

//  Importing dependencies for bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './components/home/Home';
import Background from './components/background/Background';
function App() {
  return (
    <div className="App ">
      <Background />

      <Home />
    </div>
  );
}

export default App;
