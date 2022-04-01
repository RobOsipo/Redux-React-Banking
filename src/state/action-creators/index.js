

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'WITHDRAW',
            payload: {}
        })
    }
}

export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'DEPOSIT',
            payload: amount
        })
    }
}

