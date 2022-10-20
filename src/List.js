import React from 'react';

const List = ({person}) => {
  const {id, name, image, age} = person;
  return (
      <article className='person'>
          <img src={image}></img>
          <div>
            <h4>{name}</h4>
            <p>{age} years old</p>
          </div>
      </article>
    )
  
}
export default List;
