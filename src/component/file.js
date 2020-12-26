import React, { useEffect, useState } from 'react'


const File=({file})=>{

    const [data, setData]=useState({})
    useEffect(()=>{
        file.getMetadata().then((metadata)=>{
            setData(metadata)
        })
    }, [])

    const download=()=>{
        file.getDownloadURL().then((url)=>{
            console.log(url);
            window.open(url, '_blank')
        })
    }

    return (
        <div onClick={download}>{data.name}---{data.timeCreated}</div>
    )
}

export default File