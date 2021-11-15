import { useEffect } from "react";
import { useUser } from "../../Providers/Users";
import { Container, CardList, ActivitiesList } from "./style";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import api from "../../Services/api";
const DashboardKids = () => {
  const { activities, GetActivities } = useUser();
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    GetActivities(Number(userId));
  }, []);
  console.log(activities);

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
    <Container>
      <h2>Atividades</h2>

      <CardList>
        <li className="card">
          <h2>Diárias</h2>
          <ActivitiesList>
            <h3>Tarefas a concluir:</h3>
            {activities
              .filter(
                (item) => item.frequency === "Diaria" && item.achivied === false
              )
              .map((item, index) => (
                <li key={index}>
                  <p>{item.name} </p>
                  <b>R$ {item.reward.toFixed(2)}</b>
                  <button onClick={() => AchiviedFunction(item.id)}>
                    <AiOutlineCheck />
                  </button>
                </li>
              ))}

            <h3>Tarefas Concluídas: </h3>
            {activities
              .filter(
                (item) => item.frequency === "Diaria" && item.achivied === true
              )
              .map((item, index) => (
                <li key={index}>
                  <p>{item.name} </p>
                  <b>R$ {item.reward.toFixed(2)}</b>
                  <button onClick={() => UnachiviedFunction(item.id)}>
                    <FaTrash className="trashIcon" />
                  </button>
                </li>
              ))}
          </ActivitiesList>
        </li>

        <li className="card">
          <h2>Semanais</h2>
          <ActivitiesList>
            <h3>Tarefas a concluir:</h3>

            {activities.filter(
              (item) => item.frequency === "Semanal" && item.achivied === false
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
              <p>sem</p>
            )}
            <h3>Tarefas concluídas</h3>
            {activities
              .filter(
                (item) => item.frequency === "Semanal" && item.achivied === true
              )
              .map((item, index) => (
                <li key={index}>
                  <p>{item.name} </p>
                  <b>R$ {item.reward.toFixed(2)}</b>
                  <button onClick={() => UnachiviedFunction(item.id)}>
                    <FaTrash className="trashIcon" />
                  </button>
                </li>
              ))}
          </ActivitiesList>
        </li>

        <li className="card">
          <h2>Mensais</h2>
          <ActivitiesList>
            <h3>Tarefas a concluir</h3>

            {activities
              .filter(
                (item) => item.frequency === "Mensal" && item.achivied === false
              )
              .map((item, index) => (
                <li key={index}>
                  <p>{item.name} </p>
                  <b>R$ {item.reward.toFixed(2)}</b>
                  <button onClick={() => AchiviedFunction(item.id)}>
                    <AiOutlineCheck />
                  </button>
                </li>
              ))}

            <h3>Tarefas concluídas</h3>
            {activities
              .filter(
                (item) => item.frequency === "Mensal" && item.achivied === true
              )
              .map((item, index) => (
                <li key={index}>
                  <p>{item.name} </p>
                  <b>R$ {item.reward.toFixed(2)}</b>
                  <button onClick={() => UnachiviedFunction(item.id)}>
                    <FaTrash className="trashIcon" />
                  </button>
                </li>
              ))}
          </ActivitiesList>
        </li>
      </CardList>
    </Container>
  );
};
export default DashboardKids;
