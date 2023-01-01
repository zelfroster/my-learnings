{/* import { useState } from 'react' */ }
{/* import reactLogo from './assets/react.svg' */ }
{/* import { Component } from 'react' */}
import { useState, useEffect } from 'react';
import './App.css'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  //useState Hook gives us two values (variable, function) = [value, setValue]
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    {/* console.log('effect fired'); */}
    // only fired once because no dependency passed
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    {/* console.log('effect fired'); */}
    // fired whenever monsters or searchField changes
    const newFilteredMonsters = monsters.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className={'monsters-search-box'}
        placeholder={'search monsters'}
        onChangeHandler={onSearchChange}
      />
      <div className="card">
        <CardList monsters={filteredMonsters} />
      </div>
    </div>
  )
}

//class App extends Component {
//  constructor() {
//    super();
//    {/* this.state = { */ }
//    {/*   name: { firstName: 'Sumit', lastName: 'Kumar Soni' }, */ }
//    {/*   os: 'Linux' */ }
//    {/* } */ }
//
//    this.state = {
//      monsters: [],
//      searchField: ''
//    };
//    {/* console.log('1') // constructor runs first */ }
//  }
//
//  // componentDidMount is used to mount data from api asa the app is rendered
//  componentDidMount() {
//    {/* console.log('3') // after rendering component mounting happens */ }
//    fetch('https://jsonplaceholder.typicode.com/users')
//      .then((response) => response.json())
//      .then((users) => this.setState( // state changes and re-render happens
//        () => {
//          return { monsters: users };
//        },
//        () => {
//          console.log(this.state);
//        }
//      ));
//  }
//
//  onSearchChange = (e) => {
//    const searchField = e.target.value.toLocaleLowerCase();
//    this.setState(() => {
//      return { searchField }
//    })
//  }
//
//  render() {
//    {/* console.log('2') // then react renders the page */ }
//
//    const { monsters, searchField } = this.state;
//    const { onSearchChange } = this;
//
//    const filteredMonsters = monsters.filter((item) => {
//      return item.name.toLocaleLowerCase().includes(searchField)
//    })
//
//    return (
//      <div className="App">
//        <h1 className="app-title">Monsters Rolodex</h1>
//        <SearchBox
//          className={'monsters-search-box'}
//          placeholder={'search monsters'}
//          onChangeHandler={onSearchChange}
//        />
//        <div className="card">
//          <CardList monsters={filteredMonsters} />
//        </div>
//
//        {/* --- --- Old Code --- --- */}
//        {/* <div className="card"> */}
//        {/*   <p> */}
//        {/*     Hello {this.state.name.firstName} {this.state.name.lastName}, I love */}
//        {/*     to use {this.state.os} */}
//        {/*   </p> */}
//        {/*   <button */}
//        {/*     //First Approach to change state */}
//        {/*     //onClick={() => {  */}
//        {/*     //  this.setState({ name: {firstName: 'Zel', lastName: 'Froster'} }) */}
//        {/*     //  console.log(this.state)  */}
//        {/*     //  The console.log won't log the updated state because the setState */}
//        {/*     //  is an asynchronous call so state might not be updated till the */}
//        {/*     //  console.log is run and older state will be logged in the console */}
//        {/*     //}} */}
//        {/**/}
//        {/*     //Second Approach - The Optimal Way */}
//        {/*     onClick={() => { */}
//        {/*       this.setState(() => { */}
//        {/*         return { */}
//        {/*           name: { firstName: 'Zel', lastName: 'Froster' } */}
//        {/*         } */}
//        {/*       }, () => { */}
//        {/*         console.log(this.state.name) */}
//        {/*       }) */}
//        {/*       // Here, the changing of state and console.log after that are done */}
//        {/*       // in a callback function so once the state is changed only then */}
//        {/*       // the console.log is run and updated value will be logged */}
//        {/*     }} */}
//        {/*   > */}
//        {/*     Change Name */}
//        {/*   </button> */}
//        {/* </div> */}
//
//      </div>
//    )
//  }
//}

export default App
