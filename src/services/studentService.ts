import { ListRequest, ListResponse } from 'src/models/IPagingationResponse';

import APIService from 'src/services/baseService'
import { StudentResponse } from 'src/models/IStudentResponse';
import axios from 'axios';

const studentService = {
    getAll(params: ListRequest): any {
        return axios.get('/api/students', { params });
    },

    // getAll(params: ListRequest): any{
    //     return axios.get('/api/students', {params});
    // },
}

export default studentService;