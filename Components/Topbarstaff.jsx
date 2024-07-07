import React from 'react'

function Topbarstaff(props) {
    console.log("topbar", props.categories)
    console.log("topbar", props.setSelectedCategory)
    const handleCateSelection = (e) => {
        props.setSelectedCategory(e.target.value)
    }
    
    const handleSearch = () => {
        const search = document.querySelector('input').value;
        props.setSearch(search);
    }
  return (
    <div className='Topbar'>
        <select onChange={handleCateSelection}>
            <option>Select...</option>
            {props.categories.map((c) => <option value={c}>{c}</option>)} 
            
        </select><input type='text' placeholder='Search...' />
            <button type="submit" onClick={handleSearch}>Go</button>
      
    </div>
  )
}

export default Topbarstaff
