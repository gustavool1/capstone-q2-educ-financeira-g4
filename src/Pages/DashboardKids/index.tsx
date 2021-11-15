import { useEffect, useState } from "react";
import { useUser } from "../../Providers/Users";
import {
  ContainerDesktop,
  CardList,
  ActivitiesList,
  ContainerMobile,
} from "./style";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTrash, FaAngellist } from "react-icons/fa";
import { RiEmotionSadLine } from "react-icons/ri";
import api from "../../Services/api";

const DashboardKids = () => {
  const { activities, GetActivities } = useUser();
  const userId = localStorage.getItem("userId");
  const carrouselBase = [1, 2, 3];
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

  return (
    <>
      <ContainerDesktop>
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
      </ContainerMobile>
    </>
  );
};
export default DashboardKids;
