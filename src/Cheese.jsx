import React, { useContext, useState } from 'react'
import { PizaaContext } from './PizzContext';
import { Link } from 'react-router-dom';

export default function Cheese() {
    let {Dough,sauce,setUserCheese}=useContext(PizaaContext);
   

    let [choose, setChoose] = useState("");
    const getChoose=(num)=>{
      setChoose(`${num}.png`)
      setUserCheese(`${num}.png`)
    }
  return (
    <>
     
   <div className="all pb-5">
   <div >
<h2 >Choose the pizza you want</h2>
<p>Choose the type of cheese you want to add</p>
</div>
   <div className="base d-flex">
      <div className="circleMap">
        <div className="circleMap__items top">
          <img src="13.png" onClick={()=>getChoose(13)} />
          <div className="circleMap__items--text">
            First image of the circle <br /> and{" "}
            <span className="yl">Color Changes</span>
          </div>
        </div>
        <div className="circleMap__items left">
          <img src="14.png" onClick={()=>getChoose(14)}/>
          <div className="circleMap__items--text">
            Left side image of the
            <br />
            circle and
            <span className="vl">color change</span>
          </div>
        </div>
        <div className="circleMap__items bottom">
          <img src="15.png" onClick={()=>getChoose(15)}/>
          <div className="circleMap__items--text">
            Bottom side image of the circle
            <span className="rd">color change</span>
          </div>
        </div>
        <div className="circleMap__items right">
          <img src="16.png" onClick={()=>getChoose(16)} />
          <div className="circleMap__items--text">
            Right side image of the circle
            <br />
            and
            <span className="cb">color change</span>
          </div>
        </div>

        <div className="circleMap__items center">
          <img src="111.png" />
          <div className="circleMap__items--text">
            Center of the circle
            <br /> and
            <span className="yl">color change</span>
          </div>
        </div>
      </div>
      <div className="finalChoise ms-5">
        <div className="choose">
          <div className="d-flex flex-column">
          <div className="mb-5">
          <div className="pase">

                <img src="1.png" alt="" />
                <div className="inbase z-100 tow">
                <img src={sauce} alt="" />

                </div>
                <img src="plus.png" alt="" className="pluse mx-5" />
                <img src={choose} className="mx-5" />
                </div>


               
              </div>
            <div className="mt-5 out">
              <div className="pase">
              <img src="equal.png" alt="" className="eaual " />

              <img src="1.png" alt="" />
              <div className="inbase z-200">
              <img src={choose} alt="" />

              </div>
              <div className="inbase z-100 three">
              <img src={sauce} alt="" />

              </div>

              </div>


            </div>
          </div>
        </div>
        <Link to={'/final'}> Choose add-ons</Link>
  
      </div>
    </div>
   </div>
  </>
  )
}
