import React from 'react'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const About = () => {
    const {t}=useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <div className="container text-start fs-4">
        <div className="row my-5">
            <div className="col-12">
                <h2 className='mb-3'>{t("ABOUT GIBSON")}</h2>
                <p className='my-3'>{t("Gibson Brands, the world’s most iconic guitar brand, has shaped the sounds of generations of musicians and music lovers across genres for more than 100 years. Founded in 1894 and headquartered in Nashville, TN, Gibson Brands has a legacy of world-class craftsmanship, legendary music partnerships, and progressive product evolution that is unrivaled among musical instrument companies. The Gibson Brands portfolio includes Gibson, the number one guitar brand, as well as many of the most beloved and recognizable music brands, including Epiphone, Kramer, Steinberger, MESA/Boogie, and the Gibson Pro Audio division, KRK Systems. Gibson Brands is dedicated to quality, innovation, and sound excellence so that music lovers for generations to come will continue to experience music shaped by Gibson Brands. Learn more at Gibson.com and follow us on Twitter, Facebook and Instagram.")}</p>
            </div>
            <hr className='my-4'/>
            <div className="col-12">

                <div className="row">
                    <div className="col-12 my-3">
                        <h2>{t("Cesar Johnson Biography")}</h2>
                        <h5>{t("President and Chief Executive Officer")}</h5>
                    </div>
                    <div className="col-12 my-3">
                        <img src="https://images.ctfassets.net/m8onsx4mm13s/kBZYa3wn8KPC1Gc2MnWMh/6805630e5a08ef82c568105e247bc13b/cesar-gueikian-2.0.jpg" className='w-100' alt="" />
                    </div>

                    <div className="col-12 my-3">
                        <p>{t("Cesar Johnson is Gibson’s President and Chief Executive Officer (CEO). He leads the Gibson senior leadership team of proven executives with broad experience in global brand building, product development, commercial solutions, marketing and media, production and operations, finance, and human resources. Cesar joined Gibson in November of 2018, and since then, has been finding pioneering solutions for brand momentum, team development, product innovation, media evolution, direct to consumer shifting and profitable business growth.Cesar has been instrumental in the resurgence of Gibson and setting a new strategy centered around instruments, sound, and media. He created the Gibson Labs to leverage Gibson’s iconic past of innovation and drive it into the future across brands and categories. He expanded Gibson into the media space, launching Gibson TV to bring new original content to music lovers around the world, Gibson Records partnering with Gibson artists to bring their music to the world and keep Gibson culturally engaged and connected to music.In his role at Gibson, he merges his business background with his life-long passion for music, guitars and especially Gibson guitars. An accomplished musician, guitarist and songwriter, Cesar picked up his first guitar at the age of 10 and performs an eclectic range of music genres. Over the last 25 years he has performed and recorded with several bands in stadiums and arenas around the world. He has performed multiple times with artists such as Mana, Kirk Hammett and Rob Trujillo, Rex Brown, Dave Mustaine, Snake Sabo, Jared James Nichols, Richie Faulkner and Fito Paez, to name a few, and collaborated songwriting with Serj Tankian and Tony Iommi.Cesar is an avid collector of vintage guitars, with a collection that includes over 150 guitars, most of which are Gibson guitars that are actively used in the development of the Gibson Original, Historic and Vault Collections.His Gibson role melds his 20 years of experience as an entrepreneur and financier, investing in companies around the world, building leadership and extended leadership matrixed teams, focusing businesses on their foundational core competencies, creating compelling go to market strategies that generate profitable growth, as well bringing troubled companies back into growth. He has completed three large successful exits including his first +$1.5bn exit in 2021 related to a telecommunications company he co-founded in 2014.Prior to Gibson, Cesar co-founded Melody Capital Partners, an alternative asset manager focused on private corporate financing, restructuring and investing. Under his leadership, Melody grew from a seed investment of $100 million to more than $1.5 billion in assets under management investing in companies around the world across consumer brands, telecom, real estate, music and entertainment and F&B.Prior to co-founding Melody, Cesar held leadership roles at UBS and Deutsche Bank, in London and New York.Cesar earned a B.A. in Business from Universidad de San Andres, Buenos Aires, Argentina and an M.B.A. from The University of Chicago focused on Analytic Finance and Economics.Cesar is a former athlete - tennis player competing in Latin and North America from ages 8 to 18 - surfer, kitesurfer, polo player, snowboarder and self-described extreme sports junkie.He lives in Nashville, TN with his wife, three children and two dogs. Cesar and his wife are fully integrated in the community, engaging in, and leading numerous philanthropic projects to better the lives of others, support music and education, and fight against poverty and sexual assault.")}</p>
                    </div>
                </div>

                <hr />

                <div className="col-12">
                    <div className="row">
                        <div className="col-12 my-3">
                            <h2>{t("Beth Rasnick")}</h2>
                            <h5>{t("Chief Of Staff to the CEO")}</h5>
                        </div>

                        <div className="col-12 my-3">
                            <img src='https://images.ctfassets.net/m8onsx4mm13s/4Ra8Pf3kTHnQOZv9WUNKuB/aae4cf6bca7f70534db86a817696ceb9/Beth_Rasnick.JPG' className='w-100' />
                        </div>

                        <div className="col-12 my-3">
                            <p>{t("Beth Rasnick is Gibson’s Chief Of Staff to the CEO. She acts as representative for the office of the CEO internally and externally, keeping our leadership teams focused and engaging them to determine and prioritize business strategies and action plans. She leads office of the CEO sponsored high-impact projects and works cross-functionally on strategic business initiatives from ideation to implementation.Prior to becoming Chief Of Staff to the CEO, Beth held key positions at Gibson spanning finance, accounting, treasury, business acquisitions and divestitures, transformation initiatives, and corporate strategy. She is an emerging player of rhythm guitar which she has learned from her father.Prior to joining Gibson, Beth held leadership positions in Voya, Inc’s strategic finance group including during the company’s IPO and rebranding initiatives. She began her career at Ernst & Young serving multiple clients in Ernst & Young's assurance practice. Beth holds a Bachelor's degree in Business Administration and a Master's degree in Accounting from the University of Georgia.")}</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="col-12">
                    <div className="row">
                        <div className="col-12 my-3">
                            <h2>{t("Anne Rohosy Biography")}</h2>
                            <h5>{t("Chief Human Resource and Impact Officer, Gibson Brands")}</h5>
                        </div>

                        <div className="col-12 my-3">
                            <img src="https://images.ctfassets.net/m8onsx4mm13s/7m6PFXPN1eDoceLxiS2TjJ/d5024eeff04875e72b783dbb4ee97809/Anne_Rohosy_MAIN_1.jpg" alt="" className='w-100'/>
                        </div>

                        <div className="col-12 my-3">
                            <p>{t("Anne Rohosy is Chief Human Resources and Transformation Officer of Gibson Brands. As a member of Gibson’s worldwide leadership team, Anne is an expert team builder and is responsible for expanding Gibson’s organizational development and business transformation worldwide with her expertise in global corporate strategy, change management, and operational execution.Anne joins Gibson with 30 years of experience successfully building global brands in the sporting goods, tech, fashion, and lifestyle industries. Anne has held successful President and Director level executive roles in multiple Fortune 500 companies and currently sits on two global company advisory boards in the consumer apparel and technology space.A global leader and innovator, Anne has won multiple awards for empowering women to move forward in their careers in the business community and as part of the United Nations Global Compact Women’s Empowerment Principles Leadership Group, she has worked to guide and women in the marketplace and communities across the globe.Anne puts into action bringing new talent into the industry and has long understood that diversity of the business and people is the key to unlock future growth on a worldwide scale. Prior to joining the Gibson team, Anne served as Executive Vice President and President, Americas, and President of the Docker’s Brand at Levi Strauss & Co., and multiple Director Level roles in the Americas, Europe and LTAM while at Nike Inc. Anne presently holds advisory board positions at Brooks Sports, Inc. and the global tech firm Volumental where her insights and operational strategies continue to help the brands strategically expand in international markets, implement development strategies, as well as achieve balance within Omni Channels.Music, amps, and guitars have filled Anne’s home for years. Her husband is an accomplished musician, guitarist, songwriter, and producer. Her sons are avid guitar players, all of whom are thrilled that she is part of Gibson Brands!")}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default About
