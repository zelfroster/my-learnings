import { useState } from 'react'
{/* const app = document.getElementById('app'); */}

/*
    function Header(props) {
      return (<h1>Develop. Preview. Ship. 🚀</h1>)
    }
    */

/*
    function Header(props) {
      return (<h1>{props.title} 🚀</h1>)
    }
    */

function Header({ title }) {
  return (<h1>{title ? title : 'Default title'} 🚀</h1>)
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [liked,setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked)
  }
  return (
    <div>
      <Header title="React Props"/>
      <Header title="Another One"/>

      <ul>
        {names.map((item) => <li key={item}>{item}</li>)}
      </ul>

      <button onClick={handleClick} style={{backgroundColor: liked ? '#ffaadd' : 'grey'}}>
        Like {liked ? '❤️ ' : ''}
      </button>
    </div>
  )
}

{/* ReactDOM.render(<HomePage />, app) */}
