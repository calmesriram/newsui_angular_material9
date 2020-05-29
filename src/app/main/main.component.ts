import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogdeletioncomponentComponent } from '../dialogdeletioncomponent/dialogdeletioncomponent.component';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { DialogknowmoreComponent } from '../dialogknowmore/dialogknowmore.component';


var filesToUpload = "";
var ELEMENT_DATA1: any = [];
// var ELEMENT_DATA: any = [];
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  allnewarray: any = [];
  displayedColumns1: string[] = ['position', 'Image', 'title', 'Tag', 'Update', 'Delete'];
  displayedColumns2: string[] = ['position', 'Image', 'title', 'Tag','Description'];
  // displayedColumns2: string[] = ['position', 'Image', 'title', 'Tag','Description', 'Checkout'];
  dataSource;
  dataSource1;
  d: Object = {};
  ntitle: any;
  ndescription: any;
  ntag: any;
  public btnadd: Boolean = true;
  public btnaddis: Boolean = false;
  public btnupdatecancel: Boolean;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  pageEvent: any;
  firstFormGroup: FormGroup;
  public allnews: any = [];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(public api: ApiService, public _formBuilder: FormBuilder, public dialog: MatDialog, public ToastrService: ToastrService, public spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getnewsall();
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      tag: ['', Validators.required],
      fileupload: ['', Validators.required]
    });
    // this.dataSource1.paginator = this.paginator;
  }


  choose(event) {
    filesToUpload = event.target.files[0];
  }

  addnews() {
    this.spinner.show();
    this.btnaddis = true;
    if (this.firstFormGroup.value.title == "" || this.firstFormGroup.value.title == null &&
      this.firstFormGroup.value.description == "" || this.firstFormGroup.value.description == null &&
      this.firstFormGroup.value.tag == "" || this.firstFormGroup.value.tag == null &&
      filesToUpload == null || filesToUpload == "") {
      alert("Check all the controlls");
      this.btnaddis = false;
      this.spinner.hide();
      return;
    }
    let payload = {
      title: this.firstFormGroup.value.title,
      description: this.firstFormGroup.value.description,
      tag: this.firstFormGroup.value.tag,
    }
    const formData = new FormData();
    formData.append('pdata', JSON.stringify(payload))
    formData.append('file', filesToUpload);
    this.api.addnew(formData).then(res => {
      // console.log(res)
      if (res['status'] == true) {
        this.getnewsall();
        this.firstFormGroup.reset();
        filesToUpload = "";
        this.btnaddis = false;
        this.spinner.hide();
        this.ToastrService.success(res["msg"],"Acknowledgement",{timeOut:3000})
      }
    }).catch(e => {
      console.log(e);
      this.ToastrService.error(JSON.stringify(e),"Acknowledgement",{timeOut:3000})
      this.btnaddis = false;
      this.spinner.hide();
    })

  }

  getnewsall() {
    this.spinner.show();
    this.allnewarray.length = 0;
    this.api.allnews().then(res => {
      this.spinner.hide();
      res['data'].forEach((element, i) => {
        // console.log(element, i)
        this.allnewarray.push({ position: i, title: element.title, tag: element.tags, Images: element.imageurl, newsid: element.newsid, imageid: element.imageid, description: element.description })
      });
      this.dataSource = new MatTableDataSource(this.allnewarray);
      this.dataSource1 = new MatTableDataSource(this.allnewarray);
      this.dataSource1.paginator = this.paginator;

    }).catch(e => {
      this.spinner.hide();
      console.log(e);
    })
  }
  update(d) {
    this.d = d;
    this.btnadd = false;
    this.btnupdatecancel = true;
    this.ntitle = d.title;
    this.ndescription = d.description;
    this.ntag = d.tag;

  }
  updatenews() {
    this.spinner.show();
    console.log(this.d)
    let payload = {
      title: this.firstFormGroup.value.title,
      description: this.firstFormGroup.value.description,
      tag: this.firstFormGroup.value.tag,
      Images: this.d['Images'],
      imageid: this.d['imageid'],
      newsid: this.d['newsid']
    }
    const formData = new FormData();
    formData.append('pdata', JSON.stringify(payload))
    formData.append('file', filesToUpload);
    this.api.updatenews(formData).then(res => {
      this.spinner.hide();
      // console.log(res)
      if (res['status'] == true) {
        this.getnewsall();
        this.firstFormGroup.reset();
        filesToUpload = "";
        this.btnadd = true;
        this.btnupdatecancel = false;
        this.ToastrService.success(res["msg"],"Acknowledgement",{timeOut:3000})
      }
    }).catch(e => {
      console.log(e);
      this.spinner.hide();
      this.ToastrService.error(JSON.stringify(e),"Acknowledgement",{timeOut:3000})
    })
  }
  knowmore(d){
    const dialogRef = this.dialog.open(DialogknowmoreComponent, {
      width: '350px',
      data: d
    });
  }
  delete(d) {        
    const dialogRef = this.dialog.open(DialogdeletioncomponentComponent, {
      width: '350px',
      data: d
    });    
    dialogRef.afterClosed().subscribe(result => {                  
      if(result["status"] == true){        
        this.spinner.show();
        this.api.deletenews(result["newsid"]).then(res =>{
          // console.log(res)          
          if(res["status"]==true){
            this.spinner.hide();
            this.getnewsall();
            this.ToastrService.success(res["msg"],"Acknowledgement",{timeOut:3000})
          }
        }).catch(e =>{
          this.spinner.hide();
          console.log(e)
          this.ToastrService.error(JSON.stringify(e),"Acknowledgement",{timeOut:3000})
        })
      }
    });
  }
  cancel() {

    this.btnadd = true;
    this.btnupdatecancel = false;
    this.firstFormGroup.reset();
    filesToUpload = "";
  }
}
