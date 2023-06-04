import { page } from '$app/stores';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({parent}) => {
    
    return {
        props: {
            slug: page.params,
        },
    };
};