
import { useAuth } from 'hooks';

import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/Usermenu/UserMenu';
import { StyledHeader } from 'components/Phonelist/StyledPhoneList';

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
}