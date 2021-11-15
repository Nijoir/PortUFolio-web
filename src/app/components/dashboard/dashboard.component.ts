import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  [x: string]: any;
  
  fileUploads?: any[];

  closeResult: string= '';

  isHovering: boolean = false;

  files: File[] = [];

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  clickEvent(){
    this.status = true;       
  }

  clickEvent2()
  {
    this.status = false; 
  }

  onLogout() {
    this.auth.signOut().then( () => this.router.navigate(['']));
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
