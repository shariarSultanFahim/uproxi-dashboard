export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
      {/* Left Panel - Image Area */}
      <div className="hidden lg:flex flex-col relative w-full h-full text-white overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/login-bg.jpg')" }}
        />
        {/* Gradient Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        <div className="relative z-10 flex flex-col justify-end h-full p-12 lg:p-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-tight">
            Centralized Control,<br/>
            Simplified
          </h1>
          <p className="text-lg text-slate-200 max-w-md">
            From daily operations to long-term management, oversee
            everything in one place and keep the system running smoothly
            year-round.
          </p>
        </div>
      </div>

      {/* Right Panel - Form Area */}
      <div className="flex flex-col w-full h-full min-h-screen bg-white shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.1)] z-10">
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 lg:px-16 w-full max-w-md mx-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
