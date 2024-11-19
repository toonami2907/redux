import React from 'react'
import { useGetProductByIdQuery } from '../libs/DummyData'
import { useParams } from 'react-router-dom'


const Spec = () => {
    const {id} = useParams()
    const {data, isError, isLoading} = useGetProductByIdQuery(id)
    console.log(data);
  return (
    <div>Spec</div>
  )
}

export default Spec