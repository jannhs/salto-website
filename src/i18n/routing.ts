import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['it', 'en'],

    defaultLocale: 'it', // used when no locale is set 
});