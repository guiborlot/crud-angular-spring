import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";

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

    constructor(private service: ProductsService) {}

    ngOnInit(): void {
        this.service.list().subscribe(res => console.log(res));
    }
}
