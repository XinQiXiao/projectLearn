
import axiosServer from '@/utils/request';

const baseUrl = 'http://localhost:8080/demo';

const demoPostApi = function(params){
    return axiosServer({
        url: baseUrl+ '/postDemo',
        method: 'post',
        data: params
    })
}

const demoGetApi = function(){
    return axiosServer({
        url: baseUrl+ '/postDemo',
        method: 'get',
    })
}

export {
    demoPostApi,
    demoGetApi,
}