// services/adminService.js
import apiService from './apiService';

const adminService = {
    // ==================== ESTADÍSTICAS ====================
    
    getEstadisticas: async () => {
        return apiService.authGet('/admin/estadisticas');
    },

    // ==================== GESTIÓN DE USUARIOS ====================

    listarUsuarios: async () => {
        return apiService.authGet('/admin/usuarios');
    },
    

    obtenerUsuario: async (id) => {
        return apiService.authGet(`/admin/usuarios/${id}`);
    },
    
    // Activar/Desactivar usuario
    toggleUsuarioEstado: async (id) => {
        return apiService.authPut(`/admin/usuarios/${id}/estado`);
    },

    eliminarUsuario: async (id) => {
        return apiService.authDelete(`/admin/usuarios/${id}`);
    },
    

    eliminarUsuarioPorEmail: async (email) => {
        return apiService.authDelete(`/admin/usuarios/email/${email}`);
    },

    // ==================== GESTIÓN DE AEROLÍNEAS ====================

    listarAerolineas: async () => {
        return apiService.authGet('/admin/aerolineas');
    },

    obtenerAerolinea: async (id) => {
        return apiService.authGet(`/admin/aerolineas/${id}`);
    },
    
    crearAerolinea: async (data) => {
        return apiService.authPost('/admin/aerolineas', data);
    },
    
    actualizarAerolinea: async (id, data) => {
        return apiService.authPut(`/admin/aerolineas/${id}`, data);
    },
    
    eliminarAerolinea: async (id) => {
        return apiService.authDelete(`/admin/aerolineas/${id}`);
    },

    eliminarAerolineaPorCodigo: async (codigoIata) => {
        return apiService.authDelete(`/admin/aerolineas/codigo/${codigoIata}`);
    },

    // ==================== GESTIÓN DE AVIONES ====================
    
    listarAviones: async () => {
        return apiService.authGet('/admin/aviones');
    },
    
    listarAvionesPorAerolinea: async (idAerolinea) => {
        return apiService.authGet(`/admin/aviones/aerolinea/${idAerolinea}`);
    },

    obtenerAvion: async (id) => {
        return apiService.authGet(`/admin/aviones/${id}`);
    },

    obtenerEstadisticasAvion: async (id) => {
        return apiService.authGet(`/admin/aviones/${id}/estadisticas`);
    },

    crearAvion: async (data) => {
        return apiService.authPost('/admin/aviones', data);
    },
    
    actualizarAvion: async (id, data) => {
        return apiService.authPut(`/admin/aviones/${id}`, data);
    },
    
    eliminarAvion: async (id) => {
        return apiService.authDelete(`/admin/aviones/${id}`);
    },

    // ==================== GESTIÓN DE VUELOS ====================
    
    listarVuelos: async () => {
        return apiService.authGet('/admin/vuelos');
    },
    
    obtenerVuelo: async (id) => {
        return apiService.authGet(`/admin/vuelos/${id}`);
    },
    
    obtenerVueloPorNumero: async (numeroVuelo) => {
        return apiService.authGet(`/admin/vuelos/numero/${numeroVuelo}`);
    },

    crearVuelo: async (data) => {
        return apiService.authPost('/admin/vuelos', data);
    },
    
    actualizarVuelo: async (id, data) => {
        return apiService.authPut(`/admin/vuelos/${id}`, data);
    },
    
    eliminarVuelo: async (id) => {
        return apiService.authDelete(`/admin/vuelos/${id}`);
    },

    cambiarEstadoVuelo: async (id, estado) => {
        return apiService.authPut(`/admin/vuelos/${id}/estado?estado=${estado}`);
    },
    
    agregarTarifa: async (idVuelo, data) => {
        return apiService.authPost(`/admin/vuelos/${idVuelo}/tarifas`, data);
    },

    // ==================== GESTIÓN DE TRIPULACIÓN ====================
 
    listarTripulantes: async () => {
        return apiService.authGet('/admin/tripulacion');
    },
    
    listarTripulantesPorAerolinea: async (idAerolinea) => {
        return apiService.authGet(`/admin/tripulacion/aerolinea/${idAerolinea}`);
    },

    listarTripulantesPorCargo: async (cargo) => {
        return apiService.authGet(`/admin/tripulacion/cargo/${cargo}`);
    },
 
    obtenerTripulante: async (id) => {
        return apiService.authGet(`/admin/tripulacion/${id}`);
    },
    
    obtenerEstadisticasTripulante: async (id) => {
        return apiService.authGet(`/admin/tripulacion/${id}/estadisticas`);
    },
    
    crearTripulante: async (data) => {
        return apiService.authPost('/admin/tripulacion', data);
    },
    
    actualizarTripulante: async (id, data) => {
        return apiService.authPut(`/admin/tripulacion/${id}`, data);
    },

    eliminarTripulante: async (id) => {
        return apiService.authDelete(`/admin/tripulacion/${id}`);
    },


    // ==================== TRIPULACIÓN DE VUELOS ====================

asignarTripulantes: async (idVuelo, idsTripulantes) => {
    return apiService.authPost('/admin/vuelos/asignar-tripulantes', {
        idVuelo,
        idsTripulantes
    });
},

obtenerTripulantesVuelo: async (idVuelo) => {
    return apiService.authGet(`/admin/vuelos/${idVuelo}/tripulantes`);
},

removerTripulanteVuelo: async (idVuelo, idTripulante) => {
    return apiService.authDelete(`/admin/vuelos/${idVuelo}/tripulantes/${idTripulante}`);
},

obtenerTripulantesDisponibles: async (idVuelo) => {
    return apiService.authGet(`/admin/vuelos/${idVuelo}/tripulantes-disponibles`);
},
};

export default adminService;