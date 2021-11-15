import { Component, OnInit, Input} from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FileUpload } from 'src/app/models/file-upload';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.scss']
})
export class UploadDetailsComponent implements OnInit {
  @Input() fileUpload!: FileUpload;

  [x: string]: any;

  closeResult: string= '';

  constructor(private uploadService: FileUploadService, private modalService: NgbModal, private clipboardApi: ClipboardService) { }

  ngOnInit(): void {
  }

  deleteFileUpload(fileUpload: FileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  copyText() {
    this.clipboardApi.copyFromContent(this.fileUpload.url)
  }

}
