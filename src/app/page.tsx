import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ImageSlideshow from "@/components/ImageSlideshow";
import Navbar from "@/components/Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-16">
        <div className="container mx-auto p-3">
          {/* Your content goes here */}
          <h1 className="text-4xl font-bold mx-auto text-center pt-2 lg:pt-16">Gunarson s.r.o </h1>
          <h3 className="text-center font-bold pb-6 lg:pb-4">Zatepľujeme s láskou a precíznosťou</h3>
          <ImageSlideshow />
          <div className="text-center md:mx-6 lg:mx-16 mb-10 md:mb-22">
            <h1 id="onas" className="text-4xl font-semibold mb-2 mt-16 lg:pt-8">O nás</h1>
            <p className="text-lg md:text-xl">Naša firma sa venuje rôznym stavebným prácam, aktuálne najmä obnove a zatepleniu fasád bytových domov. V našom tíme je kombinácia mladých energických ľudí so staršími celoživotne skúsenými stavbármi. Našim heslom je: <span className="font-bold">Rýchlo a kvalitne!</span> V spolupráci s väčšími firmami máme skúsenosť s najmodernejšími postupmi kontaktného zatepľovania pre tie najvýššie štandardy na tepelnú izoláciu budov. Okrem iného máme dostatočne skúsenosti aj s inými murárskymi a stavebnými prácami. Pre viac info neváhajte použiť sekciu kontakt.</p>

            <div className="flex flex-row justify-center md:justify-around mt-4 md:mt-10 gap-x-1">
                <div className="flex w-32 h-32 md:w-80 md:h-80 bg-gray-600 rounded-2xl "></div>
                <div className="flex w-32 h-32 md:w-56 md:h-56 bg-gray-800 md:self-end  rounded-2xl" ></div>
                <div className="flex w-32 h-32 md:w-64 md:h-64 bg-gray-400 rounded-2xl" ></div>
            </div>
            <div className="flex flex-row justify-center md:justify-around mt-4 md:mt-10 gap-x-1">
                <div className="flex w-32 h-32 md:w-80 md:h-80 bg-gray-600 rounded-2xl order-3"></div>
                <div className="flex w-32 h-32 md:w-56 md:h-56 bg-gray-800 rounded-2xl order-1" ></div>
                <div className="flex w-32 h-32 md:w-64 md:h-64 bg-gray-400 rounded-2xl md:self-end" ></div>
            </div>

            <h1 id="kontakt" className="text-4xl font-semibold mt-16 md:mt-32 mb-4 md:mb-8 ">Kontakt</h1>
            <ContactForm/>
            <p className="text-md font-light">Alebo nás kontaktujte na tel. čísle:</p>
            <p>+421 904 297 194</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;