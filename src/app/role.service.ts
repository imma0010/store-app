import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  role = '';
  id: number;

  constructor() { }

  setRole(role) {
    this.role = role;
    console.log("Role Setted As: " + this.role);
  }

  getRole() {
    return this.role;
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}
