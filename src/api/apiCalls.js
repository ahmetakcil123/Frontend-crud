import axios from 'axios';

export const createNewDevice = (device) => { 
    return axios.post('/api/1.0/device', device);
};

export const getDeviceList = () => { 
    return axios.get('/api/1.0/device/getAll');
};

// export const getDevice =(name) => { 
//     return axios.get = `/api/1.0/device/${name}`;
    
// }
export const deleteDevice = () => { 
    return axios.delete('/api/1.0/device/delete');
};

export const getDeviceId = (id) => {
    return axios.get(`/api/1.0/device/get/${id}`);
}



export const updateDevice = () => { 
    return axios.put('/api/1.0/device');
}