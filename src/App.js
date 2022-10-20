import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [people, setPeople] = useState(data)

  const birthdays = people.map(person => {
    return <List person={person} key={person.id}/>
  })

  return <main className= {darkMode ? 'dark' : ""}>

      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        
        <div>
          {birthdays}
        </div>

        <button onClick={() => setPeople([])}>Clear All</button>

        <div className='toggler' onClick={() => setDarkMode(prev => !prev)}> 
            <div  className='slider'></div>
        </div>
      </section>
  </main>
}

export default App;
