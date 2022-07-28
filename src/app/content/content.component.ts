import { Component, OnInit } from '@angular/core';
import { TransactionServiceService } from '../Services/transaction-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  transactions :any;
  constructor(private api:TransactionServiceService) {
    
   }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(){
    this.api.getListTransactions().subscribe((res:any)=>{
      console.log(res);
      
      this.transactions = res
      console.log("aaaa");
      
      console.log(this.transactions);

    })
  }


}
