import axios from "axios";

class AxiosService {
    Post(url, data){
        return axios.post(url, data);
    }

}

export default AxiosService;