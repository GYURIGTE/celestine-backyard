import { Header } from "@/components/common/header";
import { Hero } from "@/components/features/hero";
import { Footer } from "@/components/common/footer";
import { About } from "@/components/features/about";


export default function HomePage() {
    return (
        <>
            <Header />
        
        <main>

            <Hero />
            <About />
           
        </main>


        <Footer />
        
        </>
    )
}
