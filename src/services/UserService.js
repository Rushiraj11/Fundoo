import AxiosService  from "./AxioService";

const axiosService = new AxiosService();

class UserService {
    Registeration (url, data){
        return axiosService.Post(url,data);
    }
    Login (url, data){
        return axiosService.Post(url,data);
    }
    Forget(url, data){
        return axiosService.Post(url,data);
    }
    Reset(url, data){
        return axiosService.Post(url, data);
    }
}

export default UserService;