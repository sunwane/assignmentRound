function LoginModal({
  isOpen,
  onClose,
  onSwitchToRegister,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">

      <div
        className="
        relative
        w-full
        max-w-5xl
        max-h-[85vh]
        overflow-y-auto
        rounded-sm
        shadow-2xl
        bg-[#f7fbff]
        flex
        flex-col
        lg:flex-row
        "
      >

        {/* SPINE */}
        <div
          className="
          hidden
          lg:block
          absolute
          left-1/2
          top-0
          h-full
          w-5
          -translate-x-1/2
          bg-linear-to-r
          from-[#365486]
          via-[#6B9AC4]
          to-[#365486]
          "
        />

        {/* LEFT */}
        <div
          className="
          w-full
          lg:w-1/2
          bg-[#243B55]
          text-white
          p-8
          flex
          flex-col
          justify-between
          "
        >

          <div>

            <div className="flex gap-3 items-center mb-8">

              <div className="bg-white text-[#243B55] px-3 py-1 font-black">
                P
              </div>

              <div className="text-2xl font-black">
                PAGE & CO.
              </div>

            </div>

            <div className="uppercase text-blue-200 mb-2 tracking-[0.3em]">
              Welcome Back
            </div>

            <h2 className="text-4xl font-black mb-6">
              Continue
              <br />
              Reading
            </h2>

            <p className="leading-8 text-blue-100">
              Return to your collection and discover new stories.
            </p>

            <div className="mt-10 border-l-4 border-blue-300 pl-5 italic">
              “Today a reader. Tomorrow a leader.”
            </div>

          </div>

          <button
            onClick={onSwitchToRegister}
            className="mt-10 hover:translate-x-2 transition"
          >
            → Create account
          </button>

        </div>

        {/* RIGHT */}
        <div
          className="
          w-full
          lg:w-1/2
          p-8
          "
        >

          <div className="uppercase text-[#365486] mb-2">
            Sign In
          </div>

          <h2 className="text-3xl font-black mb-8">
            Open Your Library
          </h2>

          <form className="space-y-5">

            <input
              type="email"
              placeholder="Email"
              className="
              w-full
              py-3
              border-b-2
              bg-transparent
              outline-none
              focus:outline-0
              focus:border-blue-500
              border-(--border-color)
              "
            />

            <input
              type="password"
              placeholder="Password"
              className="
              w-full
              py-3
              border-b-2
              bg-transparent
              outline-none
              focus:outline-0
              focus:border-blue-500
              border-(--border-color)
              "
            />

            <button
              className="
              w-full
              py-3
              bg-[#365486]
              text-white
              hover:bg-[#243B55]
              mt-4
              transition
              "
            >
              Sign In
            </button>

          </form>

        </div>

      </div>

      {/* CLOSE */}
      <button
        onClick={onClose}
        className="
          fixed
          top-6
          right-6
          pb-1.5
          z-100
          flex
          items-center
          justify-center
          w-12
          h-12
          bg-white/10
          backdrop-blur-md
          text-white
          text-3xl
          hover:bg-white/20
          hover:rotate-90
          transition
        "
      >
        ×
      </button>

    </div>
  );
}

export default LoginModal;