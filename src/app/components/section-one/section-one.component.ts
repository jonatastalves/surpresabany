import { Component, OnInit } from '@angular/core';
import { Bany } from 'src/app/bany/shared/bany';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ToastService } from '../toast/toast-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit {

  formBany!: FormGroup;
  nomeDigitado: string = 'bany beatrice de almeida matias de souza'
  textoDanger: string = 'Rala daqui seu merda, essa homenagem não é pra você!';

    constructor(
      private formBuilder: FormBuilder,
      public toastService: ToastService,
      private router: Router)
      {}

    showDanger(dangerTpl:any) {
      this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 5000 });
    }

  ngOnInit(): void {
    this.createForm(new Bany());

  }



  createForm(bany: Bany){
    this.formBany = this.formBuilder.group({
      nome: new FormControl(bany.nome)
    })
  }

  onSubmit(){

    let nomedaBany = this.formBany.value

    if(nomedaBany.nome == this.nomeDigitado){
      this.router.navigate(['/homenagem']);
    }else{
      console.log(nomedaBany.nome, 'console aq');
      this.showDanger(this.textoDanger)
      this.createForm(new Bany())
    }
  }
}
