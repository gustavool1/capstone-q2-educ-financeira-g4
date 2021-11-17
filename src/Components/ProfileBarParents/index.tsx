import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ActivitiesContext } from '../../Providers/Activities'
import { ProfileContainer } from './style'
import profile from '../../assets/images/iconProfile.jpg'
import { UserContext } from '../../Providers/Users'
import { ModalContext } from '../../Providers/Modal'

const ProfileBarParents = () => {
    const { getAmountToPay, amountToPay } = useContext(ActivitiesContext)
    const { getUserData, userData } = useContext(UserContext)
    const { handleEditingProfile } = useContext(ModalContext)
    useEffect(() => {
        getAmountToPay()
        getUserData()
        console.log(userData)
    }, [])

    return (
        <ProfileContainer>
            <div className='profideDescription'>
                <img src={profile} alt='profile face'/>
                <h1>{userData.name}</h1>
                <button onClick={handleEditingProfile}><p>Editar Perfil</p>   </button>             
            </div>
            <p>A pagar R${amountToPay.toFixed(2)}</p>
        </ProfileContainer>
    )
}

export default ProfileBarParents
