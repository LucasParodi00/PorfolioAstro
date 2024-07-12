export interface Items {
    titulo: string;
    descripcion: string;
}

export interface Educacion {
    fecha: number;
    educacion: {
        titulo: string;
        universidad: string;
        items: Items[];
    }[];
}

export interface ItemEducacion {
    titulo: string;
    universidad: string;
    items: Items[];
}