import { Controller , Get } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller()
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {}
    @Get("/weather")
    getTime(): string{
        return this.weatherService.getTime();
    }
}
