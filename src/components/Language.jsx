import React from 'react'

import i18n from '../i18n';
import { Select, Space } from 'antd';

const Language = () => {

    const changeLang=(lang)=>{
        i18n.changeLanguage(lang)
        localStorage.setItem('lang',lang)
    }

    const changeLanguage=(lang)=>{
        if(lang=='az'){
            changeLang('az')
        }else if(lang=='en'){
            changeLang('en')
        }
        }

  return (
    <>
      <Select
            defaultValue={i18n.language}
            style={{
                width: 60,
                height:20,
                }}
            onChange={changeLanguage}
            options={[
                {
                    value: 'az',
                    label:  'AZ',
                },
                {
                    value: 'en',
                    label:  'EN',
                },
                                
                ]}
            />
    </>
  )
}

export default Language
