import React from "react";
import './style.scss';
import {Grid} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";
import {faClock, faCheckCircle, faTimesCircle} from "@fortawesome/free-regular-svg-icons";




export default function CheckoutSteps(){
    const { checkout } = useSelector( state => state.checkout);
    const {paymentStatus, paymentUrl, paymentBarcode} = checkout;




    switch(paymentStatus) {
        case 'waiting_payment':
            return (
                <Grid container className="checkout-status-wrapper" xs={12} md={12}>

                    <FontAwesomeIcon icon={faClock} size="4x" color="#FFD34E"/>
                    <span className="wait-text-title"> Aguardando pagamento</span>
                    <span className="wait-text-primary">Falta pouco! Pague o boleto para que o pagamento seja realizado.
                    Após pagamento, a aprovação pode ocorrer em até 3 dias úteis.</span>

                    <Grid item className="barcode" xs={12} md={10}>
                        <span className="wait-text-title-secondary"> Código de barras </span>
                        <span className="wait-text-secondary">{paymentBarcode}</span>
                    </Grid>

                    <Grid item className="wait-footer" xs={12} md={12}>
                        <a href={paymentUrl} className="wait-link-secondary" >Visualizar boleto</a>
                    </Grid>

                </Grid>
            )



        case 'paid':
            return (
                <Grid container className="checkout-status-wrapper" xs={12} md={12}>

                    <FontAwesomeIcon icon={faCheckCircle} size="4x" color="#6BBE46"/>
                    <span className="success-text-title"> Pagamento efetuado com sucesso!</span>
                    <span className="success-text-primary">Parabéns! Você deu o primeiro passo para aprender mais sobre
                    percepção de fertilidade e empoderar-se ainda mais do seu corpo.</span>
                    <span className="success-text-primary">Acesse a área da aluna com seu email e senha cadastrados para ter
                    acesso às videoaulas e materiais complementares. Aproveite!</span>

                    <a href="https://aluna.fluenciacorporal.com" className="success-link" >Área da aluna</a>

                </Grid>

            )



        case 'refused':
            return (
                <Grid container className="checkout-status-wrapper" xs={12} md={12}>

                    <FontAwesomeIcon icon={faTimesCircle} size="4x" color="#CA4B49"/>
                    <span className="fail-text-title"> Ops, algo deu errado com o pagamento!</span>
                    <span className="fail-text-primary">Infelizmente sua compra não foi aprovada. Verifique se os dados do seu cartão estão corretos ou tente outra forma de pagamento.</span>



                    <Link to="/" className="fail-link-primary" >Tentar outra vez</Link>




                </Grid>




            )



        default:
            return (
                alert("Ops! Algo deu errado. Por favor, informe ao suporte do sistema :(")
            )

    }


}
