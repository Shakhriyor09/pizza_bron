import { useNavigate, useLocation } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const navigate = useNavigate();
  const location = useLocation();
  const error = location.state?.error || 'Unknown error';

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
      <LinkButton to={-1}>Go back</LinkButton>
    </div>
  );
}

export default Error;
