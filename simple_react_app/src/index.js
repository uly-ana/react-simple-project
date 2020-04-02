import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Person = ({img,name,job,children}) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (
    <article className="person">
      <img src={url} 
      alt="person"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  )
}


const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="29" name= "Dan" job="developer" />
      <Person img="30" name="Tony" job="designer">
        <p>this is some additional info</p>
        </Person>
      <Person img="25" name="Mike" job="waiter" />
    </section>
  )
}



ReactDOM.render(<PersonList/>, document.getElementById('root'))
