import React from 'react'

const Number= [1, 2,3,4,5,6]

const deleteItem =(a)=>{
    const finalData = data.filter((curEle,index)=>{
        return index !== a;
    })
    setData(finalData)
}