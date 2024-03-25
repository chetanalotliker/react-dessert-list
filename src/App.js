import './App.css';
import DessertList from './components/DessertList';

const dessertList = [
  {
    id: 1,
    name: 'Cake',
    calorie: '200 cal'
  },
  {
    id: 2,
    name: 'French Fries',
    calorie: '300 cal'
  },
  {
    id: 3,
    name: 'Pudding',
    calorie: '170 cal'
  },
  {
    id: 4,
    name: 'Gulab Jamun',
    calorie: '450 cal'
  }
]

function App() {
  return (
    <div className="App">
      <DessertList listdata={dessertList} />
      <a href="https://chetanalotliker.github.io/learn-html-css-javascript/menu-bootstrap.html">Visit Menu</a>
      <br />
      <a href="https://stargold-shine-portfolio.netlify.app/">Portfolio</a>
    </div>
  );
}

export default App;
