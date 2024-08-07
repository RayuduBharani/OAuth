import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className='w-[100%] h-[600px] flex justify-center items-center '>
      <div className='w-[33%] h-[85%] border-2 rounded-xl flex flex-col font-medium max-sm:w-[70%] py-10 px-5 bg-background shadow-xl'>
        <h1 className="font-normal text-sm text-neutral-500">Welcome !</h1>
        <div className='w-full pt-4 flex'>

          <GoogleLogin
            onSuccess={credentialResponse => {
              if (credentialResponse.credential) {
                const decoded = jwtDecode(credentialResponse?.credential)
                console.log(decoded);
              }
              else {
                console.log("no credentials provided");
              }
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          />
        </div>
        <p className='text-center pt-6'>or</p>
        <div className='flex flex-col gap-6 pt-6'>
          <div>
            <Label htmlFor='useremail'>UserEmail</Label>
            <Input id='useremail' type='email' />
          </div>

          <div>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' type='password' />
          </div>
          <Button>Login</Button>

          <div>
            <p className='font-normal text-sm'>
              Don't have an account ?
              <Link to={'/sign-up'} className='font-semibold text-primary'>SignUp</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
