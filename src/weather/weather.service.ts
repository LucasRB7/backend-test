import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
    
    getTime(){
        return "https://api.hgbrasil.com/weather?key=4022259a"           
        
    }
}
