import React, { useContext } from 'react'
import { UserContext } from '../Providers/Users'
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom'

interface RoutesProps {
    isPrivate?: boolean,
    exact?: true,
    path?: string,
    component: () => JSX.Element;
}

const Route = ({ isPrivate = false, component: Component, ...rest }: RoutesProps) => {
    const { UserToken, userData } = useContext(UserContext)

    return (
        
        <ReactDOMRoute 
            {...rest}
            render={() => {
                return isPrivate === !!UserToken?  <Component/>  :  <Redirect to={isPrivate? ('/'
                    ):(
                        userData.type==='parent'? '/dashboardparents' : '/dashboardkids'
                    )}/>
            
            }}
        />
    )
}

export default Route
