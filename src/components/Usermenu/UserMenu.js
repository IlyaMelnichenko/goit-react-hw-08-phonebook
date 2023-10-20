import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { StyledUser } from 'components/Phonelist/StyledPhoneList';


export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledUser>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </StyledUser>
  );
}