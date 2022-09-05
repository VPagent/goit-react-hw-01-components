import user from './UserData/UserJson';
import data from './UserData/Data';
import friendsData from './UserData/FriendsData'
import transactionData from './UserData/TransactionData'
import Profile from './Profile';
import Statisticks from './Statisticks';
import FriendList from './FriendList';
import Transaction from './Transaction';
console.log(data)
export const App = () => {
  return (
    <div
      style={{
        paddingTop: 40,
        height: 2500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statisticks
        title = "Upload stats"
        stats={data}
      />
      <FriendList friends={friendsData}/>
      <Transaction items={transactionData}/>
    </div>
  );
};
