import apiService from './apiService';

const pasajeroService = {
    obtenerPasajeroPorEmail: async (email) => {
        return apiService.authGet(`/pasajeros/email/${email}`);
    }
};

export default pasajeroService;