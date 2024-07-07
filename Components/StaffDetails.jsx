import React from 'react'
import StaffCard from './StaffCard';
import Topbarstaff from './Topbarstaff';
import { useEffect, useState } from 'react';

const StaffDetails = () => {
    const [apires, setApires] = useState([]);
    const [List, setList] = useState([]);
    const [Categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        fetch('https://mocki.io/v1/59c3433a-2012-43a1-92d2-72804b469c2d')
            .then((res) => res.json())
            .then((json) => {
                setApires(json);
                setList(json);
                const c = json.map((obj) => obj.designation);
                setCategories([...new Set(c)]);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    console.log(selectedCategory);

    useEffect(() => {
        if(selectedCategory === '') {
            setList(apires);
        }else{
            const res = apires.filter((obj) => obj.designation === selectedCategory);
            setList(res);
        }

        },[selectedCategory]);
        useEffect(() => {
            if (search === '') {
              setList(apires);
            } else {
              const filteredList = apires.filter((obj) =>
                obj.name.toLowerCase().includes(search.toLowerCase()));
              setList(filteredList);
            }
          }, [search]);
    
    return (
        <>
            <Topbarstaff categories={Categories} setSearch={setSearch} setSelectedCategory={setSelectedCategory}/>
            <div className='product-list'>
                {List.map((product) => (
                    <StaffCard key={product.id} Products={product} />
                ))}
            </div>
        </>
    );
}

export default StaffDetails
