import { useUser } from "../../Providers/Users";
import { Container, CardList } from "./style";
const DashboardKids = () => {
  const { activities, GetActivities } = useUser();
  const userId = localStorage.getItem("userId");
  console.log("a");

  GetActivities(Number(userId));
  return (
    <Container>
      <h2>Atividades</h2>

      <CardList>
        <li>
          <h2>Diárias</h2>
          <ul>
            {activities.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </ul>
        </li>

        <li>
          <h2>Semanais</h2>
        </li>

        <li>
          <h2>Mensais</h2>
        </li>
      </CardList>
    </Container>
  );
};
export default DashboardKids;
