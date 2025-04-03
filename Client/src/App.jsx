import { useState } from "react";
import { Input } from "./components/Input";
import { Link, useNavigate } from "react-router-dom";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          SignUp
        </h2>
      </div>
      <div className="bg-white py-8 shadow-lg rounded-lg px-10 mt-8 mx-auto w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
            </div>
            <div className="mt-1">
              <Input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={handleSubmit}
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
            </div>

            <div className="mt-1">
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleSubmit}
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
            </div>

            <div className="mt-1">
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={handleSubmit}
                placeholder="+254-745851127"
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
            </div>

            <div className="mt-1">
              <Input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={handleSubmit}
                placeholder="johndoe123"
                required
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
            </div>

            <div className="mt-1">
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={handleSubmit}
                placeholder="•••••••"
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Sign up
            </button>
          </div>
          <div className="mt-1">
            <h6>
              <span>Already have an account?</span>
              <Link to = "/login" >log in</Link>
            </h6>
          </div>
        </form>
      </div>
    </div>
  );
};

export { App };
