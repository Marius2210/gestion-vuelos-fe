import apiService from './apiService';

const reservaService = {
    crearReserva: async (idVuelo, idPasajero, asientoPreferencia, idTarifa) => {
        return apiService.authPost('/reservas/crear', {
            idVuelo,
            idPasajero,
            asientoPreferencia,
            idTarifa
        });
    },
    
    // Obtener reserva por código
    obtenerReserva: async (codigoReserva) => {
        return apiService.authGet(`/reservas/${codigoReserva}`);
    },
    
    cancelarReserva: async (codigoReserva) => {
        return apiService.authPut(`/reservas/cancelar/${codigoReserva}`);
    },

    obtenerReservasPorPasajero: async (idPasajero) => {
        return apiService.authGet(`/reservas/pasajero/${idPasajero}`);
    }
};

export default reservaService;