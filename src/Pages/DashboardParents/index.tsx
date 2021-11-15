import { useContext, useEffect } from "react";
import ListChildren from "../../Components/ListChildren";
import { ActivitiesContext } from "../../Providers/Activities";

export const DashboardParents = () => {
  const { getYourChildrens, childrenArr } = useContext(ActivitiesContext);
  useEffect(() => {
    getYourChildrens();
  }, []);

  return (
    <div>
      aaa
      {childrenArr.length && <ListChildren children={childrenArr} />}
    </div>
  );
};
