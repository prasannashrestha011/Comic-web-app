 'use client'
 const GetDomElements=()=>{
    const BtnColor=document.querySelector('.main-navbar-btn') as HTMLElement
    const CardTheme=document.querySelector('.card-theme') as HTMLElement
    const NavBarBtn=document.querySelector('.main-navbar-btns') as HTMLElement
return {BtnColor,CardTheme,NavBarBtn}
}

export {GetDomElements}