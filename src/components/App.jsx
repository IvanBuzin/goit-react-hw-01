import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import { Profile } from "./profile/Profile";
import { FriendList } from "./friendlist/FriendList";
import { TransactionHistory } from "./transaction/TransactionHistory";
export const App = () => {
  return (
    <div>
      <Profile info={userData} />
      <FriendList userInfo={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
