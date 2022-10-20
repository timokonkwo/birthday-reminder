import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return (
    <div className='section'>
        <main className='main'>
          <div className='container'>
            <h3>24 birthdays today</h3>
              <div className='person'>
                <img src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg'/>
                <h4>Bertie Yates</h4>
                <p>29 years</p>
              </div>
              <button>View all</button>
          </div>
      </main>
    </div>
  )

}

export default App;
