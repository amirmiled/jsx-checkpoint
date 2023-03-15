
import './App.css';
import Adresse from './component/profile/Adresse';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <FullName/>
      <ProfilePhoto/>
      <Adresse/>
    </div>
  );
}

export default App;
