import { TarefaService, Tarefa } from '../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {
  tarefas: Tarefa[];
  constructor(private TarefaService: TarefaService ) {}

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    // this.tarefas = [
      
    //     new Tarefa(1, "Tarefa 1", false),
    //     new Tarefa(2, "Tarefa 2", true),
      
    // ]
  }
  listarTodos(): Tarefa[]{
    return this.TarefaService.listarTodos();
  }

  remover($event:any, tarefa: Tarefa): void{
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa "'+ tarefa.nome + '"?')){
      this.TarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
    alterarStatus(tarefa: Tarefa): void{
      if (confirm('Deseja Alterar o status da tarefa"'+ tarefa.nome+'"?')){
        this.TarefaService.alterarStatus(tarefa.id);
        this.tarefas= this.listarTodos();
      }
    }

  }


