import { useState } from 'react'

type Props = {}
type ButtonsInRow = {
    [id: number]: number
}

const Counti = (props: Props) => {
    const [buttonsInRow, setButtonsInRow] = useState<ButtonsInRow>({
        1: 0,     
    })

    const addNum = (id: number, count: number) => {
        setButtonsInRow((prevState: ButtonsInRow) => ({
            ...prevState,
            [id]: prevState[id] + count,
        }))
    }

    return (
        <div className="buttonchiki">
            {Object.keys(buttonsInRow).map((buttonId) => (
                <div
                    className="butt"
                    key={buttonId}
                    onClick={() => addNum(parseInt(buttonId), 1)}
                >
                    Change count:  {'  '} (
                    {/* {buttonId}: */}
                    {buttonsInRow[parseInt(buttonId)]}  )
                </div>
            ))}
        </div>
    )
}
export default Counti
