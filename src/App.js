import Profile from './social-profile/Profile';
import Statistics from './statistics/Statistics';
import user from './social-profile/user.json';
import statisticalData from './statistics/statistical-data.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}
