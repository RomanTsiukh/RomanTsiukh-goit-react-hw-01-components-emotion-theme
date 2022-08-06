import { Profile } from './Profile/Profile';
import { StatisticsList } from './Statistics/StatisticsList';
import { FriendList } from './Friends/FriendList';
// import GlobalStyle from './GlobalStyle';
import { TransactionHistory } from './Transaction/TransactionHistory';
import user from './Profile/user.json';
import stats from './Statistics/data.json';
import friends from './Friends/friends.json';
import transactions from './Transaction/transactions.json';
import { Box } from './Box';

export function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="bodyBgColor"
      color="mainTextColor"
      p={5}
      width="1"
      text-content="center"
    >
      {/* <GlobalStyle /> */}
      <Box as="section" mb={5} bg="firstBgColor" textAlign="center">
        <Profile
          link={user.avatar}
          usname={user.username}
          ustag={user.tag}
          locat={user.location}
          folowers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Box>

      <Box as="section" mb={5} bg="firstBgColor" textAlign="center">
        <StatisticsList title="Upload stats" stats={stats} />
      </Box>

      <Box as="section" mb={5} textAlign="center">
        <FriendList friends={friends} />
      </Box>

      <Box as="section">
        <TransactionHistory items={transactions} />
      </Box>
    </Box>
  );
}
