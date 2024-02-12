import userData from "./components/data/userData.json";
import friends from "./components/data/friends.json";
import transactions from "./components/data/transactions.json";
import { Profile } from "./components/profile/Profile";
import { FriendList } from "./components/friendlist/FriendList";
import { TransactionHistory } from "./components/fransactionHistory/TransactionHistory";
import "../node_modules/modern-normalize/modern-normalize.css";

export const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
