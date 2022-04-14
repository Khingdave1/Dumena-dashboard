import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  approvedSchools = [
    {
      id: 1,
      name: 'Raberto Secondary School',
      headOfSchool: 'Ronald Richards',
      phoneNumber: '(405) 555-0128',
      schoolEmail: 'sara.cruz@example.com',
      schoolStatus: 'approved'
    },
    {
      id: 2,
      name: 'Deo Gratias',
      headOfSchool: 'Savannah Nguyen',
      phoneNumber: '(704) 555-0127',
      schoolEmail: 'nathan.roberts@example.com',
      schoolStatus: 'approved'
    },
    {
      id: 3,
      name: 'Funtag College',
      headOfSchool: 'Leslie Alexander',
      phoneNumber: '(629) 555-0129',
      schoolEmail: 'deanna.curtis@example.com',
      schoolStatus: 'decline'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    // this.approvedSchools.forEach((r: any) => {
    //   console.log(r.name)
    //   if (r.schoolStatus == 'approved') {
    //     document.getElementById('status')?.classList.add('success')
    //     console.log(r)
    //   } else {
    //     document.getElementById('status')?.classList.add('error')
    //   }
    // })
  }



}
