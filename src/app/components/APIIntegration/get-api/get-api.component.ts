import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any [] = []
  constructor(private http: HttpClient,private appointmentService: AppointmentService)
  {

  }

  getAllUsers()
  {
    this.appointmentService.getAllPost().subscribe((responce:any) => {
    this.userList = responce;
    alert(this.userList)
    });
  }

}
