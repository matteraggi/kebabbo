export interface LocationData {
    name: string;
    lat: number|null;
    lng: number|null;
    accuracy: number|null;
    timestamp: number|null;
}

export interface KebabberProps {        
    id: number;
    name: string;
    description: string;
    mapLink: string;
    map: string;
    quality: number;
    price: number;
    dimension: number;
    fun: number;
    menu: number;
    rating: number;
    lat: number;
    lng: number;
}
