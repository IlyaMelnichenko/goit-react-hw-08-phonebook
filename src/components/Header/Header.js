
import { useAuth } from 'hooks';
import { AppHeader } from './AppBar.styled';
import AuthNav from 'components/AuthNav';

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <AppHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppHeader>
  );
}