"use client";
import useBenefits from "@/Hooks/useBenefits";


const About = () => {

  const benefitsList = useBenefits();  

  return (
    <section className='w-full py-16'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
            <h2 className="h2 text-center">О нашем клубе</h2>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
              {benefitsList.length > 0 ? benefitsList.map((item, index) => {
                return (
                  <div key={index} className="w-full h-full border border-zinc-800 p-5 rounded-xl flex flex-col items-center justify-center gap-4">
                    <div className='w-[110px] h-[110px] flex items-center justify-center border border-white/70 text-accent rounded-full text-4xl font-semibold'>{item.attributes?.number}</div>
                    <h3 className="text-center text-3xl">{item.attributes?.title}</h3>
                  </div>
                )
              })
              :
              [1,2,3,4].map((item, index) => {
                return (
                  <div key={index} className="w-[240px] h-[240px] rounded-xl bg-zinc-800 animate-pulse"></div>
                );
              })}
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
