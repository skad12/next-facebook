import Head from 'next/head'


 function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="gap-8 bg-gray-100 md:grid md:grid-cols-2 sm:mx-auto px-36 py-36 ">
  


  <div className="md:py-32 ">
    <div className="text-6xl font-bold text-blue-500 md:text-5xl lg:text-6xl ">facebook</div>
    <div className="mt-4 text-2xl md:text-xl lg:text-2xl ">facebook helps you and share with the people in your life</div>
  </div>


  
  <div className="">
    <div className="px-6 py-6 mt-10 bg-white rounded-lg shadow-xl border-1">
      <form action="page.php" method="post">
        <div className="space-y-3">
          <div>
            <input type="text" name="email" placeholder="Email or phone number" className="w-full h-12 px-4 py-2 text-xl border-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"/>
          </div>

          <div>
            <input type="password" name="password" placeholder="Password" className="w-full h-12 px-4 py-2 text-xl border-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400" />
          </div>
        </div>

        <div className="flex justify-center h-12 mt-6 text-2xl text-white bg-blue-500 border-2 rounded-lg cursor-pointer lg:w-full ">Log In</div>

        <div className="mx-16 my-6 text-sm text-blue-500 sm:text-center ">Forgotten password</div>

        <div className="flex justify-center h-10 mx-8 text-white bg-green-400 rounded md:mx-0">Create New Account</div>
      </form>
    </div>

    <div className="mx-8 mt-4 text-sm"><a className="font-semibold" href="#">Create a page </a> for a Celebrity, band or business</div>
  </div>



    </div>

    
  </div>
  )
}

export default Home;