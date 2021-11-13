import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ActivitiesContext } from '../../Providers/Activities'
import { ProfileContainer } from './style'
import profile from '../../assets/images/iconProfile.jpg'
import { UserContext } from '../../Providers/Users'

const ProfileBarParents = () => {
    const { getAmountToPay, amountToPay } = useContext(ActivitiesContext)
    const { UserName } = useContext(UserContext)

    useEffect(() => {
        getAmountToPay()
    }, [])

    return (
        <ProfileContainer>
            <div className='profideDescription'>
                <img src={profile} alt='profile face'/>
                <h1>{UserName}</h1>
                <Link to=''>Editar Perfil</Link>                
            </div>
            <p>A pagar R${amountToPay.toFixed(2)}</p>
        </ProfileContainer>
    )
}

export default ProfileBarParents
