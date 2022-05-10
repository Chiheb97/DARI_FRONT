import { Component, OnInit } from '@angular/core';
import { AbonnementService } from '../abonnement.service';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Abonnement } from '../abonnement';
@Component({
  selector: 'app-abonnement-client',
  templateUrl: './abonnement-client.component.html',
  styleUrls: ['./abonnement-client.component.css']
})
export class AbonnementClientComponent implements OnInit {
  listAbonnement : any ;
  stripePromise = loadStripe(environment.stripe);
  constructor(private abonnementService: AbonnementService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getallAbonnement();

  }
  getallAbonnement(){
    this.abonnementService.getallabonnement().subscribe(res=>this.listAbonnement=res);
  }
  async abonner(a:Abonnement):Promise<void>{  
    const payment = {
      name: a.name,
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: a.prix*100,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/abonnement-client',
      successUrl: 'http://localhost:4200',
    };
    
    const stripe = await this.stripePromise;
    this.http
      .post(`http://localhost:8091/SpringMVC/servlet/api/payment`, payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe?.redirectToCheckout({
          sessionId: data.id,
        });
      });
this.abonnementService.addAbonnement_client(a.id).subscribe();
    }

}
