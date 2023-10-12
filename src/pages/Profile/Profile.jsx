import { useParams } from 'react-router-dom';

const Profile = () => {
  const { profileId } = useParams();
  return (
    <div>
      {profileId} - PROFILE PAGE
      <h1>HELLO</h1>
    </div>
  );
};

export default Profile;
