import React from 'react'
import Component from './Component'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div className="home   d-flex align-items-center">
      <div className="mx-5">
      <h1>Welcome to our pizza restaurant </h1>
      <p>We have all kinds of pizza, with all kinds of cheese and other ingredients</p>

      </div>
      <img src="pizaa.jpg" alt="" className='pizaa mt-5 me-4' />
    </div>
<Outlet/>

    </>  )
}
