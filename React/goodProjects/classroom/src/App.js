import './App.css';
import ReactRouterSetup from './react_router';
import { PeerProvider } from './Components/peer';

function App() {
  return (
    <PeerProvider>
      <ReactRouterSetup/>
    </PeerProvider>
  );
}

export default App;
