export interface Foods{
    _id: string;
    createdAt: datetime;
    updatedAt: datetime;
    name: string;
    img: string;
    menu: [
        {
            _id: string,
            name: string,
            img: string,
            price: number,
        }
    ];
}