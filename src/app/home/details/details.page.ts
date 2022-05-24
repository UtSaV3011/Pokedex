import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
   details;
   p=1;
  constructor(public api: ApiService,private route: ActivatedRoute, private router: Router) { }
  back(){
    this.router.navigate(['/home']);

  }

  ngOnInit() {
    this.api.getPokemonDetail(this.route.snapshot.params.id).subscribe((res: any)=>{this.details=res;});
  }

}
