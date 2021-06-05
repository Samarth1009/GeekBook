import { Avatar } from '@material-ui/core'
import React from 'react'
import './profile.css'


const profile = () => {
    return (
        <div className='profile_container' >
            <div className='dp_container'>
               <Avatar variant='square' ClassName='profile_avatar' />
               <h2 className='profile_name'>Shashwat Kushwaha</h2>  
            </div>
            <hr className='dp_line' /> 
            
            <div>

            </div>

        </div>
            
 

    )
}
export default profile