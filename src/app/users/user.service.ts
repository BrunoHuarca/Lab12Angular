import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): any[] {
    // Aquí debes implementar la lógica para obtener la lista de usuarios desde una API o cualquier otra fuente de datos
    // Puedes devolver los usuarios como un arreglo de objetos JSON
    return [
      { id: 1, name: 'Bruno', email: 'bruno@gmail.com' },
      { id: 2, name: 'Dante', email: 'dante@gmail.com' },
      { id: 3, name: 'Arnold', email: 'arnold@gmail.com' }
    ];
  }

  getUserDetails(id: number): any {
    // Aquí debes implementar la lógica para obtener los detalles del usuario con el ID proporcionado
    // Puedes hacer una llamada a una API o acceder a una fuente de datos para obtener la información detallada del usuario
    // Devuelve los detalles del usuario como un objeto JSON
    const users = this.getUsers();
    return users.find(user => user.id === id);
  }
}
