import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  return 'something';
};

const Landing = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h2>Landing</h2>
    </div>
  );
};

export default Landing;
