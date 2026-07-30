import AboutImage from "@/assets/about-image.jpg";

export function About() {
    return (

       <main className="max-w-7xl mx-auto px-6 py-16">
            <section className="flex flex-col md:flex-row items-center justify-between gap-10">

                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-medium mb-6 text-center">
                        About
                    </h1>

                    <p className="text-lg text-gray-600 text-justify">Celestine's Backyard is a place where we share our love for animals. 
                    Every pet has a unique personality, and this website lets visitors get to know them through photos, stories, and fun facts.
                    </p>

                    <div className="space-y-2 mt-20">
                        <h2 className="text-xl font-semibold text-center">Our Location</h2>

                        <p className="mt-10 font-medium">📍Ibabao, Cordova, Cebu</p>
                        <p className="font-medium">📞 0967 491 3012</p>

                        <p className="mt-10 font-small text-lg">
                             Our pets are cared for in a peaceful backyard where they can play, rest, and enjoy a healthy environment.
                        </p>

                    </div>
                </div>

                  <div className="w-full md:w-1/2">
                    <img 
                    src={ AboutImage }
                    alt="about-image" 
                   className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                </div>
                
            </section>
        </main>
         
    )
}