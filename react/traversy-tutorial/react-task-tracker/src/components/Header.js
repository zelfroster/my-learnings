import PropTypes from 'prop-types'
import Button from './Button'

//Pass the prop in the function to use prop properties and values
//const Header = (props) => {
  //return (
    //<header>
      //<h1>Task Tracker</h1>
      //<h2>Hello {props.title}</h2>
    //</header>
  //)
//}

//Directly pass the prop object in braces that we want to display
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? '#ff4455' : '#11aa33'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

//If no props is passed it will render the default props
Header.defaultProps = {
  title: 'Task Tracker',
}

//We can define proptypes to declare the data type of the prop object
Header.propTypes = {
  title: PropTypes.string.isRequired, //Gives a warning in console but still renders
}

//We can use CSS in three ways in React

//1. Inline CSS
//const Header = ({ title }) => {
  //return (
    //<header>
      //<h1 style={{ color: 'red', backgroundColor: '#1E1E2E'}}>Task Tracker</h1>
      //<h2>Hello {title}</h2>
    //</header>
  //)
//}

//2. CSS in JS
//
//const Header = ({ title }) => {
  //return (
    //<header>
      //<h1 style={headingStyle}>Task Tracker</h1>
      //<h2>Hello {title}</h2>
    //</header>
  //)
//}
//const headingStyle = {
  //color: '#ff4455',
  //backgroundColor: '#111142'
//}
//
//3. External CSS

export default Header



//Doubts
//1. Why do we close imported tags with a /
