import { useContext, useEffect, useState } from "react";
import { ActivitiesContext } from "../../Providers/Activities";
import {
  Achivied,
  NotAchivied,
  Front,
  Back,
  ButtonsContainer,
  MobileCard,
  ChildrenData,
  ChildrenActivities,
} from "./style.js";
import api from "../../Services/api";
import ReactCardFlip from "react-card-flip";
import { IoIosCreate, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { ChildrenContext } from "../../Providers/Children";
import { ModalContext } from "../../Providers/Modal";
import { useUser } from "../../Providers/Users";

interface Children {
  balance: [];
  email: string;
  id: number;
  parentId: number;
  wallet: number;
  wishlist: [];
  name: string;
  type: string;
}

interface CardChildrenProps {
  children: Children;
}

interface Activities {
  childAchivied: boolean;
  parentAchivied: boolean;
  frequency: string;
  name: string;
  reward: number;
  userId: number;
  id: number;
}


const CardChildren = ({ children }: CardChildrenProps) => {
  const [toggle, setToggle] = useState(false);
  const [childrenActivies, setChildrenActivities] = useState<Activities[]>([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const { updateActivitie, getYourChildrens, createActivie, deleteActivitie } =
    useContext(ActivitiesContext);
  const { handleAdding, handleEditing } = useContext(ModalContext);
  const { updateWallet } = useContext(ChildrenContext);
  const { SelectedChild } = useUser();

  const getYourActivities = (userId: number) => {
    api
      .get(`activities/?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setChildrenActivities(response.data);
      })
      .catch((err) => console.log("getyourActivies", err));
  };
  const FinishingTask = (e: any, task: Activities) => {
    task.parentAchivied = true;
    if (task.parentAchivied && task.childAchivied) {
      deleteActivitie(task);
      updateWallet(children, task.reward);
      getYourChildrens();
      getYourActivities(children.id);
      e.target.checked = false;
    }
  };

  useEffect(() => {
    getYourActivities(children.id);
  }, [createActivie]);

      
    return(
            <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <Front>
                    <img src='https://d3ugyf2ht6aenh.cloudfront.net/stores/001/829/347/themes/amazonas/img-1347263166-1629736427-e77800fdb2094c2bcc4fb6f44d82ce1d1629736428.jpg?1211721950' alt='img'/>
                    <p>{children.name}</p>
                    <p>Saldo: R${children.wallet}</p>
                    <button className='create-activity' onClick={()=>setIsFlipped(!isFlipped)}>Ver mais</button>
                </Front>
                <Back>
                    <Achivied>
                        <h2>Tarefas Concluídas: {childrenActivies.filter((item)=>item.childAchivied === true).length}</h2>
                        {childrenActivies.filter((item)=>item.childAchivied === true).map((achivied,key)=>(
                            <div key={key}>
                                <p title={achivied.name}>{achivied.name}</p>
                                <p>R${achivied.reward}</p>
                                <input type="checkbox"  onClick={(e)=>FinishingTask(e,achivied)}/>

                            </div>
                        ))}
                    </Achivied>
                    <NotAchivied>
                        <h2>Tarefas a concluir: {childrenActivies.filter((item)=>item.childAchivied === false).length}</h2>
                        {childrenActivies.filter((item)=>item.childAchivied === false).map((notAchivied,key)=>(
                        <div key={key}>
                                <p title={notAchivied.name}>{notAchivied.name}</p>
                                <p>R${notAchivied.reward}</p>
                                <button onClick={()=>handleEditing(notAchivied.id)}><IoIosCreate/></button>

                        </div>
                        ))}
                    </NotAchivied>
                    <ButtonsContainer>
                        <button className='create-activity' onClick={updateCard}>Virar</button>
                        <button className='create-activity' onClick={()=>handleAdding(children.id)}>Criar Atividade</button>
                    </ButtonsContainer>
                </Back>
            </ReactCardFlip>



            <MobileCard>
                <ChildrenData >
                    <img src='https://d3ugyf2ht6aenh.cloudfront.net/stores/001/829/347/themes/amazonas/img-1347263166-1629736427-e77800fdb2094c2bcc4fb6f44d82ce1d1629736428.jpg?1211721950' alt='a'/>
                    <div>
                        <h2>{children.name}</h2>
                        <p>Atividades concluídas: <strong>{childrenActivies.filter((act)=> act.childAchivied=== true).length}</strong></p>
                        <p>Atividades a concluir: <strong>{childrenActivies.filter((act)=> act.childAchivied=== false).length} </strong></p>
                    </div>
                    {toggle ?(
                        <button onClick={()=> setToggle(!toggle)}>
                            <IoIosArrowDown/>
                        </button>
                    ):(
                        <button onClick={()=> setToggle(!toggle)}>
                            <IoIosArrowForward/>
                        </button>
                    )}
                    
                </ChildrenData>
                
                
                <ChildrenActivities
                    className={toggle ? 'isOpen': 'isClosed'}
                    
                >
                   <Achivied className={toggle ? 'open' : 'closed'}>
                   <h2>Tarefas Concluídas: {childrenActivies.filter((item)=>item.childAchivied === true).length}</h2>
                        {childrenActivies.filter((item)=>item.childAchivied === true).map((achivied,key)=>(
                            <div key={key}>
                                <p title={achivied.name}>{achivied.name}</p>
                                <p>R${achivied.reward}</p>
                                <input type="checkbox"  onClick={(e)=>FinishingTask(e,achivied)}/>

                            </div>
                        ))}
                    </Achivied>
                    <NotAchivied className={toggle ? 'open' : 'closed'} >
                        <h2>Tarefas a concluir: {childrenActivies.filter((item)=>item.childAchivied === false).length}</h2>
                        {childrenActivies.filter((item)=>item.childAchivied === false).map((notAchivied,key)=>(
                        <div key={key}>
                                <p title={notAchivied.name}>{notAchivied.name}</p>
                                <p>R${notAchivied.reward}</p>
                                <button onClick={()=>handleEditing(notAchivied.id)}><IoIosCreate/></button>
                    <IoIosCreate />
                  </button>
                  <input
                    type="checkbox"
                    onClick={(e) => FinishingTask(e, notAchivied)}
                  />
                </div>
              ))}
          </NotAchivied>
        </ChildrenActivities>
      </MobileCard>
    </>
  );
};
export default CardChildren;
