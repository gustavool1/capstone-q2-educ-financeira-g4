
import React, { useContext, useEffect } from 'react'
import { ProfileContainerChildren } from './style'
import iconProfile from '../../assets/images/iconProfile.jpg'
import { UserContext } from '../../Providers/Users'
import { GiTwoCoins } from "react-icons/gi";
import { useHistory } from 'react-router';


const ProfileBarChildren = () => {
    const { userData, getUserData, typeUser } = useContext(UserContext)
    const history = useHistory();

    useEffect(() => {
        getUserData()
    }, [])

    useEffect(() => {
        if (typeUser !== 'children') {
            history.push('/')
        }
    })

    return (
        <ProfileContainerChildren>
            <div className='profileDescriptions'>
                <img src={iconProfile} alt='Icon profile face' />
                    
                <h1>{userData.name}</h1>                
            </div>

            <h3 className='wallet'>
                Saldo: R$ {Number((userData.wallet)).toFixed(2)} 
                <GiTwoCoins/>
            </h3>

            <button
                onClick={() => history.push('/balance') }
            >
                Movimentações
            </button>
        </ProfileContainerChildren>
    )
}

export default ProfileBarChildren