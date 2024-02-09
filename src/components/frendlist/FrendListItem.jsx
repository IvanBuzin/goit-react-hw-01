import style from "./FriendList.module.css";

export const FriendListItem = ({ user: { avatar, name, isOnline } }) => {
  return (
    <div>
      <img className={style.friendsImg} src={avatar} alt="Avatar" width="48" />
      <p className={style.friendsName}>{name}</p>
      <p className={isOnline ? style.friendsIsOnline : style.friendsIsOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
