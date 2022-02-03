import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../product";
import { ProductsService } from "../products.service";

@Component({
    selector: "app-products-list",
    templateUrl: "./products-list.component.html",
    styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
    dataSource!: Observable<Product[]>;

    displayedColumns: string[] = ["id", "name", "description", "price"];

    constructor(private service: ProductsService) {}

    ngOnInit(): void {
        this.dataSource = this.service.list().pipe()
    }
}
