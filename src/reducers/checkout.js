const INITIAL_STATE = {
    checkout: {
        user: localStorage.getItem('id'),
        name: '',
        email: '',
        password: '',
        created: new Date(),
        step: 1,
        login: false,
        productTitle: '',
        productPrice: '',

    },
    message: '',
};

export default function checkout(state = INITIAL_STATE, action){
    switch(action.type) {

        case "setStep":
            return {
                ...state,
                checkout: {...state.checkout, step: action.step},
            }

        case "setLogin":
            return {
                ...state,
                checkout: {...state.checkout, login: action.login},
            }

        case "setName":
            return {
                ...state,
                checkout: {...state.checkout, name: action.name},
            }
        case "setEmail":
            return {
                ...state,
                checkout: {...state.checkout, email: action.email},
            }
        case "setPassword":
            return {
                ...state,
                checkout: {...state.checkout, password: action.password},
            }


        case "setProduct":
            return {
                ...state,
                checkout: {...state.checkout, productTitle: action.payload.productTitle, productPrice: action.payload.productPrice},
            }


        case "setPaymentMethod":
            return {
                ...state,
                checkout: {...state.checkout, paymentMethod: action.paymentMethod},
            }



            case "setBirthday":
            return {
                ...state,
                checkout: {...state.checkout, birthday: action.birthday},
            }

            case "setPhoneNumber":
                return {
                    ...state,
                    checkout: {...state.checkout, phoneNumber: action.phoneNumber},
                }

        case "setStreet":
            return {
                ...state,
                checkout: {...state.checkout, street: action.street},
            }

        case "setStreetNumber":
            return {
                ...state,
                checkout: {...state.checkout, streetNumber: action.streetNumber},
            }

        case "setZipcode":
            return {
                ...state,
                checkout: {...state.checkout, zipcode: action.zipcode},
            }

        case "setCoupon":
            return {
                ...state,
                checkout: {...state.checkout, coupon: action.coupon},
            }

        case "setFinalPrice":
            return {
                ...state,
                checkout: {...state.checkout, finalPrice: action.finalPrice},
            }


        case "setCountry":
            return {
                ...state,
                checkout: {...state.checkout, country: action.country},
            }

        case "setStateAd":
            return {
                ...state,
                checkout: {...state.checkout, stateAd: action.stateAd},
            }

        case "setCity":
            return {
            ...state,
            checkout: {...state.checkout, city: action.city},
            }

        case "setCardHolderName":
            return {
            ...state,
            checkout: {...state.checkout, cardHolderName: action.cardHolderName},
            }

        case "setInstallments":
            return {
            ...state,
            checkout: {...state.checkout, installments: action.installments},
            }

        case "setDocumentType":
            return {
            ...state,
            checkout: {...state.checkout, documentType: action.documentType},
            }

        case "setCardNumber":
            return {
            ...state,
            checkout: {...state.checkout, cardNumber: action.cardNumber},
            }

        case "setCardCvv":
            return {
            ...state,
            checkout: {...state.checkout, cardCvv: action.cardCvv},
            }

        case "setCardExpirationDate":
            return {
            ...state,
            checkout: {...state.checkout, cardExpirationDate: action.cardExpirationDate},
            }

        case "setDocumentNumber":
            return {
                ...state,
                checkout: {...state.checkout, documentNumber: action.documentNumber},
            }

        case "setPaymentStatus":
            return {
                ...state,
                checkout: {...state.checkout, paymentStatus: action.paymentStatus},
            }

        case "setPaymentUrl":
            return {
                ...state,
                checkout: {...state.checkout, paymentUrl: action.paymentUrl},
            }

        case "setPaymentBarcode":
            return {
                ...state,
                checkout: {...state.checkout, paymentBarcode: action.paymentBarcode},
            }


        default:
            return state
    }
}