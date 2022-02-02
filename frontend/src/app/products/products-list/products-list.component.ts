import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-products-list",
    templateUrl: "./products-list.component.html",
    styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
    dataSource = [
        {
            id: 1,
            name: "The Lord of the Rings",
            description: "Lorem ipsum dolor sit amet, consectetur.",
            price: 190.5,
        },
        {
            id: 2,
            name: "The Lord of the Rings",
            description: "Lorem ipsum dolor sit amet, consectetur.",
            price: 590.5,
        },
        {
            id: 3,
            name: "The Lord of the Rings",
            description: "Lorem ipsum dolor sit amet, consectetur.",
            price: 20.5,
        },
    ];

    displayedColumns: string[] = ["id", "name", "description", "price"];

    constructor() {}

    ngOnInit(): void {}
}
