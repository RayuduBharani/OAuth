export const navLinks: InavItems[]= [
    {
        label: 'Home',
        link: '/home',
        Candidate: false,
        Recruiter: true,
        isAuthenticated: false
    },
    {
        label: 'Login',
        link: '/sign-in',
        Candidate: false,
        Recruiter: true,
        isAuthenticated: false
    },
    {
        label: 'Register',
        link: '/sign-up',
        Candidate: false,
        Recruiter: true,
        isAuthenticated: false
    }
]

export const navLog : InavLog[]= [
    {
        Label : 'SignIn',
        link : '/sign-in',
        isAuthenticated : true
    },
    {
        Label : 'SignUp',
        link : '/sign-up',
        isAuthenticated : true
    }
]