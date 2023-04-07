import APIService from 'src/services/baseService';
import { ListRequest } from 'src/models/IPagingationResponse';

const studentService = {
    getAll(params: ListRequest): any {
        return APIService.get('/api/students', params);
    }
}

export default studentService;