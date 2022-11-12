import React from 'react'
import ModalProp from './modalProp';

//Reusable Model - can restructure and prop the content for use
// containerClick - function prop for hiding modal.
const ReusableModal = ({containerClick}) => {

  return (
<div className = 'modal-container' onClick={containerClick}>
<ModalProp containerClick={containerClick} />
    </div>
  )
}

export default ReusableModal