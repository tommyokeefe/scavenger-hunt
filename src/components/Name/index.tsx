import React, { useEffect, useState } from "react";
import './index.css'

const Name = () => {
    const [ name, setName ] = useState('')

    const saveName = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = e.target as HTMLFormElement
      const formData = new FormData(form);
      const name = formData.get("name") as string;
      setName(name)
      localStorage.setItem('name', name)
    }

    const resetName = () => {
      localStorage.setItem('name', '')
      setName('')
      console.log('reset name!')
    }

    useEffect(() => {
      const name = localStorage.getItem('name')
      if (name) {
        setName(name)
      }
    }, [])

    return (
      name ?
        <>
          <h2>Hi {name}!</h2>
          <button className="nb-button green" type="submit">🚀 Start the Game! 🚀</button>
          <button className="nb-button orange" onClick={resetName}>Reset Name</button>
        </>
      :
        <form onSubmit={saveName}>
          <label htmlFor="name">Tell me your name to get started!</label>
            <input className="nb-input default"  name="name" placeholder="your name" />
            <button className="nb-button blue" type="submit">👍</button>
        </form>
    );
  }

  export default Name
