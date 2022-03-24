import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
class InfoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fname: '',
      lname: '',
      age:'',
      nation:'Australian',
      dis:'No'
    };
    this.handlechange = this.handlechange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handlechange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  handlesubmit(e){
    e.preventDefault();
    if(this.props.type === 'special'){
      alert(`Hello, ${this.state.fname} ${this.state.lname}\nYour nationality is ${this.state.nation}\nYour Disability is ${this.state.dis}`)
    }
    else if(this.props.type === 'normal'){
      alert(`Hello, ${this.state.fname} ${this.state.lname}\nYour age is ${this.state.age}`);
    }
    else{
      alert('Sorry, WE UNDER DEVELOPMENT');
    }
  }
  render(){
    return(
      <form onSubmit={this.handlesubmit}>
        <label htmlFor='firstname'>First Name: 
          <input name="fname" type="text" value={this.state.fname} onChange={this.handlechange}></input>
        </label><br />
        <label htmlFor='lasttname'>Last Name: 
          <input name="lname" type="text" value={this.state.lname} onChange={this.handlechange}></input>
        </label><br />
        <label htmlFor='age'>Age: 
          <input name="age" type="text" value={this.state.age} onChange={this.handlechange}></input>
        </label><br />
        {this.props.type === 'special' && 
          <>
            <label htmlFor='nationality'> Pick your nationality:
              <select name="nation" value={this.state.nation} onChange={this.handlechange}>
                <option value="Australian">Australian</option>
                <option value="Japanese">Japanese</option>
                <option value="Thai">Thai</option>
              </select>
            </label><br />
            <label htmlFor='Disability'>Disability:
              <select name="dis" value={this.state.dis} onChange={this.handlechange}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
              </select>
            </label><br />
          </>
        }
        <button type='submit'>submit</button>
      </form>
    )
  }
}
ReactDOM.render(<InfoForm type="normal" />,document.getElementById('root'));

//reportWebVitals();
