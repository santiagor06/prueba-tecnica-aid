import express,{Application} from "express"
import userRoute from "../routes/User"

class Server {
    private application:Application
    private port:string
    constructor() {
        this.application=express()
        this.port="3000"
        this.routes()
        
    }
    public run(){
        const showRun=()=>console.log("listening on port " + this.port)
        this.application.listen(this.port,showRun)
    } 
    private routes(){
        this.application.use(express.json())
        this.application.use("/users",userRoute)
    }      
}
export default Server