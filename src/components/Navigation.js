import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';


export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
        </>
      )}
    </nav>
  );
}