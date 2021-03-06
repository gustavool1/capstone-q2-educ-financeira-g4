import { useEffect, useState } from "react";
import { useUser } from "../../Providers/Users";
import {
  ContainerDesktop,
  CardList,
  ActivitiesList,
  ContainerMobile,
  MobileContent,
  ContainerPage,
  NotAchivied,
  Achivied,
  AchiviedMobile,
  NotAchiviedMobile
} from "./style";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTrash, FaAngellist } from "react-icons/fa";
import { RiEmotionSadLine } from "react-icons/ri";
import api from "../../Services/api";
import ProfileBarChildren from "../../Components/ProfileBarChildren";

const DashboardKids = () => {
  const { activities, GetActivities, isTokenValid } = useUser();
  const userId = localStorage.getItem("userId");
  const [carrouselNumber, setCarrouselNumber] = useState(0);
  useEffect(() => {
    GetActivities(Number(userId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isTokenValid()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

  const AchiviedFunction = (id: number) => {
    const body = {
      childAchivied: true,
    };
    api
      .patch(`activities/${id}`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log('testegug',response)
        GetActivities(Number(userId));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const UnachiviedFunction = (id: number) => {
    const body = {
      childAchivied: false,
    };
    api
      .patch(`activities/${id}`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        GetActivities(Number(userId));
      });
  };
  const getNextCard = () => {
    if (carrouselNumber !== 2) {
      setCarrouselNumber(carrouselNumber + 1);
    } else {
      setCarrouselNumber(0);
    }
  };

  const getLastCard = () => {
    if (carrouselNumber !== 0) {
      setCarrouselNumber(carrouselNumber - 1);
    } else {
      setCarrouselNumber(2);
    }
  };

  return (
    <>       
      <ContainerPage> 
        <ProfileBarChildren/>
      <ContainerDesktop>  
     
        <h2>Atividades</h2>
        <CardList>
          <li className="card">
            <h2>Di??rias</h2>
            <ActivitiesList>
              <h3>Tarefas a concluir:</h3>
              <NotAchivied>
              {activities.filter(
                (item) => item.frequency === "Diaria" && item.childAchivied === false
              ).length > 0 ? (
                activities
                  .filter(
                    (item) =>
                      item.frequency === "Diaria" && item.childAchivied === false
                  )
                  .map((item, index) => (
                    <li key={index}>
                      <p>{item.name} </p>
                      <b>R$ {item.reward.toFixed(2)}</b>
                      <button onClick={()=> AchiviedFunction(item.id)}>
                        <AiOutlineCheck />
                      </button>
                    </li>
                  ))
              ) : (
                <div>
                  <FaAngellist />
                  <p>Tudo conclu??do !!</p>
                </div>
              )}
              </NotAchivied>
              <h3>Tarefas Conclu??das: </h3>
              <Achivied>
              {activities.filter(
                (item) => item.frequency === "Diaria" && item.childAchivied === true
              ).length > 0 ? (
                activities
                  .filter(
                    (item) =>
                      item.frequency === "Diaria" && item.childAchivied === true
                  )
                  .map((item, index) => (
                    <li key={index}>
                      <p>{item.name} </p>
                      <b>R$ {item.reward.toFixed(2)}</b>
                      <button onClick={() => UnachiviedFunction(item.id)}>
                        <FaTrash className="trashIcon" />
                      </button>
                    </li>
                  ))
              ) : (
                <div>
                  <RiEmotionSadLine className="sadIcon" />
                  <p className="nothingDone">Nada conclu??do</p>
                </div>
              )}
              </Achivied>
            </ActivitiesList>
          </li>

          <li className="card">
            <h2>Semanais</h2>
            <ActivitiesList>
              <h3>Tarefas a concluir:</h3>
                <NotAchivied>
              {activities.filter(
                (item) =>
                  item.frequency === "Semanal" && item.childAchivied === false
              ).length > 0 ? (
                activities
                  .filter(
                    (item) =>
                      item.frequency === "Semanal" && item.childAchivied === false
                  )
                  .map((item, index) => (
                    <li key={index}>
                      <p>{item.name}</p>
                      <b>R$ {item.reward.toFixed(2)}</b>
                      <button onClick={() => AchiviedFunction(item.id)}>
                        <AiOutlineCheck />
                      </button>
                    </li>
                  ))
              ) : (
                <div>
                  <FaAngellist />
                  <p>Tudo conclu??do !!</p>
                </div>
              )}
              </NotAchivied>
              <Achivied>
              <h3>Tarefas conclu??das</h3>
              {activities.filter(
                (item) => item.frequency === "Semanal" && item.childAchivied === true
              ).length > 0 ? (
                activities
                  .filter(
                    (item) =>
                      item.frequency === "Semanal" && item.childAchivied === true
                  )
                  .map((item, index) => (
                    <li key={index}>
                      <p>{item.name} </p>
                      <b>R$ {item.reward.toFixed(2)}</b>
                      <button onClick={() => UnachiviedFunction(item.id)}>
                        <FaTrash className="trashIcon" />
                      </button>
                    </li>
                  ))
              ) : (
                <div>
                  <RiEmotionSadLine className="sadIcon" />
                  <p className="nothingDone">Nada conclu??do</p>
                </div>
              )}
              </Achivied>
            </ActivitiesList>
          </li>

          <li className="card">
            <h2>Mensais</h2>
            <ActivitiesList>
              <h3>Tarefas a concluir</h3>
              <NotAchivied>

              {activities.filter(
                (item) => item.frequency === "Mensal" && item.childAchivied === false
              ).length > 0 ? (
                activities
                  .filter(
                    (item) =>
                      item.frequency === "Mensal" && item.childAchivied === false
                  )
                  .map((item, index) => (
                    <li key={index}>
                      <p>{item.name} </p>
                      <b>R$ {item.reward.toFixed(2)}</b>
                      <button onClick={() => AchiviedFunction(item.id)}>
                        <AiOutlineCheck />
                      </button>
                    </li>
                  ))
              ) : (
                <div>
                  <FaAngellist />
                  <p>Tudo conclu??do !!</p>
                </div>
              )}
                </NotAchivied>
              <h3>Tarefas conclu??das</h3>
                <Achivied>
              {activities.filter(
                (item) => item.frequency === "Mensal" && item.childAchivied === true
              ).length > 0 ? (
                activities
                  .filter(
                    (item) =>
                      item.frequency === "Mensal" && item.childAchivied === true
                  )
                  .map((item, index) => (
                    <li key={index}>
                      <p>{item.name} </p>
                      <b>R$ {item.reward.toFixed(2)}</b>
                      <button onClick={() => UnachiviedFunction(item.id)}>
                        <FaTrash className="trashIcon" />
                      </button>
                    </li>
                  ))
              ) : (
                <div>
                  <RiEmotionSadLine className="sadIcon" />
                  <p className="nothingDone">Nada conclu??do</p>
                </div>
              )}
              </Achivied>
            </ActivitiesList>
          </li>
        </CardList>
      </ContainerDesktop>
      </ContainerPage>
      

      <ContainerMobile>
        <h2>Atividades</h2>
        <MobileContent>
          <button
            onClick={getLastCard}
            className="passLeft navegateButton"
          >
            &lt;
          </button>

          <CardList>
            <li className="cardMobile">
              {carrouselNumber === 0 && (
                <ActivitiesList>
                  <h2>Di??ria</h2>

                  <h3>Tarefas a concluir:</h3>
                  <AchiviedMobile>
                  {activities.filter(
                    (item) =>
                      item.frequency === "Diaria" && item.childAchivied === false
                  ).length > 0 ? (
                    activities
                      .filter(
                        (item) =>
                          item.frequency === "Diaria" && item.childAchivied === false
                      )
                      .map((item, index) => (
                        <li key={index}>
                          <p>{item.name} </p>
                          <b>R$ {item.reward.toFixed(2)}</b>
                          <button onClick={() => AchiviedFunction(item.id)}>
                            <AiOutlineCheck />
                          </button>
                        </li>
                      ))
                  ) : (
                    <div>
                      <FaAngellist />
                      <p>Tudo conclu??do !!</p>
                    </div>
                  )}
                  </AchiviedMobile>
                  <h3>Tarefas Conclu??das: </h3>
                  <NotAchiviedMobile>
                  {activities.filter(
                    (item) =>
                      item.frequency === "Diaria" && item.childAchivied === true
                  ).length > 0 ? (
                    activities
                      .filter(
                        (item) =>
                          item.frequency === "Diaria" && item.childAchivied === true
                      )
                      .map((item, index) => (
                        <li key={index}>
                          <p>{item.name} </p>
                          <b>R$ {item.reward.toFixed(2)}</b>
                          <button onClick={() => UnachiviedFunction(item.id)}>
                            <FaTrash className="trashIcon" />
                          </button>
                        </li>
                      ))
                  ) : (
                    <div>
                      <RiEmotionSadLine className="sadIcon" />
                      <p className="nothingDone">Nada conclu??do</p>
                    </div>
                  )}
                  </NotAchiviedMobile>
                </ActivitiesList>
              )}

              {carrouselNumber === 1 && (
                <ActivitiesList>
                  <h2>Semanal</h2>

                  <h3>Tarefas a concluir:</h3>
                  <AchiviedMobile>
                  {activities.filter(
                    (item) =>
                      item.frequency === "Semanal" && item.childAchivied === false
                  ).length > 0 ? (
                    activities
                      .filter(
                        (item) =>
                          item.frequency === "Semanal" &&
                          item.childAchivied === false
                      )
                      .map((item, index) => (
                        <li key={index}>
                          <p>{item.name} </p>
                          <b>R$ {item.reward.toFixed(2)}</b>
                          <button onClick={() => AchiviedFunction(item.id)}>
                            <AiOutlineCheck />
                          </button>
                        </li>
                      ))
                  ) : (
                    <div>
                      <FaAngellist />
                      <p>Tudo conclu??do !!</p>
                    </div>
                  )}
                  </AchiviedMobile>
                  <h3>Tarefas Conclu??das: </h3>
                  <NotAchiviedMobile>
                  {activities.filter(
                    (item) =>
                      item.frequency === "Semanal" && item.childAchivied === true
                  ).length > 0 ? (
                    activities
                      .filter(
                        (item) =>
                          item.frequency === "Semanal" && item.childAchivied === true
                      )
                      .map((item, index) => (
                        <li key={index}>
                          <p>{item.name} </p>
                          <b>R$ {item.reward.toFixed(2)}</b>
                          <button onClick={() => UnachiviedFunction(item.id)}>
                            <FaTrash className="trashIcon" />
                          </button>
                        </li>
                      ))
                  ) : (
                    <div>
                      <RiEmotionSadLine className="sadIcon" />
                      <p className="nothingDone">Nada conclu??do</p>
                    </div>
                  )}
                  </NotAchiviedMobile>
                </ActivitiesList>
              )}

              {carrouselNumber === 2 && (
                <ActivitiesList>
                  <h2>Mensal</h2>

                  <h3>Tarefas a concluir:</h3>
                  <AchiviedMobile>
                  {activities.filter(
                    (item) =>
                      item.frequency === "Mensal" && item.childAchivied === false
                  ).length > 0 ? (
                    activities
                      .filter(
                        (item) =>
                          item.frequency === "Mensal" && item.childAchivied === false
                      )
                      .map((item, index) => (
                        <li key={index}>
                          <p>{item.name} </p>
                          <b>R$ {item.reward.toFixed(2)}</b>
                          <button onClick={() => AchiviedFunction(item.id)}>
                            <AiOutlineCheck />
                          </button>
                        </li>
                      ))
                  ) : (
                    <div>
                      <FaAngellist />
                      <p>Tudo conclu??do !!</p>
                    </div>
                  )}
                  </AchiviedMobile>
                  <h3>Tarefas Conclu??das: </h3>
                  <NotAchiviedMobile>
                  {activities.filter(
                    (item) =>
                      item.frequency === "Mensal" && item.childAchivied === true
                  ).length > 0 ? (
                    activities
                      .filter(
                        (item) =>
                          item.frequency === "Mensal" && item.childAchivied === true
                      )
                      .map((item, index) => (
                        <li key={index}>
                          <p>{item.name} </p>
                          <b>R$ {item.reward.toFixed(2)}</b>
                          <button onClick={() => UnachiviedFunction(item.id)}>
                            <FaTrash className="trashIcon" />
                          </button>
                        </li>
                      ))
                  ) : (
                    <div>
                      <RiEmotionSadLine className="sadIcon" />
                      <p className="nothingDone">Nada conclu??do</p>
                    </div>
                  )}
                  </NotAchiviedMobile>
                </ActivitiesList>
              )}
            </li>
          </CardList>
          <button onClick={getNextCard} className="passRight navegateButton">
            &gt;
          </button>
        </MobileContent>
      </ContainerMobile>
    </>
  );
};
export default DashboardKids;
