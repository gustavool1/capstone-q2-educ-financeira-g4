import { useEffect, useState } from "react";
import { useUser } from "../../Providers/Users";
import {
  ContainerDesktop,
  CardList,
  ActivitiesList,
  ContainerMobile,
  MobileContent,
} from "./style";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTrash, FaAngellist } from "react-icons/fa";
import { RiEmotionSadLine } from "react-icons/ri";
import api from "../../Services/api";
import ProfileBarChildren from "../../Components/ProfileBarChildren";

const DashboardKids = () => {
  const { activities, GetActivities } = useUser();
  const userId = localStorage.getItem("userId");
  const [carrouselNumber, setCarrouselNumber] = useState(0);
  useEffect(() => {
    GetActivities(Number(userId));
  }, []);

  const AchiviedFunction = (id: number) => {
    const body = {
      achivied: true,
    };
    api
      .patch(`activities/${id}`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        GetActivities(Number(userId));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const UnachiviedFunction = (id: number) => {
    const body = {
      achivied: false,
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

  const { getUserData, userData } = useContext(UserContext)

  useEffect(() => {
    getUserData()
    console.log(userData)
  }, [])

  return (
    <>
      <ContainerDesktop>
        <ProfileBarChildren/>
        <h2>Atividades</h2>

        <CardList>
          <li className="card">
            <h2>Diárias</h2>
            <ActivitiesList>
              <h3>Tarefas a concluir:</h3>
              {activities.filter(
                (item) => item.frequency === "Diaria" && item.achivied === false
              ).length > 0 ? (
                activities
                  .filter(
                    (item) =>
                      item.frequency === "Diaria" && item.achivied === false
                  )
                  .map((item, index) => (
                    <li key={index}>
                      <p>{item.name} </p>
                      <b>R$ {item.reward.toFixed(2)}</b>
                      <button onClick={getLastCard}>
                        <AiOutlineCheck />
                      </button>
                    </li>
                  ))
              ) : (
                <div>
                  <FaAngellist />
                  <p>Tudo concluído !!</p>
                </div>
              )}

              <h3>Tarefas Concluídas: </h3>
              {activities.filter(
                (item) => item.frequency === "Diaria" && item.achivied === true
              ).length > 0 ? (
                activities
                  .filter(
                    (item) =>
                      item.frequency === "Diaria" && item.achivied === true
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
                  <p className="nothingDone">Nada concluído</p>
                </div>
              )}
            </ActivitiesList>
          </li>

          <li className="card">
            <h2>Semanais</h2>
            <ActivitiesList>
              <h3>Tarefas a concluir:</h3>

              {activities.filter(
                (item) =>
                  item.frequency === "Semanal" && item.achivied === false
              ).length > 0 ? (
                activities
                  .filter(
                    (item) =>
                      item.frequency === "Semanal" && item.achivied === false
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
                  <p>Tudo concluído !!</p>
                </div>
              )}
              <h3>Tarefas concluídas</h3>
              {activities.filter(
                (item) => item.frequency === "Semanal" && item.achivied === true
              ).length > 0 ? (
                activities
                  .filter(
                    (item) =>
                      item.frequency === "Semanal" && item.achivied === false
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
                  <p className="nothingDone">Nada concluído</p>
                </div>
              )}
            </ActivitiesList>
          </li>

          <li className="card">
            <h2>Mensais</h2>
            <ActivitiesList>
              <h3>Tarefas a concluir</h3>

              {activities.filter(
                (item) => item.frequency === "Mensal" && item.achivied === false
              ).length > 0 ? (
                activities
                  .filter(
                    (item) =>
                      item.frequency === "Mensal" && item.achivied === false
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
                  <p>Tudo concluído !!</p>
                </div>
              )}

              <h3>Tarefas concluídas</h3>
              {activities.filter(
                (item) => item.frequency === "Mensal" && item.achivied === true
              ).length > 0 ? (
                activities
                  .filter(
                    (item) =>
                      item.frequency === "Mensal" && item.achivied === true
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
                  <p className="nothingDone">Nada concluído</p>
                </div>
              )}
            </ActivitiesList>
          </li>
        </CardList>
      </ContainerDesktop>

      <ContainerMobile>
        <h2>Atividades</h2>
        <MobileContent>
          <button
            onClick={() => setCarrouselNumber(1)}
            className="passLeft navegateButton"
          >
            &lt;
          </button>

          <CardList>
            <li className="cardMobile">
              {carrouselNumber === 0 && (
                <ActivitiesList>
                  <h2>Diária</h2>

                  <h3>Tarefas a concluir:</h3>
                  {activities.filter(
                    (item) =>
                      item.frequency === "Diaria" && item.achivied === false
                  ).length > 0 ? (
                    activities
                      .filter(
                        (item) =>
                          item.frequency === "Diaria" && item.achivied === false
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
                      <p>Tudo concluído !!</p>
                    </div>
                  )}

                  <h3>Tarefas Concluídas: </h3>
                  {activities.filter(
                    (item) =>
                      item.frequency === "Diaria" && item.achivied === true
                  ).length > 0 ? (
                    activities
                      .filter(
                        (item) =>
                          item.frequency === "Diaria" && item.achivied === true
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
                      <p className="nothingDone">Nada concluído</p>
                    </div>
                  )}
                </ActivitiesList>
              )}

              {carrouselNumber === 1 && (
                <ActivitiesList>
                  <h2>Semanal</h2>

                  <h3>Tarefas a concluir:</h3>
                  {activities.filter(
                    (item) =>
                      item.frequency === "Semanal" && item.achivied === false
                  ).length > 0 ? (
                    activities
                      .filter(
                        (item) =>
                          item.frequency === "Semanal" &&
                          item.achivied === false
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
                      <p>Tudo concluído !!</p>
                    </div>
                  )}

                  <h3>Tarefas Concluídas: </h3>
                  {activities.filter(
                    (item) =>
                      item.frequency === "Semanal" && item.achivied === true
                  ).length > 0 ? (
                    activities
                      .filter(
                        (item) =>
                          item.frequency === "Semanal" && item.achivied === true
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
                      <p className="nothingDone">Nada concluído</p>
                    </div>
                  )}
                </ActivitiesList>
              )}

              {carrouselNumber === 2 && (
                <ActivitiesList>
                  <h2>Mensal</h2>

                  <h3>Tarefas a concluir:</h3>
                  {activities.filter(
                    (item) =>
                      item.frequency === "Mensal" && item.achivied === false
                  ).length > 0 ? (
                    activities
                      .filter(
                        (item) =>
                          item.frequency === "Mensal" && item.achivied === false
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
                      <p>Tudo concluído !!</p>
                    </div>
                  )}

                  <h3>Tarefas Concluídas: </h3>
                  {activities.filter(
                    (item) =>
                      item.frequency === "Mensal" && item.achivied === true
                  ).length > 0 ? (
                    activities
                      .filter(
                        (item) =>
                          item.frequency === "Mensal" && item.achivied === true
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
                      <p className="nothingDone">Nada concluído</p>
                    </div>
                  )}
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
