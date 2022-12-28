{/* import { Component } from "react"; */}
import './search-box.styles.css'

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <input
      type={`search-box ${className}`}
      className="search-box"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  )
}

//class SearchBox extends Component {
//  render() {
//    const { onChangeHandler, placeholder, className } = this.props;
//    return (
//      <input
//        type={`search-box ${className}`}
//        className="search-box"
//        placeholder={placeholder}
//        onChange={onChangeHandler}
//      />
//    )
//  }
//}
export default SearchBox
