import axios, { AxiosInstance, Method } from "axios";
import { HttpClient, Request, Response } from "./core";

class AxiosClient implements HttpClient {
    private axiosInstance: AxiosInstance;

    constructor(baseUrl: any, headers?: any){
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            headers: headers,
        
        })
    }
    get<ReqBody extends unknown, RespBody extends unknown>(req: Request<ReqBody>): Promise<Response<RespBody>> {
        return this.makeRequest("GET", req)
    }

    post<ReqBody extends unknown, RespBody extends unknown>(req: Request<ReqBody>): Promise<Response<RespBody>> {
        return this.makeRequest("POST", req)
    }
    patch<ReqBody extends unknown, RespBody extends unknown>(req: Request<ReqBody>): Promise<Response<RespBody>> {
        return this.makeRequest("PATCH", req)
    }
    delete<ReqBody extends unknown, RespBody extends unknown>(req: Request<ReqBody>): Promise<Response<RespBody>> {
        return this.makeRequest("DELETE", req)
    }

    

    // post(url: Request['url'], data: object, config?:AxiosRequestConfig): Promise<Response> {
    //     return this.axiosInstance.post(url,data, config ).then(

    //     ).catch(
    //         err => err
    //     )
    // }

    // patch(url: Request['url'], data: object, config?:AxiosRequestConfig): Promise<Response> {
    //     return this.axiosInstance.post(url,data, config ).then(
    //         data => data
    //     ).catch(
    //         err => err
    //     )
    // }

    // delete(url: string, data: string): Promise<Response>{
    //     return this.axiosInstance.delete(`${url}/${data}`).then().catch(err => err)
    // }

    private makeRequest<ReqBody extends unknown, ResBody extends unknown>(method: Method, request: Request<ReqBody>): Promise<Response<ResBody>> {
        return this.axiosInstance.request({method, ...request}).then((res)=>{
            return res.data;
        }).catch(err => err)
    }
    
}

export default AxiosClient

