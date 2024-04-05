import React, { useContext, useEffect } from 'react'
import { MyContext } from '../context/GlobalContext'
import { useTranslation } from 'react-i18next'

const FAQ = () => {
    const [products, setProducts, isLoggedIn, setIsLoggedIn,theme, setTheme, changeTheme]=useContext(MyContext)
    const {t}=useTranslation()

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
    <>
      <div className='container-fluid'>
        <div className="row" style={{backgroundImage:'url(https://www.peachguitars.com/c/images/13/1620232734_8848.jpg)', backgroundSize:'cover',backgroundPositionY:'200px',height:'200px'}}>
            <div className="col-12 d-flex justify-content-center align-items-center" >
                <h2 className='text-light' style={{fontSize:'80px'}}>{t("Frequently Asked Questions")}</h2>
            </div>
        </div>
        <div className='row py-5'>
          
          <div className='col-11 m-auto mb-5'>

            <div className={`text-start ${theme}`} id="accordionExample" >

              <div className="accordion-item">
                <h2 className={`accordion-header  ${theme=='bg-black text-light'?'text-warning':'text-dark'}`}>
                  <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  {t("Can I custom order a Gibson?")}       
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <p>{t("Yes, please consult with an authorized Gibson Custom Dealer for information on our Made to Measure custom order program.")}</p>                  
                  <hr />
                  </div>
                </div>
              </div>

              <div className="accordion-item">
              <h2 className={`accordion-header  ${theme=='bg-black text-light'?'text-warning':'text-dark'}`}>                  
              <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              {t("Can I have my Gibson repaired at the factory?")}
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>{t("Absolutely. Gibson Repair & Restoration is now accepting most brands of stringed instruments in need of attention at our in-house repair and restoration facility. Offering a staff of highly skilled and experienced luthiers in our state-of-the-art climate-controlled environment, Gibson is fully equipped to perform any operations required in all phases of repair and restoration. Gibson Repair & Restoration provides quotes for non-warranty repair & restoration services for customers in North America only. For more information please visit Gibson Repair & Restoration.")}</p>                  
                    <hr />
                  </div>
                </div>
              </div>

              <div className="accordion-item">
              <h2 className={`accordion-header  ${theme=='bg-black text-light'?'text-warning':'text-dark'}`}>       
                  <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  {t("Does Gibson offer factory tours?")}
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <p>{t("Currently, our manufacturing facilities do not offer in-person tours. For an in-depth look at what goes into making every Gibson guitar, please see our award-winning video series “The Process” on Gibson TV.")}</p>



                    <hr />
                  </div>
                </div>
              </div>

              <div className="accordion-item">
              <h2 className={`accordion-header  ${theme=='bg-black text-light'?'text-warning':'text-dark'}`}>                  
              <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              {t("Does Gibson offer product donations?")}
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <p>{t("Founded in 2002, Gibson Gives is committed to making the world a better place for children by creating, developing and supporting programs and other non-profit organizations in their efforts to advance education, music and the arts, the environment and health & welfare causes.If you feel your program would make a good partnership or you have a cause that you feel we should consider for support, please visit Gibson Gives.")}</p>                  
                  </div>
                </div>
              </div>

              <div className="accordion-item">
              <h2 className={`accordion-header  ${theme=='bg-black text-light'?'text-warning':'text-dark'}`}>                  
              <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              {t("Does Gibson sell direct?")}
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <p>{t("Yes, and there are many advantages to buying direct from the manufacturer. Most of our products are available to purchase direct from our website. Please see https://www.gibson.com/Store/Policies for questions specific to purchasing direct.")}</p>                  
                  </div>
                </div>
              </div>

              <div className="accordion-item">
              <h2 className={`accordion-header  ${theme=='bg-black text-light'?'text-warning':'text-dark'}`}>                  
              <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              {t("Do you charge sales tax?")}
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <p>{t("We are required to collect sales tax for orders shipping to certain United States destinations. The tax amount paid is based on the shipping address and will be presented during the checkout process.If you are shipping to a country outside of the USA, the Gibson Online Store will NOT charge you for any applicable import tax, customs duty, brokerage fees, or VAT charges. Any additional charges (if required by YOUR country) will be collected by FedEx when the product is delivered, or by a third-party brokerage firm (where applicable). To determine what these charges will be, you should contact either your local government or your local FedEx office. The Gibson Online Store is required by U.S. law to declare an accurate monetary value on all shipments.")}</p>                  
                  </div>
                </div>
              </div>

              <div className="accordion-item">
              <h2 className={`accordion-header  ${theme=='bg-black text-light'?'text-warning':'text-dark'}`}>                  
              <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              {t("Do you have an online warranty registration?")}
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <p>{t("Yes, and we encourage you to register your Gibson product at our Warranty Registration page.")}</p>                  
                  </div>
                </div>
              </div>

              <div className="accordion-item">
              <h2 className={`accordion-header  ${theme=='bg-black text-light'?'text-warning':'text-dark'}`}>                  
              <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
              {t("How do I make an order change or cancellation?")}
                  </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <p>{t("In order to make changes to, or cancel an order, it must be within 24 hours of placing the initial order and standard shipping must be selected as the shipping option. If the order meets these criteria, please contact us at 1-800-444-2766. We work hard to ship orders as fast as possible, so it may not always be possible to cancel an order.")}</p>                  
                  </div>
                </div>
              </div>

             

              <div className="accordion-item">
              <h2 className={`accordion-header  ${theme=='bg-black text-light'?'text-warning':'text-dark'}`}>                 
              <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
              {t("How do I pack instruments for shipping?")}
                  </button>
                </h2>
                <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <p>{t("How do I pack instruments for shipping?")}</p>                  
                  </div>
                </div>
              </div>

              
              
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ
