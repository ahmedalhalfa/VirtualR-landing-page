import { Link } from 'react-router-dom'

const CreateAccountPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-neutral-900 p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-300">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 w-full px-4 py-2 bg-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 bg-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-neutral-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 w-full px-4 py-2 bg-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-gradient-to-r from-orange-500 to-red-800 hover:from-orange-600 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition"
            >
              Create Account
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-neutral-400">
          Already have an account?{' '}
          <Link to="/signin" className="font-medium text-orange-500 hover:text-orange-400">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default CreateAccountPage
