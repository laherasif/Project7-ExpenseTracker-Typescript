import React from 'react';
import Home from './componentes/Home/Home'
import Header from './componentes/Home/Header/Header'
import { Provider } from './componentes/UseContext/Context';
// import Footer from './componentes/Home/Footer/Footer';
import { Balance } from './componentes/Home/Balance';
import { ExpenseList } from './componentes/Home/ExpenseList';
import { BalanceList } from './componentes/Home/BalanceList';




const App: React.FC = () => {
 
  return (
    <Provider>
    <React.Fragment>

    <div className="container">
        <div className="app-wrapper">
        <Header/>
        <Balance/>
        <BalanceList/>
        <ExpenseList/>
        <Home/>
      
       
      
      </div>
      </div>

    </React.Fragment>
    </Provider>
  );
}

export default App;
