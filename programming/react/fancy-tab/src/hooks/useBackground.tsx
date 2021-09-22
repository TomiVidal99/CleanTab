/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {useEffect, useState} from 'react';
import { createClient } from 'pexels';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
export interface BackgroundImage {
    avgColor: string,
    photographer: string,
    photographerID: number,
    photographerURL: string,
    photoURL: string,
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MAIN CONTENT ~*/
const KEY_LENGTH = 56;
export const useBackground = (query: string, key: string): BackgroundImage | null => {
    const [backgrounds, setBackgrounds] = useState<BackgroundImage | null>(null);
    const [client, setClient] = useState<any>(null);

    // creates the pexels client
    useEffect(() => {
        if (key.length !== KEY_LENGTH) return;
        setClient(createClient(key));
    }, [key]);

    //retrieves background from Pexels API every time the user makes a request
    useEffect(() => {

        if (query === '' || client === null || client === undefined) return;

        // first i get the total images based on the query
        // then i get a random image based on the total images
        client.photos.search({ query, per_page: 1 })
            .then( ({total_results}: any) => {
                //console.log('got total results: ', total_results);
                const randomImageNumber: number = Math.ceil(Math.random() * total_results);

                //get a the random image and save it into the local state
                client.photos.search({ query, page: randomImageNumber, per_page: 1 })
                    .then( ({photos}: any) => {
                        //console.log('got random photo: ', photos);
                        const photo = photos[0];
                        // creates the image object
                        const newBackground: BackgroundImage = {
                            avgColor: photo.avg_color,
                            photographer: photo.photographer,
                            photographerID: photo.photographer_id,
                            photographerURL: photo.photographer_url,
                            photoURL: photo.src.original,
                        };
                        setBackgrounds(newBackground);
                    })
            })
            .catch( (err: any) => {if (err) throw err} );

    }, [query, client]);

    return(backgrounds);
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
