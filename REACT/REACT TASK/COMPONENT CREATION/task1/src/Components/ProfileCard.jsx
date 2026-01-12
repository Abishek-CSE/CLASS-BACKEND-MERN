import image from '../assets/Poster.jpg';

const ProfileCard = () => {
  return (
    <div className='profile-card'>
      <div className='profile'>
        <img src={image} alt="JANA NAYAGAN Movie Poster" />
      </div>
    </div>
  );
};

export default ProfileCard;