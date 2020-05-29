import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogknowmore',
  templateUrl: './dialogknowmore.component.html',
  styleUrls: ['./dialogknowmore.component.css']
})
export class DialogknowmoreComponent implements OnInit {
  selecteddata:any;
  constructor(  public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public dat: any,public dialogRef: MatDialogRef<DialogknowmoreComponent>) { 
    this.selecteddata = dat;
      console.log(this.selecteddata,"selected one")
      // this.dialog.close('conform');
  }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close({newsid:this.selecteddata.newsid,status:true});
  }

}
