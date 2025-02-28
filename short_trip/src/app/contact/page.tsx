

export default function Contact() {
  return (
      <main className="relative min-h-screen bg-background flex flex-col items-center justify-center">
        {/* Hero Image */}
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-cover bg-center" style={{backgroundImage: "url('/services-offered-contact-hero.jpg')"}}></div>
        <div className="relative pb-20 px-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-white mb-6">Get in Touch</h1>
          
        </div>
      </main>
  )
}