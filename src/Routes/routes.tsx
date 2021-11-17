import React, { useContext } from 'react'
import { UserContext } from '../Providers/Users'
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom'

interface RoutesProps {
    isPrivate?: boolean,
    isParent?: boolean,
    isChildren?: boolean,
    exact?: boolean,
    path?: string,
    component: () => JSX.Element;
}

const Route = ({ isPrivate = false, isParent = false, isChildren = false,  component: Component, ...rest }: RoutesProps) => {
    const { UserToken, typeUser } = useContext(UserContext)

    return (
        
        <ReactDOMRoute 
            {...rest}
            render={() => {
 
                if (!UserToken) {
                    if (isPrivate || isParent || isChildren) {                        
                        return <Redirect to='/' />
                    }                  
                        
                   return  <Component/>
                }                
                if (isParent) {
                    return typeUser === 'parent'? <Component/> : (<Redirect to='/dashboardkids'/> )
                }
                if (isChildren) {
                    return typeUser === 'children'? <Component/> : (<Redirect to='/dashboardparents'/> )
                }
                if (isPrivate) {
                    return <Component/>
                }

                return <Redirect to={typeUser === 'parent'? '/dashboardparents': '/dashboardkids'} />
            }}
        />
    )
}

export default Route
