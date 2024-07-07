import React from 'react'

function StaffCard(props) {
    const {name, photo, department, designation, years_of_experience, phone, email} = props.Products || {} //if no prod available
    // console.log(props.Products)
  return (
    <div className='staff-card1'>
      <img src={photo} height={150}/>
      <div className='name'>{name}</div>
      <div className='department'>{department}</div>
      <div className='designation'>{designation}</div>
      <div className='years_of_experience'>{years_of_experience}</div>
      <div className='phone'>{phone}</div>
      <div className='email'>{email}</div>
    </div>
  )
}

export default StaffCard
