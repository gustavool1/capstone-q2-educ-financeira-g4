import React from 'react'
import { Link } from 'react-router-dom'
import { ProfileContainer } from './style'

const ProfileBarParents = () => {

    return (
        <ProfileContainer>
            <h3>Name</h3>
            <Link to=''>Editar Perfil</Link>
        </ProfileContainer>
    )
}

export default ProfileBarParents
