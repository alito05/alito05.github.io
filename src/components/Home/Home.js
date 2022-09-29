/*
TO DO: 
    *Hide on scroll
*/
import React from 'react'
import ImageBtn from './ImageBtn'
const Home = () => {
  return (
    <div className='w-full m-auto'>
        <ImageBtn route={'all'} title={'ALL'} src={'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1584,c_limit/d55e7bb4-38ba-40dc-abb1-5b527e3c8528/marca-jordan.png'}/>
        <ImageBtn route={'kids'} title={'KIDS'} src={'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1584,c_limit/22953560-c7db-4617-ae29-cebb6a59a799/marca-jordan.jpg'}/>
        <div className='w-11/12 mx-auto flex justify-between' >
            <ImageBtn route={'women'} title={'WOMEN'} isDual={true} src={'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_786,c_limit/cc0f56e4-1e00-4821-90e3-f6a6b2b33f54/marca-jordan.jpg'}/>
            <ImageBtn route={'men'} title={'MEN'} isDual={true} src={'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_786,c_limit/cd62da5c-0bd9-4a42-a395-d7b31f73192a/marca-jordan.png'}/>
        </div>
        <ImageBtn route={`all/${Math.floor(Math.random()*10)+1}`} title={'ROLL DICE'} src={'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1584,c_limit/957a33a3-83b5-4c7d-a482-c2e41005f3f1/marca-jordan.png'}/>
    </div>
  )
}

export default Home