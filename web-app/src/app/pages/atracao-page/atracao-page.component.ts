import { Component, OnInit } from '@angular/core';
import { Atracao } from './atracao';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atracao-page',
  templateUrl: './atracao-page.component.html',
  styleUrls: ['./atracao-page.component.scss'],
})
export class AtracaoPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('atracaoId');
      console.log(id);
    });
  }

  currentAtracao: Atracao = {
    id: '11a24b90',
    name: 'Passeio de 1 dia com almoço em Angra dos Reis',
    images: [
      { url: 'assets/images/atracao-1/1.jpg', alt: 'photo-1' },
      { url: 'assets/images/atracao-1/2.jpg', alt: 'photo 2' },
      { url: 'assets/images/atracao-1/3.jpg', alt: 'photo 3' },
      { url: 'assets/images/atracao-1/4.jpg', alt: 'photo 4' },
      { url: 'assets/images/atracao-1/5.jpg', alt: 'photo 5' },
    ],
    title:
      'Um passeio para descobrir a costa e fazer um passeio de barco pelas ilhas locais',
    descriptions: [
      'Este passeio lhe dará a oportunidade de viajar para a cidade litorânea de Angra dos Reis e explorar a baía.',
      'Você partirá do Rio de Janeiro e fará um passeio de carro pela Costa Verde. Ao chegar em Angra dos Reis, você irá até o porto, onde poderá embarcar em um cruzeiro de barco de 4 horas ao redor da Ilha Grande. Você vai parar em 3 locais deslumbrantes para nadar e fazer mergulho com snorkel nas águas cristalinas e descobrir seus habitantes marinhos.',
      'Durante o cruzeiro, você também terá a oportunidade de conhecer a história da ilha e da baía. O capitão ancorará em uma pequena ilha, onde você poderá almoçar em um restaurante acolhedor. No final do passeio, você voltará ao porto de Angra dos Reis e seguirá para o Rio de Janeiro.',
    ],
    location: 'Hotel Accomodare',
    day: 'Segunda, 13 de Abril de 2023',
    hour: 'Início: 07:00',
    ticketPrice: 202.33,
  };

  tickets: number = 0;

  totalPrice: number = 0;

  updateTotalPrice(): void {
    this.totalPrice =
      Math.round(this.tickets * this.currentAtracao.ticketPrice * 100) / 100;
  }

  increaseTickets(): void {
    if (this.tickets == 99) return;
    this.tickets++;

    this.updateTotalPrice();
  }

  decreaseTickets(): void {
    if (this.tickets == 0) return;
    this.tickets--;

    this.updateTotalPrice();
  }

  buyTickets(): void {
    console.log(this.tickets);
  }

  isDrawbarVisible: boolean = false;

  openDrawbar(): void {
    this.isDrawbarVisible = true;
  }

  closeDrawbar(): void {
    this.isDrawbarVisible = false;
  }
}
