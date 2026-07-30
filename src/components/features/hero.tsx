import HeroImage from "@/assets/pet-image.jpg";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-center justify-between gap-20">

                <div className="w-1/2">

               <img 
               src={HeroImage}
               alt="Pet"
               className="w-full h-full object-cover rounded-lg"
               />

                </div>

                <div className="w-1/2">

                <h1 className="text-5xl font-medium mb-10">Welcome to <span className="font-bold text-6xl text-green-300">Celestine's Backyard!</span></h1>

                <p className="text-xl mb-10">Meet our adorable pets and discover their unique personalities.</p>

              
              <div className="flex mt-7 justify-center">
                <NavLink to="/pet">
                 <Button variant="primary">View Pets</Button>
              </NavLink>
              </div>
              

                </div>

            </div>

        </section>
    );
}