import React from 'react'
import Language from './Language'
import { useTranslation } from 'react-i18next'

const HeaderTop = () => {
  const {t}=useTranslation()
  return (
    <>
      <div className="container-fluid bg-black header-top">
        <div className="row d-flex justify-content-end">
            
            <div className="col-2 d-flex justify-content-end">
                <span><h6 className='mx-2 text-light'>{t("Language")}</h6></span>
                <Language />
            </div>
        </div>
      </div>
    </>
  )
}

export default HeaderTop
