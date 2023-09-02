const Register = () => {
  return (
    <div>
      <form>
        <div className="space-y-3 mt-5">
          <div className=" flex flex-col">
            <label htmlFor="email" className="mb-1">
              ელ. ფოსტა
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border p-2 outline-none focus:border-gray-700 border-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1">
              პაროლი
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border p-2 outline-none focus:border-gray-700 border-gray-500"
            />
          </div>
        </div>
        <button type="submit" className="bg-yellow-400 p-2 mt-5 text-white">
          რეგისტრაცია
        </button>
      </form>
    </div>
  );
};

export default Register;
