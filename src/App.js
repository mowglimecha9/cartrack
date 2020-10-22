import React from 'react';
import './App.css';
import Card from './components/Card';
import axios from 'axios';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      persons:[],
      search:''
    }
  }
  handleChange(event) {
    this.setState({search: event.target.value});
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        const persons = res.data;
        this.setState({ persons });
    })
  }
  render() {
    return (
    <div className="App">
      <input type='text' onKeyUp={(e)=>this.handleChange(e)}/>
      <ul className='cards'>
        { this.state.persons.filter(data => {
          if(this.state.search == null)
            return data
          else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.username.toLowerCase().includes(this.state.search.toLowerCase())){
              return data
          }
        }).map(person => <li  key={person.id.toString()} >
          <Card person={person}></Card>
        </li>)}

      </ul>
    </div>
  );
  }
}

export default App;
