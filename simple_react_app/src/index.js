import React from 'react'
import ReactDOM from 'react-dom'

const Person = ({img,name,job,children}) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (
    <article>
      <img src={url} 
      alt="person"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
    </article>
  )
}


const PersonList = () => {
  return (
    <section>
      <Person img="29" name= "Dan" job="developer" />
      <Person img="30" name="Tony" job="designer" />
      <Person img="25" name="Mike" job="waiter" />
    </section>
  )
}



ReactDOM.render(<PersonList/>, document.getElementById('root'))
