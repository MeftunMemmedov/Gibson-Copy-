import React from 'react'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const Contact = () => {
    const {t}=useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
    <div className="container-fluid ">
    <div className="row" style={{backgroundImage:'url(https://www.peachguitars.com/c/images/13/e5b4fe6bg-contact-jpg.jpg', backgroundSize:'cover',backgroundPositionY:'200px',height:'200px'}}>
            <div className="col-12 d-flex justify-content-center align-items-center">
            <h2 className='text-light' style={{fontSize:'80px'}}>{t("Contact Us")}</h2>
            </div>
        </div>
    </div>
      <div className="container fs-4">
       
        <div className="row py-5 text-start">
            <div className="col-md-6 col-12">
                <p>{t("We would love to hear from you if you have a question about any of our products.")}</p>
                <p>{t("Use the contact form on the right, call us, or just drop us an email.")}</p>
                <p>{t("To book an appointment, please make contact with the Gibson Sales team at service@gibson.com, on the phone at 01206 765 777 or via the 'view in showroom' tab on every product listing on our website. Our dedicated sales team will be in touch to discuss your requirements and arrange the best time for you to get yours hands on the guitar of your dreams.")}</p>

                <h6 className='text-warning'>{t("TELEPHONE:")}</h6>
                <p>01206 765 777</p>

                <h6 className='text-warning'>{t("EMAIL:")}</h6>
                <p>service@gibson.com</p>

                <h6 className='text-warning'>{t("ADDRESS:")}</h6>
                <ul className='list-unstyled'>
                    <li>3 Crown Gate</li>
                    <li>Wyncolls Road</li>
                    <li>Severalls Industrial Park</li>
                    <li>Colchester</li>
                    <li>CO4 9HZ</li>
                </ul>
                
            </div>

            <div className="col-md-6 col-12">
                <div className="row">
                    <div className="col-10 m-auto my-2">
                        <label htmlFor='name'>{t("Name")}</label>
                        <input type='text' id='name' className='w-100'/>
                    </div>
                    <div className="col-10 m-auto my-2">
                        <label htmlFor='email'>{t("Email")}</label>
                        <input type='text' id='email' className='w-100'/>
                    </div>
                    <div className="col-10 m-auto my-2" style={{height:'100px'}}>
                        <label htmlFor='message'>{t("Message")}</label>
                        <textarea className='w-100 h-100' id='message'></textarea>
                    </div>
                    <div className="col-6 my-5 m-auto">
                        <button className='btn btn-warning w-100'>{t("Submit")}</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
