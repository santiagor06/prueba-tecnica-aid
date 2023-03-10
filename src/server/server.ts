import express,{Application} from "express"
import carRoute from "../routes/Car"
import productRoute from "../routes/Product"
import userRoute from "../routes/User"

class Server {
    private application:Application
    private port:string
    constructor() {
        this.application=express()
        this.port="3000"
        this.config()
        this.routes()
        
    }
    public run(){
        const showRun=()=>console.log("listening on port " + this.port)
        this.application.listen(this.port,showRun)
    } 
    private routes(){
       
        this.application.use("/users",userRoute)
        this.application.use("/product",productRoute)
        this.application.use("/car",carRoute)
    } 
    private config(){
        this.application.use(express.json())
        
    }           
}
export default Server