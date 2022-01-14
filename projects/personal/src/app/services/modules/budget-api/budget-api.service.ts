import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class BudgetApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  personalUrl = environment.personalUrl;

  // get all budgets belonging to a user
  public getBudgets(page: any, size: any, sortField: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-budget/budget?user=" + localStorage.getItem('personal_id')
      + "&page=" + page
      + "&size=" + size
      + "&ordering=" + sortField,
      this.endpoints.headers);
  }

  // create new budget
  public postBudget(budget: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-budget/budget/", budget, this.endpoints.headers);
  }

  // retreive, update and delete budget

  public getSingleBudget(): Observable<any>{
    return this.http.get(this.personalUrl + "module-budget/budget/" + sessionStorage.getItem('personal_budget_id'), this.endpoints.headers);
  }

  public putBudget(budget: any): Observable<any>{
    return this.http.put(this.personalUrl + "module-budget/budget/" + sessionStorage.getItem('personal_budget_id'), budget, this.endpoints.headers);
  }

  public deleteBudget(): Observable<any>{
    return this.http.delete(this.personalUrl + "module-budget/budget/" + sessionStorage.getItem('personal_budget_id'), this.endpoints.headers);
  }

  // get budget's income, add, update and delete income

  public getIncome(): Observable<any>{
    return this.http.get(this.personalUrl + "module-budget/income?budget=" + sessionStorage.getItem('personal_budget_id'), this.endpoints.headers);
  }

  public postIncome(incomeData: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-budget/income/", incomeData, this.endpoints.headers);
  }

  public putIncome(incomeId: any, incomeData: any): Observable<any>{
    return this.http.put(this.personalUrl + "module-budget/income/" + incomeId, incomeData, this.endpoints.headers);
  }

  public deleteIncome(incomeId: any): Observable<any>{
    return this.http.delete(this.personalUrl + "module-budget/income/" + incomeId, this.endpoints.headers);
  }

  // get budget's expenditure, add, update and delete expenditure

  public getExpenditure(): Observable<any>{
    return this.http.get(this.personalUrl + "module-budget/expenditure?budget=" + sessionStorage.getItem('personal_budget_id'), this.endpoints.headers);
  }

  public postExpenditure(expenditureData: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-budget/expenditure/", expenditureData, this.endpoints.headers);
  }

  public putExpenditure(expenditureId: any, expenditureData: any): Observable<any>{
    return this.http.put(this.personalUrl + "module-budget/expenditure/" + expenditureId, expenditureData, this.endpoints.headers);
  }

  public deleteExpenditure(expenditureId: any): Observable<any>{
    return this.http.delete(this.personalUrl + "module-budget/expenditure/" + expenditureId, this.endpoints.headers);
  }

  // dashboard

  public getCounts(model: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-budget/count?user=" + localStorage.getItem('personal_id') + "&model=" + model, this.endpoints.headers);
  }

  public getAnnotation(model: any): Observable<any>{
    return this.http.get(this.personalUrl + "module-budget/annotate?user=" + localStorage.getItem('personal_id') + "&model=" + model, this.endpoints.headers);
  }

}
