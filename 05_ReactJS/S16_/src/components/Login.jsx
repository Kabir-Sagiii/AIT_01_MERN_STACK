import React from "react";
import { Mail, Lock, Leaf, Truck, ShieldCheck } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#f3f7ea] flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-white rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="relative bg-[#edf7d9] p-10 lg:p-16 overflow-hidden">
          {/* Floating Leaves */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-52 h-52 bg-lime-200 rounded-full blur-3xl opacity-40"></div>

          {/* Logo */}
          <div className="flex items-center gap-3 mb-14">
            <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">
              I
            </div>
            <h1 className="text-3xl font-bold text-green-950">Instacart</h1>
          </div>

          {/* Heading */}
          <div className="max-w-xl">
            <h2 className="text-6xl leading-tight font-black text-green-950">
              Good food,
              <br />
              great choices.
            </h2>

            <p className="mt-6 text-xl text-green-900/80 leading-relaxed">
              Farm-fresh produce and everyday essentials, delivered with care.
            </p>
          </div>

          {/* Features */}
          <div className="mt-14 space-y-8">
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center">
                <Leaf className="text-green-700" size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-950">
                  Fresh & Organic
                </h3>
                <p className="text-green-900/70 mt-1 text-lg">
                  Handpicked from trusted local farms.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center">
                <Truck className="text-green-700" size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-950">
                  Fast Delivery
                </h3>
                <p className="text-green-900/70 mt-1 text-lg">
                  Groceries at your doorstep hassle-free.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center">
                <ShieldCheck className="text-green-700" size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-950">
                  Quality You Can Trust
                </h3>
                <p className="text-green-900/70 mt-1 text-lg">
                  Carefully sourced for your family.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <p className="mt-16 text-3xl italic text-green-900 font-light">
            Eat fresh, live well.
          </p>

          {/* Grocery Image */}
          <div className="hidden lg:block absolute bottom-0 right-10">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
              alt="Groceries"
              className="w-[450px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#022c17] relative flex items-center justify-center p-8 lg:p-16">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-700/20 to-transparent"></div>

          <div className="relative z-10 w-full max-w-md">
            {/* Title */}
            <div className="text-center">
              <h2 className="text-5xl font-black text-white">Welcome back!</h2>

              <p className="text-green-100/80 mt-4 text-lg">
                Sign in to continue to your account
              </p>
            </div>

            {/* Form */}
            <form className="mt-12 space-y-6">
              {/* Email */}
              <div>
                <label className="block text-green-100 mb-3 text-sm font-medium">
                  Email
                </label>

                <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4">
                  <Mail className="text-gray-400" size={22} />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full outline-none text-lg bg-transparent"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-green-100 mb-3 text-sm font-medium">
                  Password
                </label>

                <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4">
                  <Lock className="text-gray-400" size={22} />

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full outline-none text-lg bg-transparent"
                  />

                  <button
                    type="button"
                    className="text-green-700 font-semibold"
                  >
                    Show
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-green-100">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-lime-300 hover:text-lime-200"
                >
                  Forgot password?
                </button>
              </div>

              {/* Button */}
              <button className="w-full bg-lime-500 hover:bg-lime-400 transition-all duration-300 text-black font-bold text-lg py-4 rounded-2xl shadow-xl">
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-white/20"></div>

              <span className="text-white/60 text-sm">or continue with</span>

              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            {/* Social Login */}
            <div className="flex justify-center gap-5">
              {["G", "", "f"].map((item, i) => (
                <button
                  key={i}
                  className="w-16 h-16 bg-white rounded-2xl text-2xl font-bold shadow-lg hover:scale-105 transition"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Footer */}
            <p className="text-center text-green-100/80 mt-10">
              New here?{" "}
              <span className="text-lime-300 font-semibold cursor-pointer">
                Create your account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
