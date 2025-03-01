import { toast } from "react-toastify";

const toastSetup = {
    position: "top-center",
    autoClose: 2000,
}

export const avisoYaIngresado = () => {
    return toast.warn("Previamente Ingresado", toastSetup);
};

export const avisoNoPermitido = () => {
    return toast.error("Valor Invalido", toastSetup);
};