import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ActivitiesContext } from '../../Providers/Activities'
import { ProfileContainer } from './style'
import profile from '../../assets/images/iconProfile.jpg'
import { UserContext } from '../../Providers/Users'

const ProfileBarParents = () => {
    const { getAmountToPay, amountToPay } = useContext(ActivitiesContext)
    const { getUserData, userData } = useContext(UserContext)

    useEffect(() => {
        getAmountToPay()
        getUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ProfileContainer>
            <div className='profideDescription'>
                <img src={profile} alt='profile face'/>
                <h1>{userData.name}</h1>
                <Link to=''>Editar Perfil</Link>                
            </div>
            <p>A pagar R${amountToPay.toFixed(2)}</p>
        </ProfileContainer>
    )
}

export default ProfileBarParents
