import style from "./FriendList.module.css";
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ userInfo }) => {
  return (
    <ul className={style.list}>
      {userInfo.map((item) => (
        <li className={style.item} key={item.id}>
          <FriendListItem user={item} />
        </li>
      ))}
    </ul>
  );
};
