import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageService } from '../../core/data-storage.service';

@Component({
  selector: 'app-api-keys',
  templateUrl: './apiKeys.component.html',
  styleUrls: ['./apiKeys.component.css']
})
export class ApiKeysComponent implements OnInit {
  keys = 0;
  showAddKeyForm = false;
  showKeyPanel = true;
  addKeyForm: FormGroup;

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.addKeyForm = new FormGroup({
      'key': new FormControl(null, [Validators.required]),
      'secret': new FormControl(null, [Validators.required]),
      'name': new FormControl(null, [Validators.required])
    });
  }

  addKeyToggle() {
    this.showAddKeyForm = !this.showAddKeyForm;
    this.showKeyPanel = false;
  }

  onSubmit() {
    const keyForm = this.addKeyForm.value;
    this.dataStorageService.addKey(keyForm.key, keyForm.secret, keyForm.name)
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }
}
