import { Component, OnInit } from '@angular/core';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [
    DemoService
  ]
})
export class CountryComponent implements OnInit {

  countryList: Array<any>;

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    this.demoService.getAllCountry().subscribe((resp: Array<any>) => {
      this.countryList = resp;
    });
  }
}
