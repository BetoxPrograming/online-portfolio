import { HeroSectionSidebar } from './components/HeroSectionSidebar';
import { HeroSectionMobile } from './components/HeroSectionMobile';
import { About } from './components/About';
import { BackgroundNew } from './components/BackgroundNew';
import { Projects } from './components/Projects';
import { MouseLightEffect } from './components/MouseLightEffect';
import { ScrollToTop } from './components/ScrollToTop';
import { useState } from "react";


export default function App() {

    const [lang, setLang] = useState<"en" | "es">("en");

    const toggleLanguage = () => {
        setLang(prev => (prev === "en" ? "es" : "en"));
    };

    return (
        <div className="min-h-screen">
            <MouseLightEffect />

            {/* Fixed Hero - Desktop */}
            <HeroSectionSidebar lang={lang} />

            {/* Main Content Area (zona azul — NO se toca su ancho) */}
            <div className="lg:ml-[30%] lg:max-w-[70%] w-full">

                {/* Mobile Header */}
                <HeroSectionMobile lang={lang} />


                {/*Language Toggle
                    <button
                    type="button"
                    onClick={toggleLanguage}
                    className="fixed top-4 right-4 z-50 relative h-10 w-20 rounded-full border border-white/40 bg-[#48659C] overflow-hidden"
                >
                     Text
                    <span
                        className={`absolute inset-0 flex items-center justify-center text-sm font-bold text-white transition-opacity ${
                            lang === "en" ? "opacity-100" : "opacity-60"
                        }`}
                    >
          {lang === "en" ? "EN" : "ES"}
        </span>

                     Knob
                    <span
                        className={`absolute top-1 left-1 h-8 w-8 rounded-full bg-white shadow transition-all duration-300 ${
                            lang === "en" ? "translate-x-10" : "translate-x-0"
                        }`}
                    />
                </button>*/}

                {/* Scrollable Content — ancho controlado */}
                <div className="w-full max-w-[880px] mx-auto px-6 lg:px-12">
                    <main>
                        <About lang={lang} />
                        <BackgroundNew lang={lang} />
                        <Projects lang={lang} />
                    </main>
                </div>

            </div>

            <ScrollToTop />
        </div>
    );



}