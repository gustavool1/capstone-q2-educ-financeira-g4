import CardChildren from "../CardChildren"

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
        <div>
            {children.map((child, key)=>(
               <CardChildren key={key} children={child}/>
            ))}
        </div>
    )
}
export default ListChildren