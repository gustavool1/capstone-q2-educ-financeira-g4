import React, { useContext } from 'react'
import { UserContext } from '../Providers/Users'
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom'

interface RoutesProps {
    isChildren?: boolean,
    exact?: true,
    path?: string,
    component: () => JSX.Element;
}

const RoutesChildren = ({ isChildren = false, component: Component, ...rest }: RoutesProps) => {
    const { UserToken, userData } = useContext(UserContext)

    return (
        
        <ReactDOMRoute 
            {...rest}
            render={() => {
                return isChildren === (userData.type === 'children')?  <Component/>  :  <Redirect to='/'/>            
            }}
        />
    )
}

export default RoutesChildren
