import style from "./FriendList.module.css";
import { FriendListItem } from "../FriendlistItem/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={style.item} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};
