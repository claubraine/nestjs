import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class CheckNewTweetsTask {

    @Interval(10000)
    async handle() {
        console.log('********************')
        console.log('procurando tweets...')
    }
}
