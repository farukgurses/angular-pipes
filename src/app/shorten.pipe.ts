import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
    
    transform(value: any, limit: number) {
        console.log("value " + value)
        if(value.length > limit){
            return value.substr(0, 10) + '...'
        }
        return value
    }

}