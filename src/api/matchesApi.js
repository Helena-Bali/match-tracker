import {$host} from './index';


export const fetchMatches = async () => {
    const response = await $host.get('fronttemp');
    return response.data.data.matches;
};

