import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/data-fake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.css']
})
export class ContentComponent implements OnInit {
  titleNews: string = '';
  imageUrl: string = '';
  imageAlt: string = '';
  description: string = '';

  // Propriedade privada, vai armazenar o "id" do componente clicado. 
  private id: string = '0';


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Pega o valor do id exato da rota atual do componente "content"
    this.route.params.subscribe( params => this.id = params['id']);
    this.setarValoresComponente(this.id);
    // console.log(this.id);
  }
  
  setarValoresComponente(idRota: string){
    // Passa os dados que vem do 'dataFake' pelo id atual para a const 'resultBdFake'
    const resultBdFake = dataFake.filter(objDataFake => objDataFake.id === idRota)[0];
    this.titleNews = resultBdFake.title;
    this.imageUrl = resultBdFake.photo;
    this.imageAlt = resultBdFake.photoAlt;
    this.description = resultBdFake.description;
  }



}
