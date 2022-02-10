import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { TweetsService } from '../tweets.service';

@Injectable()
export class CheckNewTweetsTask {
    private limit : number = 10;

    construtor(
        private tweetService: TweetsService,
        @Inject(CACHE_MANAGER)
        private cache: Cache
        ) {}

    @Interval(5000)
    async handle() {
        console.log('********************')
        console.log('procurando tweets...')
        let offset:number = await this.cache.get<number>('tweet-offset');
        offset = offset === undefined || offset === null ? 0: offset;
    }
}
