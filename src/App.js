import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import  { actionCreators } from './state/index.js'



function App() {

const account = useSelector((state) => state.account)
const dispatch = useDispatch()

const { depositMoney, withdrawMoney  } = bindActionCreators(actionCreators, dispatch)



  return (
    <div className="App">
     <h1>{account}</h1>
     <button onClick={ depositMoney(1000) }>Deposit Money</button> 
     <button onClick={ withdrawMoney(200) }>Withdrawl Money</button>
    </div>
  );
}

export default App;
