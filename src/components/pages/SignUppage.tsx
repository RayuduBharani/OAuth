import { googleLogout } from '@react-oauth/google';
import { Button } from '../ui/button';


export default function SignUp() {
  const handleLogout = () => {
    googleLogout();
    console.log('Logged out successfully');
  };
  return (
    <div>SignUppage
      <Button onClick={handleLogout}>Logout</Button>
    </div>

  )
}
