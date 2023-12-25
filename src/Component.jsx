import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PizaaContext } from "./PizzContext";

export default function Component() {
let {setUserDough,setUsersauce,Dough,sauce}=useContext(PizaaContext);
  let [choose, setChoose] = useState("");
  const getChoose=(num)=>{
    setUserDough('1.png')
    setUsersauce(`${num}.png`)
    setChoose(`${num}.png`)
   

  }

  return (
    <>
    <div className="all pb-5">
<div >
<h2 >Choose the pizza you want</h2>
<p>Choose the sauce you want to put on top of the dough</p>
</div>
    <div className="base d-flex mt-5 mx-5">
        <div className="circleMap">
          <div className="circleMap__items top">
            <img src="2.png" onClick={()=>getChoose(2)} />
            <div className="circleMap__items--text">
             sauce is green and consists of <br /> 
              <span className="yl"> green ingredients</span>
            </div>
          </div>
          <div className="circleMap__items left">
            <img src="4.png" onClick={()=>getChoose(4)}/>
            <div className="circleMap__items--text">
            sauce is orange and consists of
              <br />
              circle and
              <span className="vl"> green ingredients</span>
            </div>
          </div>
          <div className="circleMap__items bottom">
            <img src="3.png" onClick={()=>getChoose(3)}/>
            <div className="circleMap__items--text">
            sauce is red and consists of
              <span className="rd"> Red ingredients</span>
            </div>
          </div>
          <div className="circleMap__items right">
            <img src="9.png" onClick={()=>getChoose(9)} />
            <div className="circleMap__items--text">
            sauce is yellow and consists of
              <br />
              and
              <span className="cb"> Yellow ingredients</span>
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
                <img src="1.png" className="mx-5" />
                <img src="plus.png" alt="" className="pluse mx-5" />
                <img src={choose} className="mx-5" />
              </div>
              <div className="mt-5 out">
                <div className="pase">
                <img src="equal.png" alt="" className="eaual me-5 " />

                <img src="1.png" alt="" />
                <div className="inbase z-100 one">
                <img src={choose} alt="" />

                </div>

                </div>


              </div>
            </div>
          </div>
  
          <Link to={'/cheese'}> Go to choose the type of cheese</Link>

        </div>
      </div>
    </div>
   
    </>
  );
}
