import React, { useContext } from 'react'
import { PizaaContext } from './PizzContext';

export default function FinalShow() {
    let {Dough,sauce,cheese,add}=useContext(PizaaContext);


  return (
    <>
   
    <div className="all py-5">
    <div >
<h2 >This is the final look I chose</h2>
<p>Please confirm your order</p>
</div>
    <div className="base d-flex justify-content-center py-5">
    
    <div className="pase">

              <img src="1.png" alt="" />
              <div className="inbase z-200 tenn">
              <img src={cheese} alt="" />

              </div>
              <div className="inbase z-100 ten">
              <img src={sauce} alt="" />

              </div>
              <div className="inbase z-300 siz">
              <img src={add} alt="" />

              </div>

              </div>
    </div>
    </div>
  </>
  )
}
