import './App.css';
import Main from './Main';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
  return (
    <div className="App">
      <TonConnectUIProvider
        actionsConfiguration={{
          skipRedirectToWallet: 'ios'
        }}
        manifestUrl={
          'https://raw.githubusercontent.com/sepezho/burton-tonconnect-config/main/config.json'
        }>
        <Main />
      </TonConnectUIProvider>
    </div>
  );
}

export default App;
