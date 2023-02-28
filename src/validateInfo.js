import valid from 'card-validator'

export default function validateInfo(values){
    let errors = {}

    let creditCard = valid.number(values.number)
    creditCard.expiration = valid.expirationDate(values.expiration)
    creditCard.cardholderName = valid.cardholderName(values.name)
    creditCard.cvv= valid.cvv(values.ccvc)
    console.log(creditCard);

    errors.show = true
    errors.variant = 'danger'
    errors.message = 'An unknown error occured. Please try again later'
    errors.cname = false
    errors.cnumber = false
    errors.cexp = false
    errors.ccvc = false

    // cvv
    if(values.cvc===null || !values.cvc.trim()){
        errors.message = 'Credit Card CVV is not complete'
    }
    else if(creditCard.cvv.isValid){
        errors.ccvc=true
    }
    else{
        errors.message = 'Credit Card CVV is invalid'
    }

    //expiration
    if(values.expiration===null || !values.expiration.trim()){
        errors.message = 'Credit Card expiration date is not complete'
    }
    else if(creditCard.expiration.isValid){
        errors.cexp=true
    }
    else{
        errors.message = 'Credit Card expiration date is invalid'
    }

    //number
    if(values.number===null || !values.number.trim()){
        errors.message = 'Credit Card number is not complete'
    }
    else if(creditCard.isValid){
        errors.cnumber=true
    }
    else{
        errors.message = 'Credit Card number is invalid'
    }

    //cardholdername
    if(values.name===null || !values.name.trim()){
        errors.message = 'Credit Card Name is not complete'
    }
    else if(creditCard.cardHoldername.isValid){
        errors.cname=true
    }
    else{
        errors.message = 'Credit Card Name is invalid'
    }

    if(errors.cname && errors.cnumber && errors.ccvc & errors.cexp){
        errors.variant = 'success'
        errors.message = 'Credit Card is Valid'
    }



    return errors
}