const actions = {
    setStep: function(step) {
        return {
            type: "setStep",
            step
        };
    },

    setLogin: function(login) {
        return {
            type: "setLogin",
            login
        };
    },


    setName: function(name) {
        return {
            type: "setName",
            name
        };
    },
    setEmail: function(email) {
        return {
            type: "setEmail",
            email
        };
    },

    setPassword: function(password) {
        return {
            type: "setPassword",
            password
        };
    },

    setProduct: function(productTitle, productPrice) {
        return {
            type: "setProduct",
            payload: {
                productTitle,
                productPrice
            }

        };
    },



    setStreet: function(street) {
        return {
            type: "setStreet",
            street
        };
    },

    setStreetNumber: function(streetNumber) {
        return {
            type: "setStreetNumber",
            streetNumber
        };
    },

    setZipcode: function(zipcode) {
        return {
            type: "setZipcode",
            zipcode
        };
    },

    setCountry: function(country) {
        return {
            type: "setCountry",
            country
        };
    },

    setStateAd: function(stateAd) {
        return {
            type: "setStateAd",
            stateAd
        };
    },

    setCity: function(city) {
        return {
            type: "setCity",
            city
        };
    },

    setCoupon: function(coupon) {
        return {
            type: "setCoupon",
            coupon
        };
    },

    setFinalPrice: function(finalPrice) {
        return {
            type: "setFinalPrice",
            finalPrice
        };
    },

    setCardHolderName: function(cardHolderName) {
        return {
            type: "setCardHolderName",
            cardHolderName
        };
    },

    setBirthday: function(birthday) {
        return {
            type: "setBirthday",
            birthday
        };
    },

    setPhoneNumber: function(phoneNumber) {
        return {
            type: "setPhoneNumber",
            phoneNumber
        };
    },

    setInstallments: function(installments) {
        return {
            type: "setInstallments",
            installments
        };
    },

    setDocumentType: function(documentType) {
        return {
            type: "setDocumentType",
            documentType
        };
    },

    setCardNumber: function(cardNumber) {
        return {
            type: "setCardNumber",
            cardNumber
        };
    },

    setCardCvv: function(cardCvv) {
        return {
            type: "setCardCvv",
            cardCvv
        };
    },

    setCardExpirationDate: function(cardExpirationDate) {
        return {
            type: "setCardExpirationDate",
            cardExpirationDate
        };
    },

    setDocumentNumber: function(documentNumber) {
        return {
            type: "setDocumentNumber",
            documentNumber
        };
    },

    setPaymentStatus: function(paymentStatus) {
        return {
            type: "setPaymentStatus",
            paymentStatus
        };
    },

    setPaymentUrl: function(paymentUrl) {
        return {
            type: "setPaymentUrl",
            paymentUrl
        };
    },

    setPaymentBarcode: function(paymentBarcode) {
        return {
            type: "setPaymentBarcode",
            paymentBarcode
        };
    },

};

export default actions;