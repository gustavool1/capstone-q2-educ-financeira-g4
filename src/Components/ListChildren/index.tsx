import CardChildren from "../CardChildren"
import { Container } from "./style"
interface Children{
    balance:[],
    email:string,
    id:number,
    parentId:number,
    password:string,
    wallet:number,
    wishlist:[],
    name:string,
    type:string
}
interface ListChildrenProps{
    children: Children[]
}
const ListChildren = ({children}:ListChildrenProps) =>{
    return(
        <Container>
            {children.map((child, key)=>(
                <div key={key} >
                   <CardChildren children={child}/>
                </div>
            ))}
        </Container>
    )
}
export default ListChildren