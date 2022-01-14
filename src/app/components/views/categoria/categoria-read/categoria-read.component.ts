import {Component, OnInit} from '@angular/core';
import {CategoriaService} from "../categoria.service";
import {CategoriaModel} from "../categoria.model";

@Component({
    selector: 'app-categoria-read',
    templateUrl: './categoria-read.component.html',
    styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

    categorias: CategoriaModel[] = [];

    displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];

    constructor(private service: CategoriaService) {
    }

    ngOnInit(): void {
        this.findAll();
    }

    findAll() {
        this.service.findAll().subscribe(resposta => {
            console.log(resposta);
            this.categorias = resposta;
        })
    }


}
