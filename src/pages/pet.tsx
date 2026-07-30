import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Card } from "@/components/ui/card";

import CatImage from "@/assets/cat.jpg";
import SilkieImage from "@/assets/silkie.jpg";
import RabbitImage from "@/assets/rabbit.jpg";
import HamsterImage from "@/assets/hamster.jpg";
import GuineaImage from "@/assets/guinea.jpg";

export default function Pets() {
    return (

        <>
        <Header />

        <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
          
          {/* This is my 1st card */}
          <Card 
          image={ CatImage}
          title="Whitney" 
          description="A friendly cat that loves to play, sleep, and cuddle." 
          buttonLabel="Hello!" 
          buttonVariant="primary" />

          {/* 2nd */}
           <Card 
          image={ SilkieImage}
          title="Moana" 
          description="A fluffy Silkie chicken that loves walking around and staying with the flock." 
          buttonLabel="Hello!" 
          buttonVariant="primary" />
       
              {/* 3rd */}
           <Card 
          image={ RabbitImage}
          title="Cookies & Cream" 
          description="A gentle rabbit that enjoys hopping and eating fresh vegetables." 
          buttonLabel="Hello!" 
          buttonVariant="primary" />

           {/* 4th */}
           <Card 
          image={ HamsterImage}
          title="Hammy" 
          description="A small hamster that enjoys running, playing, and collecting food." 
          buttonLabel="Hello!" 
          buttonVariant="primary" />
 
          {/* 5th */}
           <Card 
          image={ GuineaImage}
          title="Lilac & Buknoy" 
          description="A cute guinea pig that loves fresh food and being with friends." 
          buttonLabel="Hello!" 
          buttonVariant="primary" />

          
        </section>
      </main>

        <Footer />
        </>
    )
}