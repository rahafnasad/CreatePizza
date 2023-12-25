import React, { useContext, useState } from 'react'
import { PizaaContext } from './PizzContext';
import { Link } from 'react-router-dom';

export default function Final() {
    let {Dough,sauce,cheese,setUserAdd}=useContext(PizaaContext);


    let [choose, setChoose] = useState("");
    const getChoose=(num)=>{
      setUserAdd(`${num}.png`)
      setChoose(`${num}.png`)
    }
  return (
    <>
    
    <div className="all">
    <div >
<h2 >Choose the pizza you want</h2>
<p>Choose the type of add-ons you want to add</p>
</div>
    <div className="base d-flex">
      <div className="circleMap">
        <div className="circleMap__items top">
          <img src="5.png" onClick={()=>getChoose(5)} />
          <div className="circleMap__items--text">
            First image of the circle <br /> and{" "}
            <span className="yl">Color Changes</span>
          </div>
        </div>
        <div className="circleMap__items left">
          <img src="6.png" onClick={()=>getChoose(6)}/>
          <div className="circleMap__items--text">
            Left side image of the
            <br />
            circle and
            <span className="vl">color change</span>
          </div>
        </div>
        <div className="circleMap__items bottom">
          <img src="7.png" onClick={()=>getChoose(7)}/>
          <div className="circleMap__items--text">
            Bottom side image of the circle
            <span className="rd">color change</span>
          </div>
        </div>
        <div className="circleMap__items right">
          <img src="10.png" onClick={()=>getChoose(10)} />
          <div className="circleMap__items--text">
            Right side image of the circle
            <br />
            and
            <span className="cb">color change</span>
          </div>
        </div>

        <div className="circleMap__items center">
          <img src="1.png" />
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
              {console.log(cheese)}
              <div className="inbase z-200">
              <img src={cheese} alt="" />

              </div>
              <div className="inbase z-100 four">
              <img src={sauce} alt="" />

              </div>
              <img src="plus.png" alt="" className="pluse" />
              <img src={choose} alt="" />
              </div>

            </div>
            <div className="mt-5 out">
              <div className="pase">
              <img src="equal.png" alt="" className="eaual " />

              <img src="1.png" alt="" />
              {console.log(cheese)}
              <div className="inbase z-200">
              <img src={cheese} alt="" />

              </div>
              <div className="inbase z-100 siz">
              <img src={sauce} alt="" />

              </div>
              <div className="inbase z-300">
              <img src={choose} alt="" />

              </div>

              </div>


            </div>
          </div>
        </div>
        <Link to={'/filalShow'}> the final pizza</Link>
  
      </div>
    </div>
    </div>
  </>
  )
}
