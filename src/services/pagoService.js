import apiService from './apiService';

const pagoService = {
    confirmarPago: async (idReserva, monto, metodoPago) => {
        return apiService.authPost('/pagos/confirmar', {
            idReserva,
            monto,
            metodoPago
        });
    },
    
    obtenerPagoPorReserva: async (idReserva) => {
        return apiService.authGet(`/pagos/reserva/${idReserva}`);
    }
};

export default pagoService;