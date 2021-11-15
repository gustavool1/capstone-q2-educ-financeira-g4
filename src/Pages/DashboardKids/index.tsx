import { useEffect } from "react";
import { useUser } from "../../Providers/Users";
import { Container, CardList, ActivitiesList } from "./style";
const DashboardKids = () => {
  const { activities, GetActivities } = useUser();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    GetActivities(Number(userId));
    console.log(activities);
  }, []);

  return (
    <Container>
      <h2>Atividades</h2>

      <CardList>
        <li className="card">
          <h2>Diárias</h2>
          <ActivitiesList>
            {activities
              .filter((item) => item.frequency === "Diaria")
              .map((item, index) => (
                <li key={index}>
                  <p>{item.name}</p>
                </li>
              ))}
          </ActivitiesList>
        </li>

        <li className="card">
          <h2>Semanais</h2>
          <ActivitiesList>
            {activities
              .filter((item) => item.frequency === "Semanal")
              .map((item, index) => (
                <li key={index}>
                  <p>{item.name}</p>
                </li>
              ))}
          </ActivitiesList>
        </li>

        <li className="card">
          <h2>Mensais</h2>
          <ActivitiesList>
            {activities
              .filter((item) => item.frequency === "Mensal")
              .map((item, index) => (
                <li key={index}>
                  <p>{item.name}</p>
                </li>
              ))}
          </ActivitiesList>
        </li>
      </CardList>
    </Container>
  );
};
export default DashboardKids;
