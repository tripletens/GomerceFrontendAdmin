import React from 'react'
import { Logos } from './brandPop';

const ModalProp = ({containerClick}) => {
  return (
   <div className = 'modal-content' onClick ={e => e.stopPropagation()}>
   <div> 
   <input type='search' placeholder='Search' className='inp-modal'/> 
   </div>

   {
     Logos.filter(logo=>logo.id<= 6).map(mod=>
     {
        const {img,id, amount,name} = mod
        return(
<div key={id} className='brands-modal'>
  <img className='img-modal' src={img} alt ='brand logo'/>
  <div>
  <p>{name}</p>
  <span> Lorem Ipsum ...</span>
  </div>
  <input  type='checkbox'/>
</div>
        )
     })
   }

   <div className='modal-btns'>
<button onClick={containerClick}>Cancel</button>
<button>Add Brand</button>

   </div>
   </div>
 )
}

export default ModalProp