import style from "./FriendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const isOnline = clsx(
    style.onInfo,
    isOnline ? style.friendsIsOnline : style.friendsIsOffline
  );

  return (
    <div>
      <img className={style.friendsImg} src={avatar} alt="Avatar" width="48" />
      <p className={style.friendsName}>{name}</p>
      <p className={isOnline}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
