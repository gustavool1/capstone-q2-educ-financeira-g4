import React, { useContext } from 'react'
import { UserContext } from '../Providers/Users'
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom'

interface RoutesProps {
    isParent?: boolean,
    exact?: true,
    path?: string,
    component: () => JSX.Element;
}

const RoutesParents = ({ isParent = false, component: Component, ...rest }: RoutesProps) => {
    const { UserToken, userData } = useContext(UserContext)

    return (
        
        <ReactDOMRoute 
            {...rest}
            render={() => {
                return isParent === (userData.type === 'parent')?  <Component/>  :  <Redirect to='/'/>            
            }}
        />
    )
}

export default RoutesParents
