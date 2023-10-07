import { useParams } from 'react-router-dom';

const Profile = () => {
  const { profileId } = useParams();
  return <div>{profileId}</div>;
};

export default Profile;
