import React from 'react'

import Edit from '../logo/edit1.png'
import Delete from '../logo/trash.png'
import {Link} from "react-router-dom";
import Menu from "../components/Menu";
const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
          <img src='https://images.unsplash.com/photo-1558539158-25a07a51fd10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60' alt='image' />

        <div className='user'>
            <img src='https://imgs.search.brave.com/0I72jFKFN93nep-sLdbRpnR5pDKHZ0tQ_V_2GV6WRiE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/T1Rfc2FmemNYY3d4/Zm1PT0VpTHVBSGFI/YSZwaWQ9QXBp' alt='use image' />

        <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
        </div>
            <div className='edit'>
                <Link to={`/write?edit=2`}>
                    <img src={Edit} alt='' />
                </Link>
                <img src={Delete} alt='' />
            </div>
        </div>
          <h1>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br /><br/> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. <br /> <br/> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. </p>

      </div>
      <Menu />
    </div>
  )
}

export default Single