import { Helmet } from 'react-helmet';

import { useAuth } from 'hooks';

import { GiOldMicrophone } from 'react-icons/gi';
import Register from './Register';
import { StyledContainer } from 'components/Phonelist/StyledPhoneList';
export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet title="Phonebook" />

      {!isLoggedIn ? (
        <Register />
      ) : (
        <StyledContainer>
         
          <h2 style={{ fontSize: 44 }}>Phonebook Organizer</h2>

         
          
        </StyledContainer>
      )}
    </>
  );
}
