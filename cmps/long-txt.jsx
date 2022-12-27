const { useState } = React

export function LongTxt({ txt, length }) {

    const [isLongTxtShown, setLongTxtShown] = useState(false)

    function getTxtToShow(isLongTxtShown, txt, length) {
        return (txt.length < length || isLongTxtShown) ? txt : txt.substring(0, length + 1) + '...'
    }

    // let firstTxt = ''

    // if (txt.length > length) {
    //     firstTxt = txt.substring(0, length + 1)
    // }

    function onToggleLongTxt() {
        setLongTxtShown((prevLongTxtShown) => !prevLongTxtShown)
    }

    return <div>
        <p>{getTxtToShow(isLongTxtShown, txt, length)}</p>
        {txt.length > length && <button onClick={onToggleLongTxt}>{isLongTxtShown ? 'Read Less' : 'Read More'}</button>}
    </div>

    // return <p>
    //     {txt.length < length && <div>
    //         {txt}
    //     </div>}
    //     {txt.length > length && <div>
    //         {!isLongTxtShown && <div>
    //             {firstTxt}
    //             <button onClick={() => onToggleLongTxt()}>Read More</button>
    //         </div>}
    //         {isLongTxtShown && <div>
    //             {txt}
    //             <button onClick={() => onToggleLongTxt()}>Read less</button>
    //         </div>
    //         }
    //     </div>}
    // </p>
}