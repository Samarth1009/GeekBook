import { Avatar } from '@material-ui/core'
import React from 'react'
import './Profile.css'


const Profile = () => {
    return (
        <div className='profile_container' >
            <div className='dp_container'>
                <Avatar variant='square' ClassName='profile_avatar' />
                <span className='profile_name'>Shashwat Kushwaha</span>
            </div>
            <hr className='dp_line' />
            <div className='profile_information_container'>
                <span className='profile_information_item'>Username:</span><hr className='profile_information_line'></hr>
                <span className='profile_information_item'>Country:</span><hr className='profile_information_line'></hr>
                <span className='profile_information_item'>State:</span><hr className='profile_information_line'></hr>
                <span className='profile_information_item'>City:</span><hr className='profile_information_line'></hr>
                <span className='profile_information_item'>Profession:</span><hr className='profile_information_line'></hr>
                <span className='profile_information_item'>Institution:</span>
            </div>
            <hr className='dp_line'></hr>
            <div className='profile_skills'>
                <span className='profile_skills_heading'>SKILLS</span>
            </div>

        </div>





    )
}
export default Profile