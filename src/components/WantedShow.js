import { useParams } from 'react-router-dom';

const WantedShow = () => {
  const { id } = useParams();
  return (
    <>
      <p>wanted show is working</p>
      <p>id is getting through {id}</p>
    </>
  );
};

export default WantedShow;
