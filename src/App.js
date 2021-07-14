import './App.module.css';
import Header from './Header';
import Container from './Container/Container';

const labels =[
  {key:'1',id:'1',label:'About Us'},
  {key:'2',id:'2',label:'Home'},
  {key:'3',id:'3',label:'Our clients'},
  {key:'4',id:'4',label:'Products'},
  {key:'5',id:'5',label:'Contact Us'},
  
];  
function App() {
  return (
    
    <div className="App">
      <Header labels={labels}/>
      <Container labels={labels}/>
    </div>
  );
}

export default App;
