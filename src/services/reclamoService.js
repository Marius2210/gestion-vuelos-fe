import apiService from './apiService';

const reclamoService = {
    enviarReclamo: async (idReserva, descripcion) => {
        return apiService.authPost('/reclamos/enviar', {
            idReserva,
            descripcion
        });
    },
    
    obtenerReclamosPorReserva: async (idReserva) => {
        return apiService.authGet(`/reclamos/reserva/${idReserva}`);
    }
};

export default reclamoService;