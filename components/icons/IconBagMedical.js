import IconSettings from "./IconSettings"
import { useState, useEffect } from 'react'

const IconBagMedical = (settings) => {
    const [iconSize, setIconSize] = useState(IconSettings.size.medium)
    const [iconFill, setIconFill] = useState(IconSettings.fill.black)

    useEffect(() => {
        if(settings.size !== iconSize) {
            setIconSize(settings.size)
        }

        if(settings.fill !== iconFill) {
            setIconFill(settings.fill)
        }
    }, [settings]) 

    const invertIconColor = (e) => {
        iconFill === IconSettings.fill.black
        ? setIconFill(IconSettings.fill.blue)
        : setIconFill(IconSettings.fill.black)
    }
    
    return (
        <svg onClick={invertIconColor} width={iconSize} height={iconSize} viewBox="0 0 24 19" xmlns="http://www.w3.org/2000/svg">
            <path fill={iconFill} d="M11.9984 8.75C12.4126 8.75 12.7484 9.08579 12.7484 9.5V11H14.2484C14.6626 11 14.9984 11.3358 14.9984 11.75C14.9984 12.1642 14.6626 12.5 14.2484 12.5H12.7484V14C12.7484 14.4142 12.4126 14.75 11.9984 14.75C11.5842 14.75 11.2484 14.4142 11.2484 14V12.5H9.74841C9.3342 12.5 8.99841 12.1642 8.99841 11.75C8.99841 11.3358 9.3342 11 9.74841 11H11.2484V9.5C11.2484 9.08579 11.5842 8.75 11.9984 8.75Z" />
            <path fill={iconFill} fillRule="evenodd" clipRule="evenodd" d="M15.3945 0.5H8.60849L8.59954 0.500053C8.18831 0.504964 7.78696 0.626739 7.44234 0.851165C7.09937 1.07451 6.82667 1.39034 6.65571 1.76211L4.98457 5.28764C4.78921 5.3303 4.59907 5.37493 4.41468 5.42152C3.39134 5.68011 2.48056 6.01478 1.8385 6.45266C1.20637 6.88377 0.641013 7.56939 0.84885 8.48319L2.4573 16.7571L2.46021 16.7713C2.56371 17.2536 2.82712 17.6867 3.20772 18.0005C3.58831 18.3143 4.06376 18.4902 4.55692 18.4998L4.57152 18.5H19.4225L19.4361 18.4998C19.9297 18.4909 20.4059 18.3153 20.7871 18.0015C21.1683 17.6876 21.4322 17.2541 21.5358 16.7713L21.5387 16.757L23.1462 8.48331C23.3566 7.56196 22.8591 6.84388 22.2044 6.36914C21.5631 5.90407 20.6495 5.56414 19.6289 5.31103C19.41 5.25675 19.1829 5.2057 18.9486 5.15783L17.3383 1.76207C17.1673 1.39032 16.8946 1.0745 16.5517 0.851165C16.207 0.626739 15.8057 0.50491 15.3945 0.5ZM18.2802 6.55621C18.2922 6.55873 18.3043 6.56096 18.3165 6.56289C18.6507 6.62474 18.9687 6.69275 19.2678 6.76693C20.2237 7.00398 20.9156 7.28741 21.3239 7.58348C21.7149 7.86702 21.7093 8.04208 21.6827 8.15401C21.6804 8.16393 21.6782 8.1739 21.6763 8.18391L20.0679 16.4625C20.0345 16.6119 19.9521 16.746 19.8338 16.8434C19.7153 16.9409 19.5678 16.9959 19.4145 17H4.58014C4.42721 16.9956 4.28001 16.9405 4.16187 16.8431C4.04372 16.7457 3.96149 16.6117 3.92809 16.4624L2.31873 8.18383C2.31679 8.17382 2.31464 8.16385 2.31229 8.15393L2.31169 8.15158C2.30428 8.12318 2.26605 7.9767 2.68365 7.6919C3.10849 7.40217 3.81753 7.11957 4.78217 6.87581C5.04925 6.80832 5.33101 6.74499 5.62545 6.68592C5.64095 6.68333 5.65635 6.68026 5.67163 6.67671C7.47521 6.31918 9.74697 6.11995 12.0387 6.09942C14.2868 6.07928 16.5072 6.23155 18.2802 6.55621ZM17.151 4.86792L15.9762 2.39051C15.9235 2.27524 15.8393 2.17728 15.7331 2.10813C15.6279 2.03964 15.5056 2.00218 15.3802 2H8.61381C8.48837 2.00218 8.36606 2.03964 8.26089 2.10813C8.15471 2.17728 8.07038 2.27521 8.01776 2.39048L8.01328 2.40028L6.79651 4.96712C8.41344 4.73848 10.2265 4.61559 12.0253 4.59948C13.7863 4.58371 15.5611 4.67 17.151 4.86792Z" />
        </svg>
    )
}

export default IconBagMedical;