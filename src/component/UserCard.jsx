import React from 'react'

const UserCard = (props) => {
    console.log(props);
    
  return (
    <div>
        <img className='user-name'/>
        <h3 className=' font-semibold text-2xl'>{props.data.name.first}</h3>
        <p className=' text-xl'>{props.data.phone}</p>
        <p>{props.data.location.city} ,{props.data.location.state}</p>
    </div>
  )
}

export default UserCard
