
import { getProviders ,useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { getCsrfToken } from "next-auth/react"
import Image from "next/image"


export default function sign({ providers, csrfToken}) {
  const { data: session } = useSession()
  
  if (session) {
    console.log({session})
    
    return (
    
      <>
        <div className="text-white max-w-5xl mx-auto text-center flex justify-center items-baseline space-x-4 mt-10 ">
         <h1 className="text-3xl">Hello,</h1><span className="text-5xl underline font-semibold uppercase">{session.user.name}</span> <br />
        </div>
        
       

        <div className="max-w-5xl mx-auto ">
            <div className="max-w-md mx-auto bg-white mt-10 rounded">
              <div className="text-center font-semibold tracking-wider text-3xl py-2">
              <h1>Profile</h1>
              </div>
              <form>
                <div className="mt-4">
                <label className="m-2 ml-16 text-xl">Name: <span className="font-semibold tracking-wider">{session.user.name}</span></label>
                </div>
                <div className="mt-4">
                <label className="m-2 ml-16 text-xl">Email: <span className="font-semibold tracking-wider">{session.user.email}</span></label>
                </div>
                <div className="mt-4">
                <label className="m-2 ml-16 text-xl">Favourite Game:</label>
                </div>
                <div className="mt-4">
                <label className="m-2 ml-16 text-xl">Team Name:</label>
                </div>
                <div className="mt-4">
                <label className="m-2 ml-16 text-xl">University:</label>
                </div>
                <div className="mt-4">
                <label className="m-2 ml-16 text-xl">Gender:</label>
                </div>
              </form>

                <div className="max-w-5xl mx-auto text-center mt-10 items-center font-semibold tracking-wider uppercase">
        <Link href="/"><a className=" px-5 py-2 bg-blue-400 hover:bg-gray-800 transition-all ease-in-out rounded shadow-md"
                      >Homepage</a></Link>
        </div> 

              <div className="text-center flex justify-center items-center py-4">
              <button className="bg-blue-400 px-6 py-1 rounded text-black uppercase tracking-wider font-semibold"
              onClick={() => signOut({ callbackUrl: 'http://localhost:3000/login' })}>Sign out</button>
              </div>
            </div>
        </div>

      </>
    )
  }
  return (
    
    <>
    
    <div className="w-full mx-auto text-white">
        <div className="max-w-5xl mx-auto  ">
            <div className="flex justify-center items-center mb-8 mt-12 mx-20">
                <img src="EGU-logo.png" className="w-14"/>
            </div>
            <div className="tracking-wider  max-w-md mx-auto text-center mb-8">
                <h1 className="text-3xl font-semibold ">Sign in to your account</h1>
                <p className="font-semibold tracking-widest">Or <span className="font-semibold tracking-widest text-blue-500">Create a new account</span></p>
            </div>


      <div className="max-w-md mx-auto bg-white flex flex-col gap-y-4 justify-center items-center pt-4 pb-4 rounded">
          <button className="flex justify-center items-center space-x-4 bg-red-600 hover:bg-red-300 uppercase shadow-sm 
                            text-white font-semibold hover:text-white w-96 px-4 py-2 
                             hover:border-transparent rounded tracking-widest" 
                  onClick={() => signIn('google')}>
                    <img src="google-icon.svg" className="w-8"/>
                        <h1 className="pr-4">Sign in with Google</h1>
           </button>

          <div className="">
              <button className="flex justify-center items-center space-x-4 bg-blue-700 hover:bg-blue-400 uppercase 
                              text-white font-semibold hover:text-white w-96 px-4 py-3 shadow-sm
                                border border-blue-500 hover:border-transparent rounded tracking-widest " 
                      onClick={() => signIn('facebook')}>
                        <img src="facebook-icon.svg" className="w-6 "/>
                          <h1 className="">Sign in with Facebook</h1>
                </button>
        </div>

        <form className=" rounded   w-96 mx-auto"  method="post" action="/api/auth/callback/credentials">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
    <div className="mb-4">
      <label className="block text-gray-700 text-md tracking-wider font-semibold mb-2" htmlFor="email">
        Email Address:
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" type="email" placeholder="Email Address"/>
      </label>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-md tracking-wider font-semibold mb-2" htmlFor="password">
        Password:
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 text-xs leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="******************"/>
      <p className="text-red-500 text-xs italic tracking-wide">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-end mb-4 ">
    <a className="inline-block align-baseline tracking-wider text-xs text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
    <div className="flex items-center justify-center space-x-2 mb-4">
      <button type="submit" className="bg-blue-500 hover:bg-gray-700 text-white font-semibold tracking-wider uppercase py-2 w-full rounded focus:outline-none focus:shadow-outline">
        Sign In
      </button>
      <Link href="/signup"><button className="bg-gray-700 hover:bg-blue-500 text-white font-semibold tracking-wider uppercase py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
        Create Account
      </button></Link>
     
    </div>

    <div className="flex items-center justify-center space-x-2 cursor-pointer">
                    <Link href="/index">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" 
                        className="svg-inline--fa fa-arrow-left w-3 fill-current text-blue-600" 
                        role="img" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"><path fill="currentColor" 
                        d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"></path>
                    </svg>
                    </Link> 
                    <Link href="/">
                        <h1 className="text-xs text-blue-600">Back to homepage</h1>
                    </Link>

                    </div>
  </form>



        </div>







      </div>


      <div>

      </div>

      </div>
      
    </>
  )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()

    return {
      props: { providers, 
        csrfToken: await getCsrfToken(context)
      },
    }
  }
