import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Alumno } from '../interfaces/alumn.interface';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { Router } from '@angular/router';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-alumns',
  standalone: true,
  imports: [DxDataGridModule],
  templateUrl: './alumns.component.html',
  styleUrl: './alumns.component.scss'
})
export class AlumnsComponent implements OnInit {

  dataSource: Array<Alumno> =[];

  // columns= this.Columns;

  constructor(private service: RegisterService, private router: Router, private _alert: AlertService){}

  async ngOnInit(): Promise<void> {
    this._alert.loading('cargando...');
    const alumns = await this.service.getAlumns();
    console.log(alumns);
    this.dataSource = alumns.data; 
    this._alert.close();
  }

  onEdit(alumn:Alumno){
    console.log(alumn);
    const uri = 'register/alumns/edit'
    this.router.navigate([uri], { queryParams: { id: alumn.id } });
  }

  onAdd(){
    const uri = 'register/alumns/add';
    console.log(uri);
    this.router.navigate([uri]);
  }

  onToolbarPreparing(event: any): void {
    const { items } = event.toolbarOptions;
    const addButton = {
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'add',
        text: 'Agregar',
        hint: 'Agregar',
        type: 'normal',
        elementAttr: { id: 'agregarRegistros' },
        stylingMode: 'contained',
        onClick: () => this.onAdd()
      },
    };
    const addDetail = {
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'exportxlsx',
        text: 'Importar',
        hint: 'Agregar',
        type: 'normal',
        elementAttr: { id: 'agregarRegistros' },
        stylingMode: 'contained',
        onClick: () =>{console.log("object");}
      },
    };

    items.unshift( addDetail,addButton);
  }

  Columns:any[] = [
    { dataField: 'id', caption: 'Código',width: 100, allowEditing: false},
    { dataField: 'fullName', caption: 'Nombre',width: 250, allowEditing: false,
      calculateCellValue: (row: any) => {
        return `${row.firstName} ${row.secondName} ${row.lastName} ${row.secondLastName}`; 
      }
     },
    { dataField: 'dni', caption: 'Identidad', allowEditing: false},
    { dataField: 'phone', caption: 'Teléfono', width:140, allowEditing: false},
    { dataField: 'email', caption: 'Correo', allowEditing: false},
    {
      type: 'buttons',
      caption: 'Acciones',
      buttons: [
        {
          icon: 'edit',   // Ícono del botón
          hint: 'Editar', // Tooltip
          onClick: (e: any) => {
            this.onEdit(e.row.data); // Llama a un método en tu componente
          }
        }
      ]
    }  
  ];
  

}

